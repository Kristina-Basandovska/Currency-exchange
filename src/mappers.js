const ALLOWED = ["CAD", "KZT", "JPY", "EUR", "PLN", "AED", "USD"];
// {
//     "r030": 36,
//     "txt": "Австралійський долар",
//     "rate": 21.3722,
//     "cc": "AUD",
//     "exchangedate": "25.04.2022"
//   },

export function transformData(list) {
  const obj = {};
  list.forEach((el) => {
    if (ALLOWED.includes(el.cc)) {
      obj[el.cc] = el;
    }
  });
  return {
    ...obj,
    UAH: {
      txt: "Гривня",
      rate: 1,
      cc: "UAH",
    },
  };
}

export function toOption(currency) {
  return { label: `${currency.txt} - ${currency.cc}`, value: currency.cc };
}

export function toHeader(currency) {
  return {
    label: currency.cc,
    value: currency.rate.toFixed(2),
  };
}
