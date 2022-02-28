const todoTask = (name, date, time, priority, notes) => {
    let todoName = name;
    let todoDate = date;
    let todoTime = time;
    let todoPriority = priority;
    let todoNotes = notes;
    let todoStatus = false;
    
    // Get functions returning variable contents
    const getTodoName = () => todoName;
    const getTodoDate = () => todoDate;
    const gettodoTime = () => todoTime;
    const getTodoPriority = () => todoPriority;
    const getTodoNotes = () => todoNotes;
    const getTodoStatus = () => todoStatus;
    
    // Set functions to edit variable contents
    const setTodoName = (string) => {
        todoName = string
    };
    const setTodoDate = (string) => {
        todoDate = string
    };
    const setTodoTime = (string) => {
        todoTime = string;
    };
    const setTodoPriority = (string) => {
        todoPriority = string;
    };
    const setTodoNotes = (string) => {
        todoNotes = string;
    };
    const setTodoStatus = () => {
        return todoStatus ? todoStatus = false : todoStatus = true;
    }  

    return {
        getTodoName,
        getTodoDate,
        gettodoTime,
        getTodoPriority,
        getTodoNotes,
        getTodoStatus,
        setTodoName,
        setTodoDate,
        setTodoTime,
        setTodoPriority,
        setTodoNotes,
        setTodoStatus,
    }
};
export default todoTask;