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

    label.classList.add("project-label");
    projectName.classList.add("project-name");
    viewInfoBTN.classList.add("label-buttons");
    removeBTN.classList.add("label-buttons");
    viewTasksBTN.classList.add("label-buttons");

    projectName.textContent = `Name: ${project.getProjectName()}`;
    projectCreationDate.textContent = `Creation date: ${project.getCreationDate()}`;
    taskCounter.textContent = `Tasks to perform: ${project.tasksUI.tasksToComplete}`;
    label.setAttribute("data-id", project.getID());
    projectsList.appendChild(label);

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "Info";
    viewTasksBTN.innerHTML = "Tasks";

    label.append(
      projectName,
      projectCreationDate,
      taskCounter,
      viewTasksBTN,
      removeBTN
    );
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
