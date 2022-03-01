import projectMenager from "../functions/project-menager.js";
import showProjects from "../dom-functions/DOM-show-projects.js";
const projectButtonsEvents = () => {
    // const editProjectButton = () => {
    //     const editProjectName = document.querySelector('.editProjectName');
    //     editProjectName.addEventListener('click', () =>{
    //         projectMenager.removeProject(index)
    //     })
    // };
    const deleteProjectButton = (index) => {
        const deleteProjectButton = document.querySelector('.deleteProjectButton');
        deleteProjectButton.addEventListener('click', () =>{
            projectMenager.removeProject(index);
            showProjects();
        });
    };
    return {
        deleteProjectButton
    }
};

export default projectButtonsEvents