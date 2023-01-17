import isFuture from "date-fns/isFuture";

const isDateValid = (date) => {
  if (isFuture(date)) return date;
  return "Error: Given date must be set in future.";
};
export default isDateValid;
