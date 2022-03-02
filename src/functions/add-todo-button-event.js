import swaptodoOptionsContainerContents from '../dom-functions/DOM-addTodo-swap-Btn-to-Form.js';
const addTODOButtonEvent = () => {
    const addTODOButton = document.querySelector('.addTODOButton');
    addTODOButton.addEventListener('click', swaptodoOptionsContainerContents);
};
export default addTODOButtonEvent