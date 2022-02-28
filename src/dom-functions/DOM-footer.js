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

    footerDiv.append(nameDiv, gitLogoDiv)
};

export default createFooter