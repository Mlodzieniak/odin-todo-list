import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";

// const newProjectBTN = document.querySelector(".new-project-btn");

const projectDom = () => {
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const newProjectBTN = document.createElement("button");
  newProjectBTN.textContent = "+";

  newProjectBTN.addEventListener("click", () => {
    projectsUI.add();
    printProjects();
  });
  projectsWrapper.appendChild(newProjectBTN);

  return {
    printProjects: () => {
      printProjects();
    },
    printButtons: () => {},
  };
};
export default projectDom;
