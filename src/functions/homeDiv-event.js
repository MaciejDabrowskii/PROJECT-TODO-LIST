import refreshTodosContainer from "../dom-functions/DOM-refresh-TODOS-container.js";

const showTodosFromHomeProject = (homeProjectDiv) => {
    homeProjectDiv.addEventListener('click', () => {
        document.querySelectorAll('.projectDiv').forEach((project) => {
            project.classList.remove('target');
        });
        homeProjectDiv.classList.add('target');

        refreshTodosContainer();
        
    });
};
export default showTodosFromHomeProject