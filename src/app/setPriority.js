function setPriority(todo, priorityIndex) {
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
}
export default setPriority;
