import { format } from "date-fns/esm";

const checkTodoOutdate = (date, todoDiv, time ) => {

    const checkDate = () => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const selectedDate = date.textContent;
        if (selectedDate < today) return true;   
    };

    const checkTime = () => {
        const todayDate = new Date();
        const timeNow = `${todayDate.getHours()}:${todayDate.getMinutes()}`;
        const today = format(new Date(), 'yyyy-MM-dd');
        const selectedDate = date.textContent;
        if (selectedDate <= today && time.textContent < timeNow) return true
    };

    if (checkDate() || checkTime()) {
        todoDiv.classList.add('outdatedTodo');
    }
};
export default checkTodoOutdate