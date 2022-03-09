import swaptodoOptionsContainerContents from '../dom-functions/DOM-addTodo-swap-Btn-to-Form.js';
import swapEditOrAddTodoFormToButton from "../dom-functions/DOM-window-listener-swap-todo-form.js"
const addTODOButtonEvent = () => {
    const addTODOButton = document.querySelector('.addTODOButton');
    addTODOButton.addEventListener('click', swaptodoOptionsContainerContents);
};
export default addTODOButtonEvent