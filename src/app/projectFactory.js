import todoFactory from "./todoFactory";

const projectFactory = () => {
  let projectName = "Project";
  const list = [];
  return {
    add() {
      list.push(todoFactory());
    },
    getList: () => list,

    setProjectName(newName) {
      projectName = newName;
    },
    getProjectName: () => projectName,
  };
};
export default projectFactory;
