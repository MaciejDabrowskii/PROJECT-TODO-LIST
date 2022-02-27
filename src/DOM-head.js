const head = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');

    const notificationDateDiv = document.createElement('div');
    notificationDateDiv.classList.add('notificationDateDiv');

    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notificationDiv');
    
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');

    notificationDateDiv.append(notificationDiv, dateDiv);

    const head = document.querySelector('.head');
    head.append(logo, notificationDateDiv);

};
export default head