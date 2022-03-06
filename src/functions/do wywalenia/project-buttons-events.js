import projectMenager from "../functions/project-menager.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
import createEditProjectDropdownContents from "../dom-functions/DOM-create-edit-project-dropdown-contents.js"


const projectButtonsEvents = () => {
    
    const editProjectButton = (editButton, index, targetProjectName) => {
        
        editButton.addEventListener('click', () =>{
            
            // let targetProjectName = document.querySelector('.target').firstChild.innerText;
            // let targetProjectIndex = 0;
            
            // projectMenager.getProjectsArray().forEach((project, index) => {
            //     if (project.getName() === targetProjectName) {
            //         targetProjectIndex = index;
            //     };
            // });   
            const dropdown = document.getElementsByClassName(`dropdown${targetProjectName}`)[0];
            dropdown.append(...createEditProjectDropdownContents());

            const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
            const editProjectNameInput = document.querySelector('#editProjectName');
            const dropdownContent = document.querySelector('.dropdownContent');
            
            function removeDropdown(event) {
                if (
                    (!event.target.matches(`.editProjectButton${targetProjectName}`)) &&
                    (!event.target.matches('.dropdownContent')) &&
                    (!event.target.matches('#editProjectName')) &&
                    (!event.target.matches('label')) &&
                    (!event.target.matches('.confirmNewNameButton'))
                   ) {
                    dropdownContent.remove();
                    showProjects();
                    };
                };

            window.addEventListener('click', removeDropdown);

            confirmNewNameButton.addEventListener('click', () =>{
                projectMenager.getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                dropdownContent.remove();
                window.removeEventListener('click', removeDropdown);
                showProjects();
            });
        });
        
    };


    const deleteProjectButton = (button, index) => {
        button.addEventListener('click', () =>{
            projectMenager.removeProject(index);
            showProjects();
        });
    };
    return {
        editProjectButton,
        deleteProjectButton
    }
};

export default projectButtonsEvents
