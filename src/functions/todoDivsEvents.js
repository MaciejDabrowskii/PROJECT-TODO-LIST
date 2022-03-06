import projectMenager from "./project-menager.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container"; 

const todoDivsEvents = () => {


    const todoDeleteButtonEvent = (todo, todoIndex) => {
        let targetProjectName = document.querySelector('.target').firstChild.innerText;
        let targetProjectIndex = 0;
        if (targetProjectName === "HOME") {
            todo.addEventListener('click', (e) =>{
                projectMenager.removeHomeTODO(todoIndex);
                refreshTodosContainer();
                e.stopPropagation();    
            });    
        
        } else {
            projectMenager.getProjectsArray().forEach((project, index) => {
                if (project.getName() === targetProjectName) {
                    targetProjectIndex = index;
                };
            });
            todo.addEventListener('click', (e) =>{
                projectMenager.getProjectsArray()[targetProjectIndex].removeTODO(todoIndex);
                refreshTodosContainer();
                e.stopPropagation();
            });
        };
    };

    return {
        todoDeleteButtonEvent
    }
};

export default todoDivsEvents



;