import projectFactory from "./utils/projectFactory";
import removeInstance from "./utils/removeInstance";

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
