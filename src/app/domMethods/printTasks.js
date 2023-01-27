import formatISO from "date-fns/formatISO";

const printTasks = (project) => {
  const container = document.querySelector(".project-content");
  // const todo = document.createElement("div");
  const todo = document.querySelector(".todo-list");
  const doing = document.querySelector(".doing-list");
  const done = document.querySelector(".done-list");

  container.appendChild(todo);
  const tasks = project.tasksUI.getList();
  function print(task) {
    const label = document.createElement("div");
    const taskName = document.createElement("div");
    const taskCreationDate = document.createElement("div");
    const taskSetDeadline = document.createElement("input");
    const taskSetDeadlineLabel = document.createElement("label");
    const statusList = document.createElement("select");
    const statusListLabel = document.createElement("label");
    const todoOption = document.createElement("option");
    const doingOption = document.createElement("option");
    const doneOption = document.createElement("option");
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
    taskSetDeadline.setAttribute("name", "new-deadline");
    taskSetDeadlineLabel.setAttribute("for", "new-deadline");
    const date = formatISO(new Date(), { representation: "date" });
    taskSetDeadline.setAttribute("min", date);
    taskDescription.setAttribute("placeholder", "Comment");
    statusList.setAttribute("name", "status");
    statusList.setAttribute("id", "status");
    todoOption.setAttribute("value", "0");
    todoOption.textContent = "Todo";
    doingOption.setAttribute("value", "1");
    doingOption.textContent = "Doing";
    doneOption.setAttribute("value", "2");
    doneOption.textContent = "Done";
    statusList.append(todoOption, doingOption, doneOption);

    taskName.textContent = `Name: ${task.getTitle()}`;
    taskCreationDate.textContent = `Creation date: ${task.getCreationDate()}`;
    taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;
    taskSetDeadlineLabel.textContent = "Set deadline:";
    statusListLabel.textContent = "Status:";
    taskDescription.value = task.getDescription();
    if (task.getStatus().toString === "Todo") {
      todo.appendChild(label);
    } else if (task.getStatus().toString === "Doing") {
      doing.appendChild(label);
    } else if (task.getStatus().toString === "Done") {
      done.appendChild(label);
    }

    removeBTN.innerHTML = "\u274C";
    viewInfoBTN.innerHTML = "More Info";
    hideInfoBTN.innerHTML = "Hide Info";
    saveBTN.innerHTML = "Save";
    progressBTN.innerHTML = ">>";
    buttons.append(viewInfoBTN, removeBTN);
    label.append(taskName, buttons);
    removeBTN.addEventListener("click", () => {
      project.tasksUI.removeByID(task.getID());
      todo.removeChild(label);
    });
    viewInfoBTN.addEventListener("click", () => {
      label.append(
        taskCreationDate,
        taskSetDeadlineLabel,
        taskSetDeadline,
        statusListLabel,
        statusList,
        progressBTN,
        taskDescription,
        saveBTN
      );
      const optionsList = document.getElementById("status");
      optionsList.selectedIndex = task.getStatus().index;

      buttons.replaceChild(hideInfoBTN, viewInfoBTN);
      if (task.getDeadlineDate() !== null) {
        label.replaceChild(taskDeadline, taskSetDeadline);
      }
    });
    hideInfoBTN.addEventListener("click", () => {
      label.removeChild(taskCreationDate);
      label.removeChild(taskSetDeadline);
      label.removeChild(taskDescription);
      label.removeChild(progressBTN);
      label.removeChild(statusList);
      label.removeChild(statusListLabel);
      label.removeChild(taskSetDeadlineLabel);
      label.removeChild(saveBTN);
      buttons.replaceChild(viewInfoBTN, hideInfoBTN);
    });
    progressBTN.addEventListener("click", () => {
      const newStatus = parseInt(statusList.value, 10);
      task.setStatus(newStatus);
      const parent = label.parentNode;
      parent.removeChild(label);
      print(task);
    });
    saveBTN.addEventListener("click", () => {
      if (taskDescription.value.length !== 0) {
        task.setDescription(taskDescription.value);
      }
      if (taskSetDeadline.value.length !== 0) {
        task.setDeadlineDate(taskSetDeadline.value);
        label.removeChild(taskSetDeadlineLabel);
        taskDeadline.textContent = `Deadline: ${task.getDeadlineDate()}`;
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
