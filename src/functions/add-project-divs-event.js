import projectMenager from "./project-menager.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container";
import showProjects from "../dom-functions/DOM-show-projects.js";
import createEditProjectDropdownContents from "../dom-functions/DOM-create-edit-project-dropdown-contents.js";
import updateLocalStorage from "./local-storage-menager.js";

const addProjectDivEvent = () => {

    const deleteProjectButton = (deleteButton, index) => {
        deleteButton.addEventListener('click', (e) =>{

            projectMenager.removeProject(index);
            showProjects();
            e.stopPropagation();
            updateLocalStorage();
        });
    };

    const editProjectButton = (editButton, index, dropdown) => {
        
        editButton.addEventListener('click', (e) =>{
                        
            if (!!document.querySelector('.dropdownContent')) {
                const dropdownContent = document.querySelector('.dropdownContent');
                dropdownContent.remove();
                dropdown.append(...createEditProjectDropdownContents());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    const projectNamesArray = [];
                    projectMenager.getProjectsArray().forEach((project) => {
                        projectNamesArray.push(project.getName());
                    });
                    if (projectNamesArray.includes(editProjectNameInput.value)){
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "This name exist!";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                    }
                    else {
                    projectMenager.getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    showProjects();
                    e.stopPropagation();
                    updateLocalStorage();
                    };
                });
            } else {
                dropdown.append(...createEditProjectDropdownContents());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    const projectNamesArray = [];
                    projectMenager.getProjectsArray().forEach((project) => {
                        projectNamesArray.push(project.getName());
                    });
                    if (projectNamesArray.includes(editProjectNameInput.value)){
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "This name exist!";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                        else if (document.querySelector('.editProjectErrorDiv').innerText === "New name min. 1 char") {
                            document.querySelector('.editProjectErrorDiv').innerText = "This name exist!";
                        }
                    }
                    else if(editProjectNameInput.value.length === 0) {
                        if (!document.querySelector('.editProjectErrorDiv')) {
                            const dropdownContent = document.querySelector('.dropdownContent');
                            const editProjectErrorDiv = document.createElement('div');
                            editProjectErrorDiv.classList.add('editProjectErrorDiv');
                            editProjectErrorDiv.innerText = "New name min. 1 char";
                            dropdownContent.append(editProjectErrorDiv);
                        }
                        else if (document.querySelector('.editProjectErrorDiv').innerText === "This name exist!") {
                            document.querySelector('.editProjectErrorDiv').innerText = "New name min. 1 char";
                        }
                    }
                    else {
                    projectMenager.getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    showProjects();
                    e.stopPropagation();
                    updateLocalStorage();
                    };
                });
            };
            e.stopPropagation()
        });
    };
    
    const projectDivEvent = (projectDiv,) => {
        const homeProject = document.querySelector('.homeProjectDiv');
        
        projectDiv.addEventListener('click', (e) => {
            const projectsArray = [...document.querySelectorAll('.projectDiv')];
            projectsArray.forEach((item) => {
                item.classList.remove('target'); 
            });
            homeProject.classList.remove('target');
            projectDiv.classList.add('target');
            
            refreshTodosContainer();
            e.stopPropagation();
        });

    };

    return {
        editProjectButton,
        deleteProjectButton,
        projectDivEvent,
    }
};
export default addProjectDivEvent

