import printTasks from "./domMethods/printTasks";

// const newProjectBTN = document.querySelector(".new-project-btn");

const taskDom = (project) => {
  const tasksWrapper = document.querySelector(".project-content");
  const todoTasks = document.createElement("div");
  const todoHeader = document.createElement("h1");
  const doingTasks = document.createElement("div");
  const doingHeader = document.createElement("h1");
  const doneTasks = document.createElement("div");
  const doneHeader = document.createElement("h1");

  const newTaskBTN = document.createElement("button");
  const newTaskName = document.createElement("input");
  const acceptBTN = document.createElement("button");
  const nameError = document.createElement("div");

  todoTasks.classList.add("task-list-wrapper");
  todoTasks.classList.add("todo-list");
  todoHeader.textContent = "Todo";
  todoTasks.appendChild(todoHeader);
  doingTasks.classList.add("task-list-wrapper");
  doingTasks.classList.add("doing-list");
  doingHeader.textContent = "Doing";
  doingTasks.appendChild(doingHeader);
  doneTasks.classList.add("task-list-wrapper");
  doneTasks.classList.add("done-list");
  doneHeader.textContent = "Done";
  doneTasks.appendChild(doneHeader);

  tasksWrapper.innerHTML = "";

  newTaskName.setAttribute("type", "text");
  newTaskName.setAttribute("placeholder", "task's name");
  newTaskName.value = "TASK";
  newTaskName.classList.add("input-text");

  newTaskBTN.textContent = "+ New task";
  newTaskBTN.classList.add("new-project-btn");
  acceptBTN.textContent = "Accept";
  acceptBTN.classList.add("new-project-btn");
  nameError.textContent = "Name should have between 3 and 30 characters.";

  // tasksWrapper.appendChild(doneTasks);
  // tasksWrapper.appendChild(doingTasks);
  // tasksWrapper.appendChild(todoTasks);
  tasksWrapper.append(todoTasks, doingTasks, doneTasks);

  newTaskBTN.addEventListener("click", () => {
    todoTasks.appendChild(newTaskName);
    todoTasks.appendChild(acceptBTN);
    todoTasks.removeChild(newTaskBTN);
  });
  acceptBTN.addEventListener("click", () => {
    if (newTaskName.value.length < 3 || newTaskName.value.length > 30) {
      todoTasks.insertBefore(nameError, newTaskName);
    } else {
      project.tasksUI.add(newTaskName.value, project.getID);
      printTasks(project);
      todoTasks.removeChild(newTaskName);
      todoTasks.removeChild(acceptBTN);
      todoTasks.appendChild(newTaskBTN);
      if (nameError.parentNode === todoTasks) {
        todoTasks.removeChild(nameError);
      }
    }
  });
  printTasks(project);
  todoTasks.appendChild(newTaskBTN);
};
export default taskDom;
