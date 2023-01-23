import { add } from "date-fns";
import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";

// const newProjectBTN = document.querySelector(".new-project-btn");

const projectDom = () => {
  const projectName = document.createElement("div");
  const newProjectBTN = document.createElement("button");
  const viewInfoBTN = document.createElement("button");
  const removeBTN = document.createElement("button");
  const viewTasksBTN = document.createElement("button");

  projectName.classList.add("project-name");
  viewInfoBTN.classList.add("label-buttons");
  removeBTN.classList.add("label-buttons");
  viewTasksBTN.classList.add("label-buttons");

  const projectsWrapper = document.querySelector(".projects-wrapper");
  const projectsList = document.querySelector(".projects-list");
  const projectLabels = document.querySelectorAll("project-label");

  newProjectBTN.textContent = "+";

  projectsWrapper.appendChild(newProjectBTN);
  projectLabels.forEach((label) => {
    label.appendChild(projectName, viewInfoBTN, viewTasksBTN, removeBTN);
  });

  newProjectBTN.addEventListener("click", () => {
    projectDom().printProjects();
  });

  return {
    printProjects: () => {
      printProjects();
    },
    printButtons: () => {},
  };
};
export default projectDom;
