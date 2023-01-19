import formatISO9075 from "date-fns/formatISO9075";
import isStringLengthValid from "./isStringLengthValid";
import todoUI from "../todoUI";

const projectFactory = () => {
  let projectName = "Project";
  const creationDate = formatISO9075(new Date());

  return {
    setProjectName(newName) {
      if (isStringLengthValid(newName, 30)) {
        projectName = newName;
      }
    },
    getProjectName: () => projectName,
    getCreationDate: () => creationDate,
    todoUI: todoUI(),
  };
};
export default projectFactory;
