import projectMenager from "../functions/project-menager.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
const projectButtonsEvents = () => {
    const editProjectButton = (button, dropdown, confirm, input, project) => {
        button.addEventListener('click', () =>{
            dropdown.classList.toggle("show");
            // window.onclick = function(event) {
            //         !event.target.matches(dropdown) || 
            //         !event.target.matches(button) || 
            //         !event.target.matches(confirm) || 
            //         !event.target.matches(button) 
            //         ? dropdown.classList.toggle("show");
            // }
            confirm.addEventListener('click', () =>{
                project.editProjectName(input.value);
                showProjects();
            });
        })
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
