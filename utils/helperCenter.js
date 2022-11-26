import moment from "dayjs";

export const formatMoney = (num = 0) => {
  return parseInt(num)
    .toFixed(0)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const formatDateWithMoment = (date, format) => {
  return date ? moment(date).format(format) : "---";
};
