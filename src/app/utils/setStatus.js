function setStatus(status, statusIndex) {
  const statusList = [
    {
      color: "blue",
      toString: "Todo",
      index: 0,
    },
    {
      color: "pink",
      toString: "Doing",
      index: 1,
    },
    {
      color: "green",
      toString: "Done",
      index: 2,
    },
  ];

  if (statusIndex > -1 && statusIndex < 3) {
    console.log(statusIndex);
    const todoStatus = status;
    todoStatus.color = statusList[statusIndex].color;
    todoStatus.toString = statusList[statusIndex].toString;
    todoStatus.index = statusList[statusIndex].index;
  }
}
export default setStatus;
