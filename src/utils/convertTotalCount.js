export const convertTotalCount = (total) => {
  if (total >= 1000) {
    let decimal = total / 1000;
    return decimal.toFixed(1) + " K";
  } else return total;
};
