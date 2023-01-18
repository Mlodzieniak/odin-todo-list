import formatISO9075 from "date-fns/formatISO9075";
import todoFactory from "./todoFactory";
import isStringLengthValid from "./utils/isStringLenghtValid";

const projectFactory = () => {
  let projectName = "Project";
  const creationDate = formatISO9075(new Date());
  // const list = [];
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

    setProjectName(newName) {
      if (isStringLengthValid(newName, 30)) {
        projectName = newName;
      }
    },
    getProjectName: () => projectName,
    getCreationDate: () => creationDate,
  };
};
export default projectFactory;
