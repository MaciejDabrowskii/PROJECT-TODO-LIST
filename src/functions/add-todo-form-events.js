import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import newTodo from "./create-new-todo.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container";
import { format } from "date-fns/esm";
const newTodoButtonsEvents = () => {
    const declineBtnFunction = (() => {
        const todoCreateCancelBtn = document.querySelector('.todoCreateCancelBtn');
        todoCreateCancelBtn.addEventListener('click', () => {
            createAddTODOtBtn();
            addTODOButtonEvent();
        })
    })();

    const confirmBtn = (() => {
        const todoCreateConfirmBtn = document.querySelector('.todoCreateConfirmBtn');
        todoCreateConfirmBtn.addEventListener('click', () => {
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
                    todoDataError.innerText = "Date requred and must be in the future";
                    confirmAndDropdown.append(todoDataError);
                }
                else {
                    name.classList.remove('invalid');
                    const todoDataError = document.createElement('div');
                    todoDataError.classList.add('todoDataError');
                    todoDataError.innerText = "Date requred and must be in the future";
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
                const createTodo = newTodo();
                const projectName = document.querySelector('.target').firstChild.innerText;
                if (projectName === "HOME") {
                    projectMenager.pushToHomeTodosArray(createTodo);
                } else {
                    let projectsArray = projectMenager.getProjectsArray();
                    let projectIndex; 
                    for(let i = 0; i < projectsArray.length; i++ ) {
                        if (projectMenager.getProjectsArray()[i].getName() === projectName) projectIndex = i;
                    }
                    const project = projectMenager.getProjectsArray()[projectIndex];
                    project.addToTodosArray(createTodo); 
                };
                
                createAddTODOtBtn();
                addTODOButtonEvent();
                refreshTodosContainer();
            };
        })
    })();

};
export default newTodoButtonsEvents