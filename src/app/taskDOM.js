import tasksUI from "./tasksUI";
import printTasks from "./domMethods/printTasks";

// const newProjectBTN = document.querySelector(".new-project-btn");

const taskDom = (project) => {
  const tasksWrapper = document.querySelector(".project-content");
  const newTaskBTN = document.createElement("button");
  const newTaskName = document.createElement("input");
  const acceptBTN = document.createElement("button");
  const nameError = document.createElement("div");

  newTaskName.setAttribute("type", "text");
  newTaskName.setAttribute("placeholder", "task's name");

  newTaskBTN.textContent = "+";
  acceptBTN.textContent = "Accept";
  nameError.textContent = "Name should have between 3 and 30 characters.";

  newTaskBTN.addEventListener("click", () => {
    tasksWrapper.appendChild(newTaskName);
    tasksWrapper.appendChild(acceptBTN);
    tasksWrapper.removeChild(newTaskBTN);
  });
  acceptBTN.addEventListener("click", () => {
    if (newTaskName.value.length < 3 || newTaskName.value.length > 30) {
      tasksWrapper.insertBefore(nameError, newTaskName);
    } else {
      tasksUI().add(newTaskName.value);
      console.log(tasksUI().getList);
      printTasks(project);
      tasksWrapper.removeChild(newTaskName);
      tasksWrapper.removeChild(acceptBTN);
      tasksWrapper.appendChild(newTaskBTN);
      if (nameError.parentNode === tasksWrapper) {
        tasksWrapper.removeChild(nameError);
      }
    }
  });
  tasksWrapper.appendChild(newTaskBTN);

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
