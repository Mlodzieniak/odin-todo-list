import projectsUI from "../projectsUI";

function removeProject(projectID) {
  const projects = projectsUI.getProjects;
  projects.forEach((project) => {
    if (projectID === project.getID()) {
      projectsUI.remove(project);
    }
  });
}
export default removeProject;
