import formatISO9075 from "date-fns/formatISO9075";
import formatISO from "date-fns/formatISO";
import isStringLengthValid from "./isStringLengthValid";
import generateRandomString from "./randomString";

const todoFactory = (name) => {
  let title = name;
  let description = "";
  const creationDate = formatISO9075(new Date());
  const taskID = generateRandomString(15);
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
      console.log(newDeadLineDate);
      // deadlineDate = formatISO(newDeadLineDate);
      deadlineDate = newDeadLineDate;
    },
    getTitle: () => title,
    getDescription: () => description,
    getCreationDate: () => creationDate,
    getDeadlineDate: () => deadlineDate,
    getPriority: () => priority,
    getStatus: () => status,
    getID: () => taskID,
  };
};
export default todoFactory;
