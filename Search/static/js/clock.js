function digiClock(){
    var now = new Date();
    var seconds = now.getSeconds();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var div = `
        <span class="digiTime">${hours}:${minutes}:${seconds}</span>
    `;

    document.querySelector(".digiClock").innerHTML = div;


}
function setClock() {
    var now = new Date();
    var seconds = now.getSeconds();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    const secondsDeg = seconds*6;
    const minutesDeg = 6*minutes;
    const hoursDeg = 60*hours + minutes/2;

    document.getElementById('sec').style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById('min').style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setClock, 1000);
setInterval(digiClock, 1000);
digiClock();
setClock();