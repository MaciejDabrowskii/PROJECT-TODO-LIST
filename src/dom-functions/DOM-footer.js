import gitLogo from '../icons/gitLogo.png';

const createFooter = () => {
    const footerDiv = document.querySelector('.footer')
    
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    nameDiv.innerText = 'Maciej Dabrowski'

    const gitLogoDiv = document.createElement('div');
    gitLogoDiv.classList.add('gitLogoDiv');
    const gitIcon = document.createElement('img');
    gitIcon.classList.add('gitIcon')
    gitIcon.src = gitLogo;

    gitLogoDiv.append(gitIcon);

    footerDiv.append(nameDiv, gitLogoDiv);

    document.querySelector('.gitIcon').addEventListener('click', () => {
        window.open('https://github.com/MaciejDabrowskii', '_blank').focus();
    });
};

export default createFooter