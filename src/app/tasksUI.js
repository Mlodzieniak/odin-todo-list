import todoFactory from "./utils/todoFactory";
import setPriority from "./utils/setPriority";
import setStatus from "./utils/setStatus";
import removeInstance from "./utils/removeInstance";
import tasksToComplete from "./utils/tasksToComplete";

const tasksUI = () => {
  const todoList = [];
  return {
    add(title, refID) {
      todoList.push(todoFactory(title, refID));
    },
    getList: todoList,
    setPriority: (todoIndex, priorityIndex) =>
      setPriority(todoList[todoIndex], priorityIndex),
    setStatus: (todoIndex, statusIndex) =>
      setStatus(todoList[todoIndex], statusIndex),
    remove: (index) => removeInstance(todoList, index),
    tasksToComplete: tasksToComplete(todoList),
    removeByID: (taskID) => {
      const task = todoList.find((task2) => task2.getID === taskID);
      const index = todoList.indexOf(task);
      todoList.splice(index, 1);
    },
  };
};
export default tasksUI;
