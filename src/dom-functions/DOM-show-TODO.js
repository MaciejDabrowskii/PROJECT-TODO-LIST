const domShowTodo = (todo) => {
    const todosContainer = document.querySelector('.todosContainer');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const todoNameDiv = document.createElement('div');
    todoNameDiv.classList.add('todoNameDiv');
    todoNameDiv.textContent = todo.getTodoName();

    const todoDateDiv = document.createElement('div');
    todoDateDiv.classList.add('todoDateDiv');
    todoDateDiv.textContent = todo.getTodoDate();

    const todoTimeDiv = document.createElement('div');
    todoTimeDiv.classList.add('todoTimeDiv');
    todoTimeDiv.textContent = todo.getTodoTime();

    const todoPriorityDiv = document.createElement('div');
    todoPriorityDiv.classList.add('todoTimeDiv');
    todoPriorityDiv.textContent = todo.getTodoPriority();

    const todoNotesDiv = document.createElement('div');
    todoNotesDiv.classList.add('todoTimeDiv');
    todoNotesDiv.textContent = todo.getTodoNotes();

    todoDiv.append(todoNameDiv, todoDateDiv, todoTimeDiv, todoPriorityDiv, todoNotesDiv);
    todosContainer.appendChild(todoDiv);
};
export default domShowTodo