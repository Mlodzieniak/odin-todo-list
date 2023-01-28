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
    setDescription(newDesc) {
      description = newDesc;
    },
    setDeadlineDate(newDeadLineDate) {
      deadlineDate = newDeadLineDate;
    },
    setStatus: (newStatus) => setStatus(status, newStatus),
    getTitle: title,
    getDescription: description,
    getCreationDate: creationDate,
    getDeadlineDate: deadlineDate,
    getPriority: priority,
    getStatus: status,
    getID: taskID,
    getReferenceID: referenceID,
  };
};
export default todoFactory;
