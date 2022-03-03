const createBody = () => {
    const body = document.querySelector('.body')

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsDiv');

    const homeProjectDiv = document.createElement('div');
    homeProjectDiv.classList.add('homeProjectDiv', 'target');
   
    const homeProjectDivTitle = document.createElement('div');
    homeProjectDivTitle.classList.add('homeProjectDivTitle')
    homeProjectDivTitle.innerText = "HOME";
    homeProjectDiv.appendChild(homeProjectDivTitle);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');

    const addProjectContainer = document.createElement('div');
    addProjectContainer.classList.add('addProjectContainer');

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('addProjectButton');
    addProjectButton.innerText = "+ ADD";

    const projectsDivHeader = document.createElement('h2');
    projectsDivHeader.classList.add('projectsDivHeader');
    projectsDivHeader.innerText = "PROJECTS:";

    addProjectContainer.append(addProjectButton);

    projectsDiv.append(projectsDivHeader, homeProjectDiv, projectsContainer, addProjectContainer);

    const todosDiv = document.createElement('div');
    todosDiv.classList.add('todosDiv');

    const todoDivHeader = document.createElement('div');
    todoDivHeader.classList.add('todoDivHeader');
    todoDivHeader.innerText = "Todos:";

    const allTodosButton = document.createElement('div');
    allTodosButton.classList.add('allTodosButton');
    allTodosButton.innerText = "All Todos";



    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todosContainer');

    const todoOptionsContainer = document.createElement('div');
    todoOptionsContainer.classList.add('todoOptionsContainer');

    todoDivHeader.append(allTodosButton);

    todosDiv.append(todoDivHeader, todosContainer, todoOptionsContainer);

    body.append(projectsDiv, todosDiv);

};

export default createBody