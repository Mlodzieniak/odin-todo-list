const printTasks = (tasks, projectID) => {
  const projectContent = document.querySelector(".project-content");

  const todoWrapper = document.createElement("div");
  todoWrapper.classList.add("todo-Wrapper");
  const todoHeader = document.createElement("div");
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");
  todoHeader.textContent = "Todo:";
  todoWrapper.appendChild(todoHeader);
  todoWrapper.appendChild(todoList);

  const doingWrapper = document.createElement("div");
  doingWrapper.classList.add("doing-Wrapper");
  const doingHeader = document.createElement("div");
  const doingList = document.createElement("div");
  doingList.classList.add("doing-list");
  doingHeader.textContent = "Doing:";
  doingWrapper.appendChild(doingHeader);
  doingWrapper.appendChild(doingList);

  const doneWrapper = document.createElement("div");
  doneWrapper.classList.add("done-Wrapper");
  const doneHeader = document.createElement("div");
  const doneList = document.createElement("div");
  doneList.classList.add("done-list");
  doneHeader.textContent = "Done:";
  doneWrapper.appendChild(doneHeader);
  doneWrapper.appendChild(doneList);

  // todoWrapper.innerHTML = "";
  // doingWrapper.innerHTML = "";
  // doneWrapper.innerHTML = "";
  projectContent.innerHTML = "";
  const newTaskBTN = document.createElement("button");
  newTaskBTN.setAttribute("type", "button");
  newTaskBTN.classList.add("new-task-btn");
  newTaskBTN.setAttribute("data-id", projectID);
  newTaskBTN.innerHTML = "+ New task";
  projectContent.appendChild(newTaskBTN);

  tasks.forEach((task) => {
    const label = document.createElement("div");
    const labelData = document.createElement("div");
    const labelButtons = document.createElement("div");

    // task data
    const name = document.createElement("div");
    const creationDate = document.createElement("div");
    const deadlineDate = document.createElement("div");
    const priority = document.createElement("div");
    const projectID = document.createElement("div");

    // Buttons
    const removeBTN = document.createElement("button");
    removeBTN.setAttribute("type", "button");
    removeBTN.classList.add("remove-task-btn");
    removeBTN.innerHTML = "\u274C";

    name.textContent = `Name: ${task.getTitle()}`;
    creationDate.textContent = `Creation date: ${task.getCreationDate()}`;
    deadlineDate.textContent = `Deadline: ${task.getDeadlineDate()}`;
    priority.textContent = `Priority: ${task.getPriority().toString}`;
    // projectID.textContent = `ID: ${project.getID()}`;
    labelData.appendChild(name);
    labelData.appendChild(creationDate);
    labelData.appendChild(deadlineDate);
    labelData.appendChild(priority);
    labelData.appendChild(projectID);

    labelButtons.appendChild(removeBTN);

    label.classList.add("project-label");
    label.appendChild(labelData);
    label.appendChild(labelButtons);
    // label.setAttribute("data-id", project.getID());
    if (task.getStatus().toString === "Todo") {
      todoList.appendChild(label);
    } else if (task.getStatus().toString === "Doing") {
      doingList.appendChild(label);
    } else if (task.getStatus().toString === "Done") {
      doneList.appendChild(label);
    }
  });
  projectContent.appendChild(todoWrapper);
  projectContent.appendChild(doingWrapper);
  projectContent.appendChild(doneWrapper);
};
export default printTasks;
