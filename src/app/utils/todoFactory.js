import formatISO9075 from "date-fns/formatISO9075";
import formatISO from "date-fns/formatISO";
import isStringLengthValid from "./isStringLengthValid";
import generateRandomString from "./randomString";
import setStatus from "./setStatus";

const todoFactory = (name, parentProject) => {
  let title = name;
  let description = "";
  const creationDate = formatISO9075(new Date());
  const taskID = generateRandomString(15);
  const referenceID = parentProject;
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
    index: 0,
  };
  return {
    setTitle(newTitle) {
      if (isStringLengthValid(newTitle, 30)) {
        title = newTitle;
      }
    },
    set setDescription(newDesc) {
      description = newDesc;
    },
    set setDeadlineDate(newDeadLineDate) {
      deadlineDate = newDeadLineDate;
    },
    setStatus: (newStatus) => setStatus(status, newStatus),
    get getTitle() {
      return title;
    },
    get getDescription() {
      return description;
    },
    get getCreationDate() {
      return creationDate;
    },
    get getDeadlineDate() {
      return deadlineDate;
    },
    get getPriority() {
      return priority;
    },
    get getStatus() {
      return status;
    },
    get getID() {
      return taskID;
    },
    get getReferenceID() {
      return referenceID;
    },
  };
};
export default todoFactory;
