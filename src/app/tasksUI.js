import todoFactory from "./utils/todoFactory";
import setPriority from "./utils/setPriority";
import setStatus from "./utils/setStatus";
import removeInstance from "./utils/removeInstance";
import tasksToComplete from "./utils/tasksToComplete";

const tasksUI = () => {
  const todoList = [];
  return {
    add(title) {
      todoList.push(todoFactory(title));
    },
    getList: () => [...todoList],
    setPriority: (todoIndex, priorityIndex) =>
      setPriority(todoList[todoIndex], priorityIndex),
    setStatus: (todoIndex, statusIndex) =>
      setStatus(todoList[todoIndex], statusIndex),
    remove: (index) => removeInstance(todoList, index),
    tasksToComplete: tasksToComplete(todoList),
    removeTaskById: (taskID) => {
      const task = todoList.find((task2) => task2.getID() === taskID);
      const index = todoList.indexOf(task);
      removeInstance(todoList, index);
    },
  };
};
export default tasksUI;
