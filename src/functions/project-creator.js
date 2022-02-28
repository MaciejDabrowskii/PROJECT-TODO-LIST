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
    const removeTODO = (index) => {
        todosArray.splice(index, 1);
    }
    const flatTodosArray = () => {
        todosArray = todosArray.flat();
    }
    return {
        getName,
        getTodosArray,
        editProjectName,
        addToTodosArray,
        removeTODO,
        flatTodosArray,
    }
}
export default projectMaker;