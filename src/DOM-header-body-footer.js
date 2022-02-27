const headerBodyFooter = () => {
    const mainDiv = document.body;

    const head = document.createElement('div');
    head.classList.add('head');

    const body = document.createElement('div');
    body.classList.add('body');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    mainDiv.append(head, body, footer);

};
export default headerBodyFooter