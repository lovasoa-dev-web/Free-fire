const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4'];
const menuIcon = document.querySelector('.menu-icon');
const headRight = document.querySelector('.head-right ul');

let  index = 0;
nextButton.addEventListener('click', () => {
    index ++;
    video.src = movieList[index];

    if(index === 1){
        index = -1;
    }
});

menuIcon.addEventListener('click', () => {
    headRight.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
const navLinks = headRight.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        headRight.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !headRight.contains(event.target)) {
        headRight.classList.remove('active');
    }
});

document.getElementById("years").textContent = new Date().getFullYear();