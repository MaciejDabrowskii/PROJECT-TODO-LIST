import projectMenager from "../functions/project-menager.js";
import projectButtonsEvents from "../functions/project-buttons-events.js";
let showProjects = () => {
    document.querySelector('.projectsContainer').innerHTML= "";
    projectMenager.getProjectsArray().forEach((project, index) => {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        projectDiv.innerText = `${project.getName()}`;
        
        const editProjectButton = document.createElement('button');
        editProjectButton.classList.add('editProjectButton');
        editProjectButton.textContent = 'E'
        
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('deleteProjectButton');
        deleteProjectButton.textContent = 'X';

        projectDiv.append(editProjectButton, deleteProjectButton);
        document.querySelector('.projectsContainer').append(projectDiv);
        projectButtonsEvents().deleteProjectButton(index);
    })
}; 

export default showProjects