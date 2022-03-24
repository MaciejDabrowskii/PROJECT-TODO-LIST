import projectMenager from "./project-menager.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container";
import { format } from "date-fns/esm";
import updateLocalStorage from "./local-storage-menager.js";
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
            
            const name = document.getElementById('todoNameInputText');
            const date = document.getElementById('todoDatePickerInput');
            const time = document.getElementById('todoTimePickerInput'); 
            const confirmAndDropdown = document.querySelector('.confirmAndDropdown');
        
            const checkDate = () => {
                const today = format(new Date(), 'yyyy-MM-dd');
                const selectedDate = date.value;
                if (selectedDate < today) return true;   
            }
        
            if (name.value.length === 0) {
               if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
               else {
                    name.classList.add('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Name must be at least 1 character long";
                    confirmAndDropdown.append(todoDataError);
               }
            }
            else if (date.value.length === 0 || checkDate()) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be set in the future";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else if (time.value.length === 0) {
                if (!!document.querySelector('.todoDataError')){
                    document.querySelector('.todoDataError').remove();
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time must be set";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Time must be set";
                    confirmAndDropdown.append(todoDataError);
                }
            }
            else {

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
                    updateLocalStorage();
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
                    updateLocalStorage();
                }
            }
        })
    })();

};
export default editTodoButtonsEvents