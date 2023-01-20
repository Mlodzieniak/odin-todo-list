import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";

const newProjectBTN = document.querySelector(".new-project-btn");

const dom = () => ({
  printProjects: (projects) => printProjects(projects),
  newProject() {
    projectsUI.add();
    this.printProjects(projectsUI.getProjects);
  },
});
newProjectBTN.addEventListener("click", () => dom().newProject());

export default dom;
