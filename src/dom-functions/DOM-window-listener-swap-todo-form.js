import createAddTODOtBtn from "./DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "../functions/add-todo-button-event.js";

function swapEditOrAddTodoFormToButton(event) {
        
    if ((!event.target.matches('.addTODOButton') && !event.target.matches('.editTodoButton')) && ((!!document.querySelector('.todoCreateDivHeader')) || (!!document.querySelector('.todoEditDivHeader')))){
        if (
            (!event.target.matches('.todoOptionsContainer')) &&
            (!event.target.matches('.todoCreateDivHeader')) &&
            (!event.target.matches('label')) &&
            (!event.target.matches('#todoNameInputText')) &&
            (!event.target.matches('#todoDatePickerInput')) &&
            (!event.target.matches('#todoTimePickerInput')) &&
            (!event.target.matches('#todoPrioritySelect')) &&
            (!event.target.matches('option')) &&
            (!event.target.matches('#todoNotesInput')) &&
            (!event.target.matches('.todoCreateConfirmBtn')) &&
            (!event.target.matches('.todoCreateCancelBtn')) &&
            (!event.target.matches('.todoEditDivHeader')) &&
            (!event.target.matches('.todoEditConfirmBtn')) &&
            (!event.target.matches('.todoDataError')) &&
            (!event.target.matches('.addTODOButton'))

           ) { 
                createAddTODOtBtn();
                addTODOButtonEvent();
             }; 
    };
};

export default swapEditOrAddTodoFormToButton
