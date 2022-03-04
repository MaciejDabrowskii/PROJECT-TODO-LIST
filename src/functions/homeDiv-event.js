import projectMenager from "./project-menager.js";
import domShowTodo from "../dom-functions/DOM-show-TODO.js";
const showTodosFromHomeProject = (homeProjectDiv) => {
    homeProjectDiv.addEventListener('click', () => {
        document.querySelector('.todosContainer').innerHTML = "";
        projectMenager.getHomeTodosArray().forEach((todo) => {
            domShowTodo(todo);
        });
    });
};
export default showTodosFromHomeProject