import projectFactory from "./utils/projectFactory";
import removeInstance from "./utils/removeInstance";

const projectsUI = () => {
  const projects = [];
  // const projects = localStorage.getItem("projects");
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
    removeByID: (projectID) => {
      const found = projects.find((project) => project.getID() === projectID);
      const index = projects.indexOf(found);
      projects.splice(index, 1);
    },
    getProjects: projects,
    getProjectByID: (projectID) =>
      projects.find((project) => project.getID() === projectID),
  };
};
export default projectsUI();
