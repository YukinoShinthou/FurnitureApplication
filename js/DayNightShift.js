let day = true;
let night = false;
function changeToDay(){
    day = true;
    night = false;
    const dayImg = document.getElementById('daynightimage');
    dayImg.src = './day.png';
}

function changeToNight(){
    day = false;
    night = true;
    const dayImg = document.getElementById('daynightimage');
    dayImg.src = './night.jpg';
}