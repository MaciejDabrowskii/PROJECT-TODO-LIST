function removeMoveTodoDropdown(event) {
        
    if (!!document.querySelector('.moveTodoProjects')){
        if (
            (!event.target.matches(`.moveTodoProjectsDropdownContainer`)) &&
            (!event.target.matches('.moveTodoDropdownHomeProject')) &&
            (!event.target.matches('.moveTodoDropdownProjectDiv')) &&
            (!event.target.matches('.moveTodoButton'))
           ) {  
               const moveTodoProjects = document.querySelector('.moveTodoProjects');
               moveTodoProjects.remove();
             };
    };
};
export default removeMoveTodoDropdown