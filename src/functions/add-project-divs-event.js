import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import domShowTodo from "../dom-functions/DOM-show-TODO.js";

const addProjectDivEvent = () => {
    const homeProject = document.querySelector('.homeProjectDiv');
    homeProjectDiv.addEventListener('click', () => {
        homeProject.classList.add('target');
        projectMenager.getHomeTodosArray().forEach((todo) => {
            domShowTodo(todo);
        })
    });       
    let projects = [...document.querySelector('.projectsContainer')];
    projects.forEach((project) => {
       project.classList.remove('target')
      });
    projects.forEach((project) => {
        project.addEventListener('click', () =>{
            homeProject.classList.remove('target');
            project.classList.add('target');
            let projectName = project.firstChild.innerHTML;
            let projectIndex = projectMenager.getProjectsArray().find((project, index) => {
                if (project.getName() === projectName) return index;
            })
            projectMenager.getProjectsArray()[projectIndex].getTodosArray().forEach((todo) => {
                domShowTodo(todo);
            })

        })
    })

}
export default addProjectDivEvent
