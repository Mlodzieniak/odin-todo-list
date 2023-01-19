import projectsUI from "./projectsUI";

const list = document.querySelector(".projects-list");
const newProjectBTN = document.querySelector(".new-project-btn");

const dom = () => ({
  newProject() {
    const label = document.createElement("div");
    label.classList.add("project-label");
    // projectsUI.add();
    list.appendChild(label);
  },
});
newProjectBTN.addEventListener("click", () => dom().newProject());

export default dom;
