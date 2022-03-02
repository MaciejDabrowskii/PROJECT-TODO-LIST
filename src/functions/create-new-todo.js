import todoTask from "./TODO-creator.js";
import projectMenager from "./project-menager.js";
const newTodo = (project) => {
    const name = document.getElementById('todoNameInputText').value;
    const date = document.getElementById('todoDatePickerInput').value;
    const time = document.getElementById('todoTimePickerInput').value;
    const priority = document.getElementById('todoPrioritySelect').value;
    const notes = document.getElementById('todoNotesInput').value;
    todoTask(name, date, time, priority)
}