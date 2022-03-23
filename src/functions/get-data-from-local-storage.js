import projectMenager from "./project-menager.js";
import todoTask from "./TODO-creator.js";
import projectCreator from "./project-creator.js";

const getDataFromLocalStorage = () => {
    
    if(localStorage.getItem("homeTodos") !== null){
        let homeTodosArray = JSON.parse(localStorage.getItem("homeTodos"));
        homeTodosArray.forEach((task) => {
            let todo = todoTask(task.name, task.date, task.time, task.priority, task.notes);
            projectMenager.pushToHomeTodosArray(todo);
        });
    };
    
    if(localStorage.getItem("projectNames") !== null) {
        let projectNamesArray = JSON.parse(localStorage.getItem("projectNames"));
        projectNamesArray.forEach((project) => {
            projectMenager.pushToProjectsArray(projectCreator(project));
        });
    };

    projectMenager.getProjectsArray().forEach((project) => {
        
        let projectName = project.getName();

        if(JSON.parse(localStorage.getItem(`${projectName}`)) !== null) {
            let todosArray = JSON.parse(localStorage.getItem(`${projectName}`));
            todosArray.forEach((task) => {
                let todo = todoTask(task.name, task.date, task.time, task.priority, task.notes);
                project.addToTodosArray(todo);
            });
        };
    });
};
export default getDataFromLocalStorage