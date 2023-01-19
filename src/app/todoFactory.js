import formatISO9075 from "date-fns/formatISO9075";
import isDateValid from "./utils/isDateValid";
import isStringLengthValid from "./utils/isStringLenghtValid";

const todoFactory = () => {
  let title = "Todo";
  let description = "";
  const creationDate = formatISO9075(new Date());
  let deadlineDate = null;
  const priority = [];
  const status = [];
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
