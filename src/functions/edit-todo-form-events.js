import projectMenager from "./project-menager.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container";
const editTodoButtonsEvents = (targetProjectIndex, todoIndex,) => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            createAddTODOtBtn();
            addTODOButtonEvent();
        })
    })();

    const confirmBtn = (() => {
        const todoEditConfirmBtn = document.querySelector('.todoEditConfirmBtn');
        todoEditConfirmBtn.addEventListener('click', () => {

            let targetProjectName = document.querySelector('.target').firstChild.innerText;
            
            if (targetProjectName === "HOME") {
                const homeTodo = projectMenager.getHomeTodosArray()[todoIndex];
                homeTodo.setTodoName(document.getElementById('todoNameInputText').value);
                homeTodo.setTodoDate(document.getElementById('todoDatePickerInput').value);
                homeTodo.setTodoTime(document.getElementById('todoTimePickerInput').value);
                homeTodo.setTodoPriority(document.getElementById('todoPrioritySelect').value);
                homeTodo.setTodoNotes(document.getElementById('todoNotesInput').value);

                createAddTODOtBtn();
                addTODOButtonEvent();
                refreshTodosContainer();
            }
            else{           
                const todo = projectMenager.getProjectsArray()[targetProjectIndex].getTodosArray()[todoIndex];
                todo.setTodoName(document.getElementById('todoNameInputText').value);
                todo.setTodoDate(document.getElementById('todoDatePickerInput').value);
                todo.setTodoTime(document.getElementById('todoTimePickerInput').value);
                todo.setTodoPriority(document.getElementById('todoPrioritySelect').value);
                todo.setTodoNotes(document.getElementById('todoNotesInput').value);

                createAddTODOtBtn();
                addTODOButtonEvent();
                refreshTodosContainer();
            }
        })
    })();

};
export default editTodoButtonsEvents