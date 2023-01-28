import projectsUI from "./projectsUI";
import tasksUI from "./tasksUI";

const storage = () => {
  const projects = projectsUI.getProjects;
  const tasks = tasksUI.getList;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("projects", JSON.stringify(projects));
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  });
};
export default storage;
