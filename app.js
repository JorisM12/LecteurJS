const video = document.querySelector('.video');
const btnPausePlay = document.querySelector('#play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange =  document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.querySelector('#mute');
const fullScreen =  document.querySelector('#fullscreen');
const volumeSlider =  document.querySelector('#volume-slider');
btnPausePlay.addEventListener('click',togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused) {
        img.src = "ressources/pause.png";
        video.play();
    }else{
        img.src = "ressources/play.png";
        video.pause();
    }
}
video.addEventListener('timeupdate',()=>{
    let juicePos =  video.currentTime / video.duration;
    juice.style.width =  juicePos * 100 + "%";
    if(video.ended) {
        img.src = "ressources/play.png";
    }
})
volumeSlider.addEventListener('change', ()=>{
    video.volume = volumeSlider.value / 100;
})

muteBtn.addEventListener('click',()=>{
    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    }else{
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
})
let rect = barreOrange.getBoundingClientRect();
let largeur =  rect.width;

barreOrange.addEventListener('click', (e) =>{
    let x = e.clientX - rect.left;
    let widthPercent = ((x*100/largeur));
    let durantionVideo =  video.duration;
    video.currentTime = durantionVideo * (widthPercent / 100);

})
window.addEventListener('resize', ()=>{
    let rect = barreOrange.getBoundingClientRect();
    let largeur =  rect.width;
})

video.addEventListener('dblclick', () => {
    video.requestFullscreen();
} )
fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
} )