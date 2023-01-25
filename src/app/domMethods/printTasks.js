import formatISO from "date-fns/formatISO";
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
    const taskSetDeadline = document.createElement("input");
    const taskDeadline = document.createElement("div");
    const taskDescription = document.createElement("textarea");
    const buttons = document.createElement("div");
    const viewInfoBTN = document.createElement("button");
    const hideInfoBTN = document.createElement("button");
    const removeBTN = document.createElement("button");
    const progressBTN = document.createElement("button");
    const saveBTN = document.createElement("button");

    label.classList.add("task-label");
    taskName.classList.add("task-name");
    viewInfoBTN.classList.add("label-buttons");
    hideInfoBTN.classList.add("label-buttons");
    removeBTN.classList.add("label-buttons");
    label.setAttribute("data-id", task.getID());
    taskSetDeadline.setAttribute("type", "date");
    const date = formatISO(new Date(), { representation: "date" });
    taskSetDeadline.setAttribute("min", date);

    // taskDescription.setAttribute("rows", "5");
    // taskDescription.setAttribute("cols", "50");
    taskDescription.setAttribute("placeholder", "Comment");

    taskName.textContent = `Name: ${task.getTitle()}`;
    taskCreationDate.textContent = `Creation date: ${task.getCreationDate()}`;
    taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;
    taskDescription.value = task.getDescription();
    // label.setAttribute("data-id", task.getID());
    todo.appendChild(label);

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "More Info";
    hideInfoBTN.innerHTML = "Hide Info";
    saveBTN.innerHTML = "Save";
    progressBTN.innerHTML = ">>";
    buttons.append(viewInfoBTN, removeBTN, progressBTN);
    label.append(taskName, buttons);

    removeBTN.addEventListener("click", () => {
      project.tasksUI.removeByID(task.getID());
      todo.removeChild(label);
      console.log("XD");
    });
    viewInfoBTN.addEventListener("click", () => {
      label.append(taskCreationDate, taskSetDeadline, taskDescription, saveBTN);
      buttons.replaceChild(hideInfoBTN, viewInfoBTN);
      if (task.getDeadlineDate() !== null) {
        label.replaceChild(taskDeadline, taskSetDeadline);
      }
    });
    hideInfoBTN.addEventListener("click", () => {
      label.removeChild(taskCreationDate);
      label.removeChild(taskSetDeadline);
      label.removeChild(taskDescription);
      label.removeChild(saveBTN);
      buttons.replaceChild(viewInfoBTN, hideInfoBTN);
    });
    saveBTN.addEventListener("click", () => {
      if (taskDescription.value.length !== 0) {
        task.setDescription(taskDescription.value);
      }
      if (taskSetDeadline.value.length !== 0) {
        // console.log(taskDeadline.value);
        // task.setDeadlineDate(new Date());
        task.setDeadlineDate(taskSetDeadline.value);
        taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;

        // label.removeChild(taskSetDeadline);
        label.replaceChild(taskDeadline, taskSetDeadline);
      }
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
