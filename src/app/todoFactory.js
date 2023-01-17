import formatISO9075 from "date-fns/formatISO9075";
import isDateValid from "./utils/isDateValid";

const todoFactory = () => {
  let title = "Todo";
  let description = "";
  const creationDate = formatISO9075(new Date());
  let deadlineDate = null;
  const priority = [
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
      title = newTitle;
    },
    getTitle: () => title,

    setDescription(newDesc) {
      description = newDesc;
    },
    getDescription: () => description,

    getCreationDate: () => creationDate,

    setDeadlineDate(newDeadLineDate) {
      deadlineDate = isDateValid(newDeadLineDate);
    },
    getDeadlineDate: () => deadlineDate,
    setPriority(priorityValue) {
      priority.forEach((element) => {
        element.isSelected = 0;
        if (element.value === priorityValue) {
          element.isSelected = 1;
        }
      });
    },
    getPriority: () => priority.find((element) => element.isSelected === 1),
  };
};
export default todoFactory;
