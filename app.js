const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4'];

let  index = 0;
nextButton.addEventListener('click', () => {
    index ++;
    video.src = movieList[index];

    if(index === 1){
        index = -1;
    }
});

document.getElementById("years").textContent = new Date().getFullYear();