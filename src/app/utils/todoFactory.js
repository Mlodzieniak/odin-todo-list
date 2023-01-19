import formatISO9075 from "date-fns/formatISO9075";
import isDateValid from "./isDateValid";
import isStringLengthValid from "./isStringLengthValid";

const todoFactory = () => {
  let title = "Todo";
  let description = "";
  const creationDate = formatISO9075(new Date());
  let deadlineDate = null;
  // new created todo's get default priority low
  const priority = {
    color: "blue",
    toString: "Low",
  };
  // new created todo's get default status todo

  const status = {
    color: "blue",
    toString: "Todo",
  };
  return {
    setTitle(newTitle) {
      if (isStringLengthValid(newTitle, 30)) {
        title = newTitle;
      }
    },
    setDescription(newDesc) {
      if (isStringLengthValid(newDesc, 500)) {
        description = newDesc;
      }
    },
    setDeadlineDate(newDeadLineDate) {
      deadlineDate = isDateValid(newDeadLineDate);
    },
    getTitle: () => title,
    getDescription: () => description,
    getCreationDate: () => creationDate,
    getDeadlineDate: () => deadlineDate,
    getPriority: () => priority,
    getStatus: () => status,
  };
};
export default todoFactory;
