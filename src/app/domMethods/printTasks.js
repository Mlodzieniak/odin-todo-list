import tasksUI from "../tasksUI";

const printTasks = (project) => {
  const container = document.querySelector(".project-content");
  // const todo = document.createElement("div");
  const todo = document.querySelector(".todo-list");
  container.appendChild(todo);
  const tasks = project.tasksUI.getList();
  function print(task) {
    const label = document.createElement("div");
    const taskName = document.createElement("div");
    const taskCreationDate = document.createElement("div");
    const taskDeadline = document.createElement("input");
    const taskDescription = document.createElement("textarea");
    const buttons = document.createElement("div");
    const viewInfoBTN = document.createElement("button");
    const hideInfoBTN = document.createElement("button");
    const removeBTN = document.createElement("button");
    const progressBTN = document.createElement("button");

    label.classList.add("task-label");
    taskName.classList.add("task-name");
    viewInfoBTN.classList.add("label-buttons");
    hideInfoBTN.classList.add("label-buttons");
    removeBTN.classList.add("label-buttons");
    label.setAttribute("data-id", task.getID());
    taskDeadline.setAttribute("type", "date");
    // taskDescription.setAttribute("rows", "5");
    // taskDescription.setAttribute("cols", "50");
    taskDescription.setAttribute("placeholder", "Comment");

    taskName.textContent = `Name: ${task.getTitle()}`;
    taskCreationDate.textContent = `Creation date: ${task.getCreationDate()}`;
    taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;
    // taskDescription.innerHTML =
    // label.setAttribute("data-id", task.getID());
    todo.appendChild(label);

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "More Info";
    hideInfoBTN.innerHTML = "Hide Info";
    progressBTN.innerHTML = ">>";
    buttons.append(viewInfoBTN, removeBTN, progressBTN);
    label.append(taskName, buttons);
    removeBTN.addEventListener("click", () => {
      tasksUI.removeByID(task.getID());
      todo.removeChild(label);
    });
    viewInfoBTN.addEventListener("click", () => {
      label.append(taskCreationDate, taskDeadline, taskDescription);
      buttons.replaceChild(hideInfoBTN, viewInfoBTN);
    });
    hideInfoBTN.addEventListener("click", () => {
      label.removeChild(taskCreationDate);
      label.removeChild(taskDeadline);
      label.removeChild(taskDescription);
      buttons.replaceChild(viewInfoBTN, hideInfoBTN);
    });
  }

  tasks.forEach((task) => {
    const taskLabels = document.querySelectorAll(".task-label");

    if (taskLabels.length > 0) {
      const idContainer = [];
      taskLabels.forEach((taskLabel) => {
        idContainer.push(taskLabel.dataset.id);
      });
      if (!idContainer.includes(task.getID())) {
        print(task);
      }
    } else if (taskLabels.length === 0) {
      print(task);
    }
  });
};
export default printTasks;
