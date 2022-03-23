import projectMenager from "./project-menager.js";

const updateLocalStorage = () => {
    
    let homeTodos = [];
    projectMenager.getHomeTodosArray().forEach((todo) => {
        let task = new Object();
        task.name = todo.getTodoName();
        task.date = todo.getTodoDate();
        task.time = todo.gettodoTime();
        task.priority = todo.getTodoPriority();
        task.notes = todo.getTodoNotes();
        homeTodos.push(task);
    });
    localStorage.setItem("homeTodos", JSON.stringify(homeTodos));

    let projectsArray = []
    projectMenager.getProjectsArray().forEach((project) => {
        let projectName = project.getName();
        projectsArray.push(projectName);
    });
    localStorage.setItem("projectNames", JSON.stringify(projectsArray));

    
    projectMenager.getProjectsArray().forEach((project) => {
        let projectName = project.getName();
        let todosArray = [];
       
        project.getTodosArray().forEach((todo) => {
            let task = new Object();
            task.name = todo.getTodoName();
            task.date = todo.getTodoDate();
            task.time = todo.gettodoTime();
            task.priority = todo.getTodoPriority();
            task.notes = todo.getTodoNotes();
            todosArray.push(task);          
        });        
        localStorage.setItem(`${projectName}`, JSON.stringify(todosArray));
    })
}
export default updateLocalStorage