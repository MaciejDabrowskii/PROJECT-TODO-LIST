const projectMaker = (name) => {
    let projectName = name;
    let todosArray = [];
    
    const getName = () => projectName;
    const getTodosArray = () => todosArray;
    const editProjectName = (string) => {
        projectName = string;
    }
    const addToTodosArray = (item) => {
        todosArray.push(item);
    };

    return {
        getName,
        getTodosArray,
        editProjectName,
        addToTodosArray
    }
}
export default projectMaker;