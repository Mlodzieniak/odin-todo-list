import todoFactory from "./todoFactory";
import setPriority from "./setPriority";

const todoUI = () => {
  const todoList = [];
  return {
    add() {
      todoList.push(todoFactory());
    },
    getList: () => [...todoList],
    setPriority: (todoIndex, priorityIndex) =>
      setPriority(todoList[todoIndex], priorityIndex),
  };
};
export default todoUI;
