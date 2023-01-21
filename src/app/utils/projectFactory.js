import formatISO9075 from "date-fns/formatISO9075";
import isStringLengthValid from "./isStringLengthValid";
import todoUI from "../todoUI";
import generateRandomString from "./randomString";

const projectFactory = () => {
  let projectName = "Project";
  const creationDate = formatISO9075(new Date());
  const projectID = generateRandomString(10);

  return {
    setProjectName(newName) {
      if (isStringLengthValid(newName, 30)) {
        projectName = newName;
      }
    },
    getProjectName: () => projectName,
    getCreationDate: () => creationDate,
    getID: () => projectID,
    todoUI: todoUI(),
  };
};
export default projectFactory;
