import { useEffect, useMemo, useState } from "react";
import { Header, Icon, Input, Select, Link } from "./components";
import { transformData, toOption, toHeader } from "./mappers";
import FALLBACK_DATA from "./fallback.json";

const IMG_SRC =
  "https://1.bp.blogspot.com/-PoEV5r8Vqdo/X6IFVTsmNHI/AAAAAAAAC80/aiGye4JoOJEZs5oGouOdCeg7_XZYdJFKQCLcBGAsYHQ/w900/IMG_20201104_003029_436.jpg";
const API_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
const GITHUB = "https://github.com/Kristina-Basandovska/Currency-exchange";

function App() {
  const [formState, setFormState] = useState({
    input1: "",
    input2: "",
    select1: "USD",
    select2: "EUR",
  });

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const passed = transformData(data);
        setData(passed);
      })
      .catch(() => {
        const passed = transformData(FALLBACK_DATA);
        setData(passed);
      });
  }, []);

  const options = useMemo(() => Object.values(data).map(toOption), [data]);
  const headers = useMemo(() => Object.values(data).map(toHeader), [data]);

  function format(number) {
    if (!number) {
      return "";
    }
    return number.toFixed(2);
  }

  function getRate(currencyCode) {
    return data[currencyCode].rate;
  }

  function handleChange1(event) {
    const input1 = event.target.value;
    const { select1, select2 } = formState;
    const rate1 = getRate(select1);
    const rate2 = getRate(select2);

    const input2 = format((rate1 * input1) / rate2);
    setFormState((prev) => ({ ...prev, input1, input2 }));
  }

  function handleChange2(event) {
    const input2 = event.target.value;
    const { select1, select2 } = formState;
    const rate1 = getRate(select1);
    const rate2 = getRate(select2);

    const input1 = format((rate2 * input2) / rate1);
    setFormState((prev) => ({ ...prev, input1, input2 }));
  }

  function handleSelect1(event) {
    const select1 = event.target.value;
    const { input1, select2 } = formState;
    const rate1 = getRate(select1);
    const rate2 = getRate(select2);

    const input2 = format((rate1 * input1) / rate2);
    setFormState((prev) => ({ ...prev, select1, input2 }));
  }

  function handleSelect2(event) {
    const select2 = event.target.value;
    const { select1, input1 } = formState;
    const rate1 = getRate(select1);
    const rate2 = getRate(select2);

    const input2 = format((rate1 * input1) / rate2);

    setFormState((prev) => ({
      ...prev,
      select2,
      input2,
    }));
  }

  function handleSwap() {
    setFormState((prev) => ({
      ...prev,
      select1: prev.select2,
      select2: prev.select1,
      input1: "",
      input2: "",
    }));
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center lg:w-11/12 xl:w-3/4">
      <div
        style={{ backgroundImage: `url(${IMG_SRC})` }}
        className="h-screen hidden w-full rounded-l-lg bg-gray-400 bg-center bg-cover lg:block lg:w-5/12"
      ></div>

      <div className="w-full rounded-lg ml-4 bg-white p-5 lg:w-7/12 lg:rounded-l-none mb-10 h-full  shadow-md flex-grow">
        <Header list={headers} />
        <hr className="mb-6 border-t" />
        <div className="rounded-lg border   p-4 shadow-md border-gray-700 space-y-6 bg-gray-800 sm:p-6 lg:p-8">
          <h3 className="text-xl font-medium text-white">Currency Converter</h3>
          <Select
            value={formState.select1}
            name="select1"
            onChange={handleSelect1}
            options={options}
          />
          <Input
            value={formState.input1}
            name="input1"
            type="number"
            onChange={handleChange1}
          />
          <button onClick={handleSwap}>
            <Icon />
          </button>
          <Select
            value={formState.select2}
            name="select2"
            onChange={handleSelect2}
            options={options}
          />
          <Input
            value={formState.input2}
            name="input2"
            type="number"
            onChange={handleChange2}
          />
          <Link link={GITHUB} text="GitHub" description="Need code? " />
        </div>
      </div>
    </div>
  );
}

export default App;
