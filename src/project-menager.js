const projectMenager = (() => {
    let projectsArray = [];
    
    const getProjectsArray = () => projectsArray;
    const pushToProjectsArray = (project) => {
        projectsArray.push(project);
    }
    const getAllTodosFromProjects = () => {
        let allTodos =[];
        for (let i = 0; i < projectsArray.length; i++) {
           allTodos.push(projectsArray[i].getTodosArray)
        }
        return allTodos.flat()
     }
    return {
        getProjectsArray,
        pushToProjectsArray,
        getAllTodosFromProjects,
    }
})();