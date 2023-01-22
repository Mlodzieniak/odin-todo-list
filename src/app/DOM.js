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
    let projectID = event.target.parentNode.parentNode.dataset.id;
    if (projectID === undefined) {
      projectID = event.target.dataset.id;
    }
    const projects = projectsUI.getProjects;
    projects.forEach((project) => {
      if (projectID === project.getID()) {
        printTasks(project.todoUI.getList(), projectID);
      }
    });
    const newTaskBTN = document.querySelector(".new-task-btn");
    newTaskBTN.addEventListener("click", (event2) => dom().newTask(event2));
    dom().removeTaskBTNsListener();
  },
  newProject() {
    projectsUI.add();
    dom().printProjects(projectsUI.getProjects);
  },
  newTask: (event) => {
    const projectID = event.target.dataset.id;
    const projects = projectsUI.getProjects;
    console.log(`new task${projectID}`);
    projects.forEach((project) => {
      if (project.getID() === projectID) {
        project.todoUI.add();
        // printTasks(project.todoUI.getList(), projectID);
        // dom().printProjects();
        dom().printTasks(event);
      }
    });
  },
  removeProject: (event) => {
    const projectID = event.target.parentNode.parentNode.dataset.id;
    removeProject(projectID);
    dom().printProjects(projectsUI.getProjects);
  },
  removeTask: (event) => {
    const taskID = event.target.parentNode.parentNode.dataset.taskid;
    const projectID = event.target.parentNode.parentNode.dataset.projectid;
    const project = projectsUI.getProjectById(projectID);
    project.todoUI.removeTaskById(taskID);
    // dom().printTasks(event);
  },
  removeBTNsListener: () => {
    const removeBTNs = document.querySelectorAll(".remove-btn");
    removeBTNs.forEach((button) => {
      button.addEventListener("click", (event) => {
        dom().removeProject(event);
      });
    });
  },
  removeTaskBTNsListener: () => {
    const removeTaskBTNs = document.querySelectorAll(".remove-task-btn");
    removeTaskBTNs.forEach((button) => {
      button.addEventListener("click", (event) => {
        dom().removeTask(event);
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
