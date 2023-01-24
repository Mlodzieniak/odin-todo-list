import projectFactory from "./utils/projectFactory";
import removeInstance from "./utils/removeInstance";

const projectsUI = () => {
  const projects = [];
  return {
    add(name) {
      projects.push(projectFactory(name));
    },
    remove: (project) => {
      const index = projects.indexOf(project);
      if (index > -1) {
        removeInstance(projects, index);
      }
    },
    getProjects: projects,
    getProjectById: (projectID) =>
      projects.find((project) => project.getID() === projectID),
  };
};
export default projectsUI();
