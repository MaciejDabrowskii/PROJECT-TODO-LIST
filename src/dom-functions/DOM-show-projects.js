import projectMenager from "../functions/project-menager.js";
import addProjectDivEvent from "../functions/add-project-divs-event";
import refreshTodosContainer from "./DOM-refresh-TODOS-container";
let showProjects = () => {   
    document.querySelector('.projectsContainer').innerHTML= "";
    document.querySelector('.homeProjectDiv').classList.add('target');
    refreshTodosContainer();
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
            
            dropdown.append(editProjectButton);

            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('deleteProjectButton');
            deleteProjectButton.textContent = 'X';
            deleteProjectButton.setAttribute('data-key', `${project.getName()}`)

            const projectButtonsContainer = document.createElement('div');
            projectButtonsContainer.classList.add('projectButtonsContainer');

            projectButtonsContainer.append(dropdown, deleteProjectButton);


            projectDiv.append(projectName, projectButtonsContainer);

            document.querySelector('.projectsContainer').append(projectDiv);
            addProjectDivEvent().deleteProjectButton(deleteProjectButton, index);
            addProjectDivEvent().editProjectButton(editProjectButton, index, dropdown);
            addProjectDivEvent().projectDivEvent(projectDiv);
        });

}; 

export default showProjects