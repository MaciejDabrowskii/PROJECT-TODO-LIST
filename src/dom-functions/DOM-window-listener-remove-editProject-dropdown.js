import showProjects from "./DOM-show-projects.js";

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

export default removeDropdown