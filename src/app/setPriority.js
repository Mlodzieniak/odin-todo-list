import getKeyByValue from "./utils/getKeyByValue";

const setPriority = (todo, priorityIndex) => {
  const priorityList = [
    {
      color: "blue",
      toString: "Low",
    },
    {
      color: "orange",
      toString: "Medium",
    },
    {
      color: "red",
      toString: "High",
    },
  ];
  if (priorityIndex > -1 && priorityIndex < 3) {
    const todoPriority = todo.getPriority();
    todoPriority.length = 0;
    todoPriority.push(priorityList[priorityIndex]);
  }
};
export default setPriority();
/*
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
  */
//   console.log(prioritys);
//   if (priorityValue > -1 && priorityValue < 4) {
//     prioritys.forEach((element) => {
//       element.isSelected = 0;
//       if (element.value === priorityValue) {
//         element.isSelected = 1;
//       }
//     });
//   }
