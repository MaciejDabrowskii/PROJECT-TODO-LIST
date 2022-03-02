import projectMenager from "../functions/project-menager.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
const projectButtonsEvents = () => {
    const editProjectButton = (button, dropdown, confirm, input, project) => {
        button.addEventListener('click', () =>{
            dropdown.classList.toggle("show");
            confirm.addEventListener('click', () =>{
                project.editProjectName(input.value);
                showProjects();
            });
        });
        window.onclick = function(event) {
  if (!event.target.matches('.editProjectButton')) {
    const dropdown = document.querySelector(".dropdownContent");
    if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
    };
  }
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
