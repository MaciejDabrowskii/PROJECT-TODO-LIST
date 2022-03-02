import projectMenager from "../functions/project-menager.js";
import projectButtonsEvents from "../functions/project-buttons-events.js";
import addProjectDivEvent from "../functions/add-project-divs-event"
let showProjects = () => {
    document.querySelector('.projectsContainer').innerHTML= "";
    projectMenager.getProjectsArray().forEach((project, index) => {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        
        const projectName = document.createElement('div');
        projectName.classList.add('projectName');
        projectName.innerText = `${project.getName()}`;
 
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        
        const editProjectButton = document.createElement('button');
        editProjectButton.classList.add('editProjectButton');
        editProjectButton.textContent = 'E';

        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('dropdownContent');

        const editProjectNameInput = document.createElement('input');
        editProjectNameInput.type = "text";
        editProjectNameInput.id = "editProjectName";
        
        const editProjectNameLabel = document.createElement('Label');
        editProjectNameLabel.setAttribute("for","editProjectName");
        editProjectNameLabel.innerHTML = "New project name:";

        const confirmNewNameButton = document.createElement('button');
        confirmNewNameButton.classList.add('confirmNewNameButton');
        confirmNewNameButton.textContent = 'OK';

        projectButtonsEvents().editProjectButton(editProjectButton, dropdownContent, confirmNewNameButton, editProjectNameInput, project);

        dropdownContent.append(editProjectNameLabel, editProjectNameInput, confirmNewNameButton);
        dropdown.append(editProjectButton, dropdownContent);
        
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('deleteProjectButton');
        deleteProjectButton.textContent = 'X';
        projectButtonsEvents().deleteProjectButton(deleteProjectButton, index);

        const projectButtonsContainer = document.createElement('div');
        projectButtonsContainer.classList.add('projectButtonsContainer');

        projectButtonsContainer.append(dropdown, deleteProjectButton);


        projectDiv.append(projectName, projectButtonsContainer);
        document.querySelector('.projectsContainer').append(projectDiv);
        addProjectDivEvent()
    })
}; 

export default showProjects