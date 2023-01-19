import projectFactory from "./projectFactory";

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
