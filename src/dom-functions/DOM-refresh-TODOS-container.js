import projectMenager from "../functions/project-menager.js";
import domShowTodo from "./DOM-show-TODO.js";
const refreshTodosContainer = () => {
    document.querySelector('.todosContainer').innerHTML = "";
    let targetProjectName = document.querySelector('.target').firstChild.innerText;
    let targetProjectIndex = 0;
    if(targetProjectName === "HOME") {
        projectMenager.getHomeTodosArray().forEach((todo) => {
            domShowTodo(todo);
        })
    }else {
        
        projectMenager.getProjectsArray().forEach((project, index) => {
            if (project.getName() === targetProjectName) {
                targetProjectIndex = index;
            };
        });
        projectMenager.getProjectsArray()[targetProjectIndex].getTodosArray().forEach((todo, index) => {
            domShowTodo(todo, index);
        });
    };
}
export default refreshTodosContainer