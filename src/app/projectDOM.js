import projectsUI from "./projectsUI";
import printProjects from "./domMethods/printProjects";

// const newProjectBTN = document.querySelector(".new-project-btn");

const projectDom = () => {
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const newProjectBTN = document.createElement("button");
  const newProjectName = document.createElement("input");
  const acceptBTN = document.createElement("button");
  const nameError = document.createElement("div");

  newProjectName.setAttribute("type", "text");
  newProjectName.setAttribute("placeholder", "Project's name");

  newProjectBTN.textContent = "+";
  acceptBTN.textContent = "Accept";
  nameError.textContent = "Name should have between 3 and 30 characters.";

  newProjectBTN.addEventListener("click", () => {
    projectsWrapper.appendChild(newProjectName);
    projectsWrapper.appendChild(acceptBTN);
    projectsWrapper.removeChild(newProjectBTN);
  });
  acceptBTN.addEventListener("click", () => {
    if (newProjectName.value.length < 3 || newProjectName.value.length > 30) {
      projectsWrapper.insertBefore(nameError, newProjectName);
    } else {
      projectsUI.add(newProjectName.value);
      printProjects();
      projectsWrapper.removeChild(newProjectName);
      projectsWrapper.removeChild(acceptBTN);
      projectsWrapper.appendChild(newProjectBTN);
      if (nameError.parentNode === projectsWrapper) {
        projectsWrapper.removeChild(nameError);
      }
    }
  });
  projectsWrapper.appendChild(newProjectBTN);

  // DUMMY's
  const event = new Event("click");
  newProjectBTN.dispatchEvent(event);
  newProjectName.value = "Kup mleko";
  acceptBTN.dispatchEvent(event);
  newProjectBTN.dispatchEvent(event);
  newProjectName.value = "Idz do kina";
  acceptBTN.dispatchEvent(event);
  newProjectBTN.dispatchEvent(event);
  newProjectName.value = "Bieganie";
  acceptBTN.dispatchEvent(event);

  return {
    printProjects: () => {
      printProjects();
    },
    printButtons: () => {},
  };
};
export default projectDom;
