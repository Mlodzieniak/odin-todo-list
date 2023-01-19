import projectFactory from "./projectFactory";
import todoUI from "./todoUI";

const projectsUI = () => {
  const projects = [];
  return {
    add() {
      projects.push(projectFactory());
    },
    remove(index) {
      projects.splice(index, 1);
    },
    getProjects: projects,
  };
};
export default projectsUI();
