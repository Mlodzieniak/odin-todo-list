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
    todoPriority.color = priorityList[priorityIndex].color;
    todoPriority.toString = priorityList[priorityIndex].toString;
    // todoPriority.push(priorityList[priorityIndex]);
  }
}
export default setPriority;
