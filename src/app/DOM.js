import projectsUI from "./projectsUI";

const list = document.querySelector(".projects-list");
const newProjectBTN = document.querySelector(".new-project-btn");

const dom = () => ({
  printProjects(projects) {
    list.innerHTML = "";
    projects.forEach((project) => {
      const label = document.createElement("div");
      const name = document.createElement("div");
      const creationDate = document.createElement("div");
      const todos = document.createElement("div");

      name.textContent = `Name: ${project.getProjectName()}`;
      creationDate.textContent = `Creation date: ${project.getCreationDate()}`;
      todos.textContent = `Tasks to perform: ${project.todoUI.tasksToComplete}`;
      label.appendChild(name);
      label.appendChild(creationDate);
      label.appendChild(todos);

      label.classList.add("project-label");
      list.appendChild(label);
    });
  },
  newProject() {
    projectsUI.add();
    this.printProjects(projectsUI.getProjects);
  },
});
newProjectBTN.addEventListener("click", () => dom().newProject());

export default dom;
