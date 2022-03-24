const createAddTODOtBtn = () => {
    const todoOptionsContainer = document.querySelector('.todoOptionsContainer');
    todoOptionsContainer.innerHTML= "";
        const addTODOButton = document.createElement('button');
        addTODOButton.classList.add('addTODOButton');
        addTODOButton.innerText = "+ ADD new ToDo";
        todoOptionsContainer.append(addTODOButton);
};

export default createAddTODOtBtn