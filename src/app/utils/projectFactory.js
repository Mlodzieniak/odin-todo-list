import formatISO9075 from "date-fns/formatISO9075";
import isStringLengthValid from "./isStringLengthValid";
import tasksUI from "../tasksUI";
import generateRandomString from "./randomString.js";

const projectFactory = (name) => {
  let projectName = name;
  const creationDate = formatISO9075(new Date(), { representation: "date" });
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
    tasksUI: tasksUI(),
  };
};
export default projectFactory;
