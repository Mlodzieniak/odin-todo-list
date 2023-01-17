import "./main.css";
import todoFactory from "./app/todoFactory";
import projectFactory from "./app/projectFactory";

const domEle = document.createElement("div");
domEle.textContent = "Hello, world!";
domEle.classList.add("element");
document.querySelector("body").appendChild(domEle);
const project1 = projectFactory();
project1.add();
project1.add();
project1.add();
console.log(project1.getList()[0].getTitle());
console.log(project1.getList()[0].setTitle("kup mleko"));
console.log(project1.getList()[0].getTitle());
const todo1 = project1.getList()[0];
console.log(todo1.getDeadlineDate());
todo1.setDeadlineDate(new Date(2023, 0, 18));
console.log(todo1.getDeadlineDate());
