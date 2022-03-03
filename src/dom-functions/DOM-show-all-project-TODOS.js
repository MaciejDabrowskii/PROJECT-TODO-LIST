import projectMenager from "../functions/project-menager.js";
import domShowTodo from "./DOM-show-TODO.js";

const showAllProjectTods = () => {
    document.querySelector('.todosContainer').innerHTML = "";
    let projectName = document.querySelector(".target").firstChild.innerHTML;
    let projectsArray = projectMenager.getProjectsArray();
    let projectIndex;
    for(let i = 0; i < projectsArray.length; i++ ) {
        if (projectMenager.getProjectsArray()[i].getName() === projectName) projectIndex = i;
    }
    projectMenager.getProjectsArray()[projectIndex].getTodosArray().forEach((todo) => {
        domShowTodo(todo);
    });
}
export default showAllProjectTods