import swapContents from '../dom-functions/DOM-addProject-swap-Btn-to-Form.js';
const addProjectButtonEvent = () => {
    const addProjectButton = document.querySelector('.addProjectButton');
    addProjectButton.addEventListener('click', swapContents);
};
export default addProjectButtonEvent