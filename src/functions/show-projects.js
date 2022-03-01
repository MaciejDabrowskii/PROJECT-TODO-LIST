import projectMenager from "./project-menager.js"
let showProjects = () => {
    document.querySelector('.projectsContainer').innerHTML= "";
    projectMenager.getProjectsArray().forEach((project) => {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        projectDiv.innerText = `${project.getName()}`;
        document.querySelector('.projectsContainer').append(projectDiv);
    })
}; 

export default showProjects