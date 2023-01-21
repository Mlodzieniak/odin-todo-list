const list = document.querySelector(".projects-list");
const printProjects = (projects) => {
  list.innerHTML = "";
  projects.forEach((project) => {
    const label = document.createElement("div");
    const labelData = document.createElement("div");
    const labelButtons = document.createElement("div");

    // Project data
    const name = document.createElement("div");
    const creationDate = document.createElement("div");
    const todos = document.createElement("div");

    // Buttons
    const removeBTN = document.createElement("button");
    removeBTN.setAttribute("type", "button");
    removeBTN.classList.add("remove-btn");
    removeBTN.innerHTML = "\u274C";

    name.textContent = `Name: ${project.getProjectName()}`;
    creationDate.textContent = `Creation date: ${project.getCreationDate()}`;
    todos.textContent = `Tasks to perform: ${project.todoUI.tasksToComplete}`;
    labelData.appendChild(name);
    labelData.appendChild(creationDate);
    labelData.appendChild(todos);

    labelButtons.appendChild(removeBTN);

    label.classList.add("project-label");
    label.appendChild(labelData);
    label.appendChild(labelButtons);
    label.setAttribute("data-id", project.getID());
    list.appendChild(label);
  });
};
export default printProjects;
