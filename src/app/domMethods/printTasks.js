import tasksUI from "../tasksUI";

const printTasks = (project) => {
  const container = document.querySelector(".project-content");
  const todo = document.createElement("div");
  container.appendChild(todo);
  const tasks = project.tasksUI.getList();
  console.log("XDD");
  console.log(tasks);
  function print(task) {
    const label = document.createElement("div");
    const taskName = document.createElement("div");
    const taskCreationDate = document.createElement("div");
    const taskDeadline = document.createElement("input");
    const taskDescription = document.createElement("textarea");
    const viewInfoBTN = document.createElement("button");
    const removeBTN = document.createElement("button");
    const progressBTN = document.createElement("button");

    label.classList.add("task-label");
    taskName.classList.add("task-name");
    viewInfoBTN.classList.add("label-buttons");
    removeBTN.classList.add("label-buttons");
    taskDeadline.setAttribute("input", "date");
    taskDescription.setAttribute("rows", "5");
    taskDescription.setAttribute("cols", "50");

    taskName.textContent = `Name: ${task.getTaskName()}`;
    taskCreationDate.textContent = `Creation date: ${task.getCreationDate()}`;
    taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;
    taskDescription.innerHTML =
      // label.setAttribute("data-id", task.getID());
      todo.appendChild(label);

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "More Info";

    label.append(taskName, viewInfoBTN, removeBTN, progressBTN);
    removeBTN.addEventListener("click", () => {
      tasksUI.removeByID(task.getID());
      todo.removeChild(label);
    });
    viewInfoBTN.addEventListener("click", () => {
      label.insertBefore(taskCreationDate, viewInfoBTN);
      label.insertBefore(taskDeadline, viewInfoBTN);
      label.insertBefore(taskDescription, viewInfoBTN);
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
      console.log("XD");
      print(task);
    }
  });
};
export default printTasks;
