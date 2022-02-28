const createBody = () => {
    const body = document.querySelector('.body')

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsDiv');

    const homeProjectDiv = document.createElement('div');
    homeProjectDiv.classList.add('homeProjectDiv');
    homeProjectDiv.innerText = "HOME";

    const allTodosButton = document.createElement('div');
    allTodosButton.classList.add('allTodosButton');
    allTodosButton.innerText = "All Todos";

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');

    const addProjectButton = document.createElement('div');
    addProjectButton.classList.add('addProjectDiv');
    addProjectButton.innerText = "+ ADD"

    projectsDiv.append(homeProjectDiv, allTodosButton, projectsContainer, addProjectButton)

    const todosDiv = document.createElement('div');
    todosDiv.classList.add('todosDiv');

    const todoDivHeader = document.createElement('div');
    todoDivHeader.classList.add('todoDivHeader');
    todoDivHeader.innerText = "Todos:"

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todosContainer');

    const todoOptionsContainer = document.createElement('div');
    todoOptionsContainer.classList.add('todoOptionsContainer');

    todosDiv.append(todoDivHeader, todosContainer, todoOptionsContainer);

    body.append(projectsDiv, todosDiv);

};

export default createBody