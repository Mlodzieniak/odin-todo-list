import "./main.css";

import projectsUI from "./app/projectsUI";
import dom from "./app/DOM";

// const domEle = document.createElement("div");
// domEle.textContent = "Hello, world!";
// domEle.classList.add("element");
// document.querySelector("body").appendChild(domEle);
projectsUI.add();
projectsUI.add();
projectsUI.add();
dom().printProjects(projectsUI.getProjects);
dom();
