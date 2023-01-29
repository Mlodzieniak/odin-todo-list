import projectsUI from "./projectsUI";
import projectDom from "./projectDOM";
import printProjects from "./domMethods/printProjects";

const storage = () => {
  // while (true) {
  //   for (let i = 0; i < 99; i += 1) {
  //     const key = localStorage.key(i);
  //     if (key === null) break;
  //     if (key.length === 10) {
  //       const project = JSON.parse(localStorage.getItem(key));
  //       console.log(project);
  //       projectsUI.add(project.getProjectName);
  //       // console.log(project.getProjectName);
  //     }
  //   }
  //   projectDom();
  //   printProjects();
  // }
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(project);
      projectsUI.add(project.getProjectName);
      console.log(project.getProjectName);
    }
    printProjects();
  }
};
export default storage;
