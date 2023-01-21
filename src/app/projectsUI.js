import projectFactory from "./utils/projectFactory";
import removeInstance from "./utils/removeInstance";

const projectsUI = () => {
  const projects = [];
  return {
    add() {
      projects.push(projectFactory());
    },
    remove: (project) => {
      const index = projects.indexOf(project);
      if (index > -1) {
        removeInstance(projects, index);
      }
    },
    getProjects: projects,
  };
};
export default projectsUI();
