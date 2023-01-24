import projectsUI from "../projectsUI";

const projects = projectsUI.getProjects;
const projectsList = document.querySelector(".projects-list");
const printProjects = () => {
  function print(project) {
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
    taskCounter.textContent = `Tasks to perform: ${project.todoUI.tasksToComplete}`;
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
    // label.appendChild(viewInfoBTN);
    // viewInfoBTN.addEventListener("click", (event) => {
    //   event.target.parentNode.appendChild(projectCreationDate, taskCounter);
    // });
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
