function setStatus(todo, statusIndex) {
  const statusList = [
    {
      color: "blue",
      toString: "Todo",
    },
    {
      color: "pink",
      toString: "Doing",
    },
    {
      color: "green",
      toString: "Done",
    },
  ];

  if (statusIndex > -1 && statusIndex < 3) {
    const todoStatus = todo.getStatus();
    todoStatus.color = statusList[statusIndex].color;
    todoStatus.toString = statusList[statusIndex].toString;
  }
}
export default setStatus;
