import todoFactory from "./todoFactory";

const todoUI = () => {
  const todoList = {
    todo: [],
    doing: [],
    done: [],
  };
  return {
    add() {
      todoList.todo.push(todoFactory());
    },
    getList: () => todoList,
  };
};
export default todoUI;
