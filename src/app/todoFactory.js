import formatISO9075 from "date-fns/formatISO9075";
import isDateValid from "./utils/isDateValid";
import isStringLengthValid from "./utils/isStringLenghtValid";

const todoFactory = () => {
  let title = "Todo";
  let description = "";
  const creationDate = formatISO9075(new Date());
  let deadlineDate = null;
  const priority = [];
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
    // setPriorityTo(priorityValue) {
    //   priority.forEach((element) => {
    //     element.isSelected = 0;
    //     if (element.value === priorityValue) {
    //       element.isSelected = 1;
    //     }
    //   });
    // },
    getTitle: () => title,
    getDescription: () => description,
    getCreationDate: () => creationDate,
    getDeadlineDate: () => deadlineDate,
    getPriority: () => priority,
    getSelectedPriority: () =>
      priority.find((element) => element.isSelected === 1),
  };
};
export default todoFactory;
