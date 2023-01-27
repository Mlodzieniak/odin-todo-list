import projectsUI from "../projectsUI";
import taskDom from "../taskDOM";

const projects = projectsUI.getProjects;
const projectsList = document.querySelector(".projects-list");
const printProjects = () => {
  function print(project) {
    localStorage.setItem(project.getID(), project.getProjectName);

    const label = document.createElement("div");
    const projectName = document.createElement("div");
    const projectCreationDate = document.createElement("div");
    const taskCounter = document.createElement("div");
    const viewInfoBTN = document.createElement("button");
    const removeBTN = document.createElement("button");
    const viewTasksBTN = document.createElement("button");
    const projectDataContainer = document.createElement("div");
    const projectButtons = document.createElement("div");

    label.classList.add("project-label");
    projectName.classList.add("project-name");
    removeBTN.classList.add("remove-btn");
    viewTasksBTN.classList.add("view-info-btn");
    projectDataContainer.classList.add("project-data-container");
    projectButtons.classList.add("project-buttons");

    projectName.textContent = `${project.getProjectName()}`;
    projectCreationDate.innerHTML = `Created: <span>${project.getCreationDate()}</span>`;
    taskCounter.innerHTML = `Todo's: <span>${project.tasksUI.tasksToComplete}</span>`;
    label.setAttribute("data-id", project.getID());
    projectsList.appendChild(label);

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "Info";
    viewTasksBTN.innerHTML = "Tasks";

    projectDataContainer.append(projectName, projectCreationDate, taskCounter);
    projectButtons.append(viewTasksBTN, removeBTN);

    label.append(projectDataContainer, projectButtons);
    removeBTN.addEventListener("click", () => {
      projectsUI.removeByID(project.getID());
      projectsList.removeChild(label);
    });
    viewTasksBTN.addEventListener("click", () => {
      taskDom(project);
    });
    localStorage.setItem(project.getID(), project);
  }

  projects.forEach((project) => {
    const projectLabels = document.querySelectorAll(".project-label");

    if (projectLabels.length > 0) {
      const idContainer = [];
      projectLabels.forEach((projectLabel) => {
        idContainer.push(projectLabel.dataset.id);
      });
      if (!idContainer.includes(project.getID())) {
        print(project);
      }
    } else if (projectLabels.length === 0) {
      print(project);
    }
  });
};
export default printProjects;
