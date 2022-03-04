import projectMenager from "../functions/project-menager.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
const projectButtonsEvents = () => {
    const editProjectButton = (editButton, dropdown, confirm, input, project, deleteButton) => {
        
            editButton.addEventListener('click', () =>{
                dropdown.classList.toggle("show");
                confirm.addEventListener('click', () =>{
                    project.editProjectName(input.value);
                    showProjects();
                });
            });
            window.onclick = function(event) {
                if (!event.target.matches('.deleteProjectButton')) {    
                    if (
                        (!event.target.matches('.editProjectButton')) &&
                        (!event.target.matches('.dropdownContent')) &&
                        (!event.target.matches('#editProjectName')) &&
                        (!event.target.matches('label')) &&
                        (!event.target.matches('.confirmNewNameButton'))
                       ) {
                        input.innerHTML = "";
                        const dropdown = document.querySelector(".dropdownContent");
                        if (dropdown.classList.contains('show')) {
                            dropdown.classList.remove('show');
                        };
                    };
                };    
            }
        
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
