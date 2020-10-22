

document.querySelector('.bars').addEventListener('click', cross);

function cross(){ 
    document.querySelector('.ul').classList.toggle('showNav');
    document.querySelector('.bar-1').classList.toggle('cross');
    document.querySelector('.bar-2').classList.toggle('cross');
    document.querySelector('.bar-3').classList.toggle('cross');
}

