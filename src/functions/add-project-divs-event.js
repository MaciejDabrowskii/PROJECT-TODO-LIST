import projectMenager from "./project-menager.js";
import projectCreator from "./project-creator.js";
import todoTask from "./TODO-creator.js";
import createAddTODOtBtn from "../dom-functions/DOM-addTodo-create-addBtn.js";
import addTODOButtonEvent from "./add-todo-button-event.js";
import domShowTodo from "../dom-functions/DOM-show-TODO.js";
import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container"
import showProjects from "../dom-functions/DOM-show-projects.js"
import createEditProjectDropdownContents from "../dom-functions/DOM-create-edit-project-dropdown-contents.js"



const addProjectDivEvent = () => {

    const deleteProjectButton = (deleteButton, index) => {
        deleteButton.addEventListener('click', (e) =>{

            projectMenager.removeProject(index);
            showProjects();
            e.stopPropagation();
        });
    };

    function removeDropdown(event) {
        
        if (!!document.querySelector('.dropdownContent')){
            if (
                (!event.target.matches(`.editProjectButton`)) &&
                (!event.target.matches('.dropdownContent')) &&
                (!event.target.matches('#editProjectName')) &&
                (!event.target.matches('label')) &&
                (!event.target.matches('.confirmNewNameButton'))
               ) {  
                   const dropdownContent = document.querySelector('.dropdownContent');
                   dropdownContent.remove();
                   showProjects();
                 };
        };
    };

    const editProjectButton = (editButton, index, dropdown) => {
        
        editButton.addEventListener('click', (e) =>{
            
            window.addEventListener('click', (e) =>{
                removeDropdown(e)
            });
            if (!!document.querySelector('.dropdownContent')) {
                const dropdownContent = document.querySelector('.dropdownContent');
                dropdownContent.remove();
                dropdown.append(...createEditProjectDropdownContents());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    projectMenager.getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    showProjects();
                    e.stopPropagation();
                });
            } else {
                dropdown.append(...createEditProjectDropdownContents());
                const editProjectNameInput = document.getElementById('editProjectName');
                const confirmNewNameButton = document.querySelector('.confirmNewNameButton');
                confirmNewNameButton.addEventListener('click', (e) =>{
                    projectMenager.getProjectsArray()[index].editProjectName(editProjectNameInput.value);
                    showProjects();
                    e.stopPropagation();
                });
            }
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
        })

    }


    return {
        editProjectButton,
        deleteProjectButton,
        projectDivEvent,
    }


};
export default addProjectDivEvent
    // const projectContainer = document.querySelector('.projectsContainer');
    // projectContainer.addEventListener('click', function (e) {

    //     if (e.target.className == 'deleteProjectButton') {
    //         let projectName = e.target.getAttribute('data-key');
    //         let projectIndex = projectMenager.getProjectsArray().forEach((project, index) => {
    //              if(project.getName() === projectName) {
    //                 return index;
    //             };
    //         });
    //         projectMenager.removeProject(projectIndex);
    //         showProjects();
    //     };

    // });

// let projectsArray = [...document.querySelectorAll('.projectDiv')];  
// projectsArray.forEach((project, index) => {
//     project.addEventListener('click', (event) =>{

//             projectsArray.forEach((item) => {
//                 item.classList.remove('target'); 
//             });
            
//             homeProject.classList.remove('target');
//             project.classList.add('target');



       
//  };
//     });
//             const editProjectButton = document.querySelector(`.editProjectButton${targetProjectName}`);
//             const deleteProjectButton = document.querySelector(`.deleteProjectButton${targetProjectName}`);
//             projectButtonsEvents().deleteProjectButton(deleteProjectButton, targetProjectIndex);
//             projectButtonsEvents().editProjectButton(editProjectButton);
//             refreshTodosContainer();

// let targetProjectName = document.querySelector('.target').firstChild.innerText;
// let targetProjectIndex = 0;

// projectMenager.getProjectsArray().forEach((project, index) => {
//     project.addEventListener('click', (event) =>{
//         // if (!event.target.matches('.deleteProjectButton') && !event.target.matches('.confirmNewNameButton')) {
            

//             projectsArray.forEach((item) => {
//                 item.classList.remove('target'); 
//             });
            
//             homeProject.classList.remove('target');
//             project.classList.add('target');


//             const editProjectButton = document.querySelector(`.editProjectButton${targetProjectName}`);
//             const deleteProjectButton = document.querySelector(`.deleteProjectButton${targetProjectName}`);
//             projectButtonsEvents().deleteProjectButton(deleteProjectButton, targetProjectIndex);
//             projectButtonsEvents().editProjectButton(editProjectButton);
//             refreshTodosContainer();
//         // };
//     });
// });


// const homeProject = document.querySelector('.homeProjectDiv');
// homeProject.classList.add('target');

