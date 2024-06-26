let date, heur, min, sec;

function horloge() {
    date = new Date();
    heur = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds(); 

    document.getElementById("heures").style.transform = `translate(-50%, -100%) rotate(${heur * 360 / 12 + min * 30 / 60}deg)`;
    document.getElementById("minutes").style.transform = `translate(-50%, -100%) rotate(${min * 360 / 60 + sec * 6 /60}deg)`;
    document.getElementById("secondes").style.transform = `translate(-50%, -100%) rotate(${sec * 360 / 60}deg)`;
}

horloge();
window.setInterval(horloge, 1000);
