import formatISO9075 from "date-fns/formatISO9075";
import isDateValid from "./utils/isDateValid";
import isStringLengthValid from "./utils/isStringLenghtValid";
import setPriority from "./setPriority";

const todoFactory = () => {
  let title = "Todo";
  let description = "";
  const creationDate = formatISO9075(new Date());
  let deadlineDate = null;
  const prioritys = [
    {
      isSelected: 1, // 0 - off, 1 - on
      value: 1,
      color: "blue",
      toString: "Low",
    },
    {
      isSelected: 0, // 0 - off, 1 - on
      value: 2,
      color: "orange",
      toString: "Medium",
    },
    {
      isSelected: 0, // 0 - off, 1 - on
      value: 3,
      color: "red",
      toString: "High",
    },
  ];
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
    setPriorityTo(priorityValue) {
      prioritys.forEach((element) => {
        element.isSelected = 0;
        if (element.value === priorityValue) {
          element.isSelected = 1;
        }
      });
    },
    getTitle: () => title,
    getDescription: () => description,
    getCreationDate: () => creationDate,
    getDeadlineDate: () => deadlineDate,
    getPrioritys: () => prioritys,
    getSelectedPriority: () =>
      prioritys.find((element) => element.isSelected === 1),
  };
};
export default todoFactory;
