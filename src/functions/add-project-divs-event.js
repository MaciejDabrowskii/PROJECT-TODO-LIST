import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import domShowTodo from "../dom-functions/DOM-show-TODO.js";

const addProjectDivEvent = () => {

    const homeProject = document.querySelector('.homeProjectDiv');
    let projects = [...document.querySelectorAll('.projectDiv')];
    homeProject.addEventListener('click', () => {
        homeProject.classList.add('target');

        projectMenager.getHomeTodosArray().forEach((todo) => {
            domShowTodo(todo);
        })
    });       
    
    
    projects.forEach((project) => {
        
        project.classList.remove('target')
        project.addEventListener('click', () =>{
            homeProject.classList.remove('target');
            project.classList.add('target');
            let projectName = project.firstChild.innerHTML;
            let projectsArray = projectMenager.getProjectsArray();
            let projectIndex;
            for(let i = 0; i < projectsArray.length; i++ ) {
                if (projectMenager.getProjectsArray()[i].getName() === projectName) projectIndex = i;
            }
            
            projectMenager.getProjectsArray()[projectIndex].getTodosArray().forEach((todo) => {
                domShowTodo(todo);

            })

        })
    })

}
export default addProjectDivEvent

