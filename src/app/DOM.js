import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";
import printTasks from "./domMethods/printTasks";
import removeProject from "./domMethods/removeProject";

const newProjectBTN = document.querySelector(".new-project-btn");

const dom = () => ({
  printProjects: (projects) => {
    printProjects(projects);
    dom().removeBTNsListener();
    dom().selectProjectBTNsListener();
  },
  printTasks: (event) => {
    const projectID = event.target.parentNode.parentNode.dataset.id;
    console.log(projectID);
    const projects = projectsUI.getProjects;
    projects.forEach((project) => {
      if (projectID === project.getID()) {
        printTasks(project.todoUI.getList());
      }
    });
    // printTasks();
  },
  newProject() {
    projectsUI.add();
    dom().printProjects(projectsUI.getProjects);
  },
  newTask: () => {},
  removeProject: (event) => {
    const projectID = event.target.parentNode.parentNode.dataset.id;
    removeProject(projectID);
    dom().printProjects(projectsUI.getProjects);
  },
  removeBTNsListener: () => {
    const removeBTNs = document.querySelectorAll(".remove-btn");
    removeBTNs.forEach((button) => {
      button.addEventListener("click", (event) => {
        dom().removeProject(event);
      });
    });
  },
  selectProjectBTNsListener: () => {
    const selectProjectBTNs = document.querySelectorAll(".project-label");
    selectProjectBTNs.forEach((button) => {
      button.addEventListener("click", (event) => {
        // dom().removeProject(event);
        dom().printTasks(event);
      });
    });
  },
});

newProjectBTN.addEventListener("click", () => dom().newProject());

export default dom;
