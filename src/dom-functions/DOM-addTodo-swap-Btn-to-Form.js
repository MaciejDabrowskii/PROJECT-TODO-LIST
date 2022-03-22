import newTodoButtonsEvents from '../functions/add-todo-form-events.js';

const swaptodoOptionsContainerContents = () => {
    const todoOptionsContainer = document.querySelector('.todoOptionsContainer');
    todoOptionsContainer.innerHTML= "";

    const todoNameInputText = document.createElement('input');
    todoNameInputText.type = "text";
    todoNameInputText.id = "todoNameInputText";

    const todoNameInputLabel = document.createElement('Label');
    todoNameInputLabel.setAttribute("for","todoNameInputText");
    todoNameInputLabel.innerHTML = "ToDo name:";

    const todoDatePickerLabel = document.createElement('Label');
    todoDatePickerLabel.setAttribute("for","todoDatePickerInput");
    todoDatePickerLabel.innerHTML = "Date:";

    const todoDatePickerInput = document.createElement('input');
    todoDatePickerInput.type = "date";
    todoDatePickerInput.id = "todoDatePickerInput";

    const todoTimePickerLabel = document.createElement('Label');
    todoTimePickerLabel.setAttribute("for","todoTimePickerInput");
    todoTimePickerLabel.innerHTML = "Time:";

    const todoTimePickerInput = document.createElement('input');
    todoTimePickerInput.type = "time";
    todoTimePickerInput.id = "todoTimePickerInput";

    const todoPrioritySelectLabel = document.createElement('Label');
    todoPrioritySelectLabel.setAttribute("for","todoPrioritySelect");
    todoPrioritySelectLabel.innerHTML = "Priority:";

    const todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.id = "todoPrioritySelect";

    let priorityArray = ['High', 'Medium', 'Low'];

    for (let i = 0; i < priorityArray.length; i++) {
        let priority = document.createElement("option");
        priority.value = priorityArray[i];
        priority.text = priorityArray[i];
        todoPrioritySelect.appendChild(priority);
    };
    
    const todoNotesInputLabel = document.createElement('Label');
    todoNotesInputLabel.setAttribute("for","todoNotesInputLabel");
    todoNotesInputLabel.innerHTML = "Notes:";

    const todoNotesInput = document.createElement('input');
    todoNotesInput.type = "textarea";
    todoNotesInput.id = "todoNotesInput";

    const confirmAndDropdown = document.createElement('div');
    confirmAndDropdown.classList.add('confirmAndDropdown');


    const todoCreateConfirmBtn = document.createElement('button');
    todoCreateConfirmBtn.classList.add("todoCreateConfirmBtn");
    todoCreateConfirmBtn.innerText= "V";

    const todoCreateCancelBtn = document.createElement('button');
    todoCreateCancelBtn.classList.add("todoCreateCancelBtn");
    todoCreateCancelBtn.innerText= "X";

    const todoCreateDivHeader = document.createElement('div');
    todoCreateDivHeader.classList.add('todoCreateDivHeader');
    todoCreateDivHeader.textContent = 'ADD NEW TODO';

    confirmAndDropdown.append(todoCreateConfirmBtn);

    todoOptionsContainer.append(
        todoCreateDivHeader,
        todoNameInputLabel, 
        todoNameInputText ,
        todoDatePickerLabel,
        todoDatePickerInput,
        todoTimePickerLabel,
        todoTimePickerInput,
        todoPrioritySelectLabel,
        todoPrioritySelect,
        todoNotesInputLabel,
        todoNotesInput,
        confirmAndDropdown,
        todoCreateCancelBtn
    );

    newTodoButtonsEvents();
};
export default swaptodoOptionsContainerContents