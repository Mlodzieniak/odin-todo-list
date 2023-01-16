import "./main.css";
import todoFactory from "./app/utils/todoFactory";

const domEle = document.createElement("div");
domEle.textContent = "Hello, world!";
domEle.classList.add("element");
document.querySelector("body").appendChild(domEle);
const project1 = todoFactory("Project");
// project1.creationDate = "date XD"
// console.log(project1.creationDate)
console.log(project1.getCreationDate());