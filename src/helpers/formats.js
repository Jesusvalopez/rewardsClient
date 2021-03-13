export const numberToMoney = (value, sign = "$") => {
  const response = sign + formatedNumber(value);
  return response;
};

export const formatedNumber = (value) => {
  const response = Math.round(value)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return response;
};
export const formatedValue = (value) => {
  const sign = value > 0 ? "+" : "";

  const val = numberToMoney(value, sign);

  return val;
};
