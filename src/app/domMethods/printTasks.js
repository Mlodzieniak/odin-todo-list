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
    const taskCreationDateLabel = document.createElement("div");
    const taskCreationDate = document.createElement("span");
    const taskSetDeadline = document.createElement("input");
    const taskSetDeadlineLabel = document.createElement("label");
    const statusList = document.createElement("select");
    const statusListLabel = document.createElement("label");
    const todoOption = document.createElement("option");
    const doingOption = document.createElement("option");
    const doneOption = document.createElement("option");
    const taskDeadlineLabel = document.createElement("div");
    const taskDeadline = document.createElement("span");
    const taskDescription = document.createElement("textarea");
    const buttons = document.createElement("div");
    const viewInfoBTN = document.createElement("button");
    const hideInfoBTN = document.createElement("button");
    const removeBTN = document.createElement("button");
    const progressBTN = document.createElement("button");
    const saveBTN = document.createElement("button");

    label.classList.add("task-label");
    taskName.classList.add("task-name");
    taskCreationDateLabel.classList.add("task-creation-date-label");
    taskCreationDate.classList.add("task-creation-date");
    taskSetDeadline.classList.add("task-deadline", "input-text");
    taskSetDeadlineLabel.classList.add("task-deadline-label");
    taskDeadlineLabel.classList.add("task-deadline-label");
    taskDeadline.classList.add("task-deadline");
    statusList.classList.add("task-status-list", "input-text");
    statusListLabel.classList.add("task-status-list-label");
    progressBTN.classList.add("progress-btn");
    taskDescription.classList.add("task-description", "input-text");
    viewInfoBTN.classList.add("view-task-info-btn");
    hideInfoBTN.classList.add("view-task-info-btn");
    removeBTN.classList.add("remove-task-btn");
    saveBTN.classList.add("save-btn");
    buttons.classList.add("task-buttons");

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

    taskName.innerHTML = `<span>${task.getTitle()}</span>`;
    taskCreationDateLabel.innerHTML = "Creation date:";
    taskCreationDate.innerHTML = `${task.getCreationDate()}`;
    taskDeadlineLabel.innerHTML = "Deadline:";
    taskDeadline.innerHTML = `${task.getDeadlineDate()}`;
    taskSetDeadlineLabel.innerHTML = "Set deadline:";
    statusListLabel.innerHTML = "Status:";
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
    progressBTN.innerHTML = "Move";
    buttons.append(viewInfoBTN, removeBTN);
    label.append(taskName, buttons);
    removeBTN.addEventListener("click", () => {
      project.tasksUI.removeByID(task.getID());
      todo.removeChild(label);
    });
    viewInfoBTN.addEventListener("click", () => {
      label.append(
        taskCreationDateLabel,
        taskCreationDate,
        taskSetDeadlineLabel,
        taskSetDeadline,
        statusListLabel,
        statusList,
        progressBTN,
        taskDescription,
        saveBTN
      );
      label.setAttribute("style", "gap: 0.5rem");
      const optionsList = document.getElementById("status");
      optionsList.selectedIndex = task.getStatus().index;

      buttons.replaceChild(hideInfoBTN, viewInfoBTN);
      if (task.getDeadlineDate() !== null) {
        label.replaceChild(taskDeadline, taskSetDeadline);
      }
    });
    hideInfoBTN.addEventListener("click", () => {
      label.setAttribute("style", "gap: 0rem");
      label.removeChild(taskCreationDateLabel);
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
        // label.removeChild(taskSetDeadlineLabel);
        label.replaceChild(taskDeadlineLabel, taskSetDeadlineLabel);
        taskDeadline.innerHTML = `${task.getDeadlineDate()}`;
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
