import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";
import removeProject from "./domMethods/removeProject";

const newProjectBTN = document.querySelector(".new-project-btn");

const dom = () => ({
  printProjects: (projects) => printProjects(projects),
  newProject() {
    projectsUI.add();
    printProjects(projectsUI.getProjects);
    dom().removeBTNsListener();
  },
  removeProject: (event) => {
    const projectID = event.target.parentNode.parentNode.dataset.id;
    removeProject(projectID);
    dom().printProjects(projectsUI.getProjects);
    dom().removeBTNsListener();
  },
  removeBTNsListener: () => {
    const removeBTNs = document.querySelectorAll(".remove-btn");
    removeBTNs.forEach((button) => {
      button.addEventListener("click", (event) => {
        dom().removeProject(event);
      });
    });
  },
});

newProjectBTN.addEventListener("click", () => dom().newProject());

export default dom;
