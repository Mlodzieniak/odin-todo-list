import todoFactory from "./todoFactory";
import setPriority from "./setPriority";
import setStatus from "./setStatus";
import removeInstance from "./removeInstance";

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
  };
};
export default todoUI;
