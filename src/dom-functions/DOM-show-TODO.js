import todoDivsEvents from "../functions/todoDivsEvents";

const domShowTodo = (todo, index) => {
    let todoIndex = index;
    const todosContainer = document.querySelector('.todosContainer');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv',`${todo.getTodoPriority()}` );


    const todoNameDiv = document.createElement('div');
    todoNameDiv.classList.add('todoNameDiv');
    todoNameDiv.textContent = todo.getTodoName();

    const todoDateDiv = document.createElement('div');
    todoDateDiv.classList.add('todoDateDiv');
    todoDateDiv.textContent = todo.getTodoDate();

    const todoTimeDiv = document.createElement('div');
    todoTimeDiv.classList.add('todoTimeDiv');
    todoTimeDiv.textContent = todo.gettodoTime();

    const todoPriorityDiv = document.createElement('div');
    todoPriorityDiv.classList.add('todoTimeDiv');
    todoPriorityDiv.textContent = todo.getTodoPriority();

    const todoNotesDiv = document.createElement('div');
    todoNotesDiv.classList.add('todoTimeDiv');
    todoNotesDiv.textContent = todo.getTodoNotes();

    const moveTodoButton = document.createElement('button');
    moveTodoButton.classList.add('moveTodoButton');
    moveTodoButton.textContent = "Move";

    const editTodoButton = document.createElement('button');
    editTodoButton.classList.add('editTodoButton');
    editTodoButton.textContent = "E";

    const moveTodoDropdown = document.createElement('div');
    moveTodoDropdown.classList.add('moveTodoDropdown');

    moveTodoDropdown.append(moveTodoButton);

    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.classList.add('deleteTodoButton');
    deleteTodoButton.textContent = "X";

    


    todoDiv.append(todoNameDiv, todoDateDiv, todoTimeDiv, todoPriorityDiv, todoNotesDiv, moveTodoDropdown, editTodoButton, deleteTodoButton);
    todosContainer.appendChild(todoDiv);
    todoDivsEvents().todoTargetEvent(todoDiv);
    todoDivsEvents().todoDeleteButtonEvent(deleteTodoButton, todoIndex);
    todoDivsEvents().todoEditButtonEvent(editTodoButton, todoIndex, todo.getTodoName(), todo.getTodoDate(), todo.gettodoTime(), todo.getTodoNotes());
    todoDivsEvents().todoMoveButtonEvent(moveTodoButton, todoIndex, todoDiv);
};
export default domShowTodo