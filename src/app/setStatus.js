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
    todoStatus.length = 0;
    todoStatus.push(statusList[statusIndex]);
  }
}
export default setStatus;
