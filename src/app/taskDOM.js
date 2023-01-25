import tasksUI from "./tasksUI";
import printTasks from "./domMethods/printTasks";

// const newProjectBTN = document.querySelector(".new-project-btn");

const taskDom = (project) => {
  const tasksWrapper = document.querySelector(".project-content");
  const todoTasks = document.createElement("div");
  const doingTasks = document.createElement("div");
  const doneTasks = document.createElement("div");

  const newTaskBTN = document.createElement("button");
  const newTaskName = document.createElement("input");
  const acceptBTN = document.createElement("button");
  const nameError = document.createElement("div");

  todoTasks.classList.add("task-list-wrapper");
  todoTasks.classList.add("todo-list");

  tasksWrapper.innerHTML = "";

  newTaskName.setAttribute("type", "text");
  newTaskName.setAttribute("placeholder", "task's name");
  newTaskName.value = "TASK";

  newTaskBTN.textContent = "+";
  acceptBTN.textContent = "Accept";
  nameError.textContent = "Name should have between 3 and 30 characters.";

  tasksWrapper.appendChild(todoTasks);
  tasksWrapper.appendChild(doingTasks);
  tasksWrapper.appendChild(doneTasks);
  newTaskBTN.addEventListener("click", () => {
    todoTasks.appendChild(newTaskName);
    todoTasks.appendChild(acceptBTN);
    todoTasks.removeChild(newTaskBTN);
  });
  acceptBTN.addEventListener("click", () => {
    if (newTaskName.value.length < 3 || newTaskName.value.length > 30) {
      todoTasks.insertBefore(nameError, newTaskName);
    } else {
      project.tasksUI.add(newTaskName.value);
      // console.log(tasksUI().getList());
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

  // // DUMMY's
  // const event = new Event("click");
  // newtaskBTN.dispatchEvent(event);
  // newtaskName.value = "wyjdz z domu";
  // acceptBTN.dispatchEvent(event);
  // newtaskBTN.dispatchEvent(event);
  // newtaskName.value = "wypij kole";
  // acceptBTN.dispatchEvent(event);
  // newtaskBTN.dispatchEvent(event);
  // newtaskName.value = "wejdz do domu";
  // acceptBTN.dispatchEvent(event);
};
export default taskDom;
