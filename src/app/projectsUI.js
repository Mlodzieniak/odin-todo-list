import projectFactory from "./projectFactory";
import removeInstance from "./removeInstance";

const projectsUI = () => {
  const projects = [];
  return {
    add() {
      projects.push(projectFactory());
    },
    remove: (index) => removeInstance(projects, index),

    getProjects: projects,
  };
};
export default projectsUI();
