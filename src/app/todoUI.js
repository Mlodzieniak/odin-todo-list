import todoFactory from "./utils/todoFactory";
import setPriority from "./utils/setPriority";
import setStatus from "./utils/setStatus";
import removeInstance from "./utils/removeInstance";
import tasksToComplete from "./utils/tasksToComplete";

const todoUI = () => {
  const todoList = [];
  return {
    add() {
      todoList.push(todoFactory());
    },
    getList: () => [...todoList],
    setPriority: (todoIndex, priorityIndex) =>
      setPriority(todoList[todoIndex], priorityIndex),
    setStatus: (todoIndex, statusIndex) =>
      setStatus(todoList[todoIndex], statusIndex),
    remove: (index) => removeInstance(todoList, index),
    tasksToComplete: tasksToComplete(todoList),
  };
};
export default todoUI;
