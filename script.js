const startButton = document.getElementById("startCountdown");

startButton.addEventListener("click", function() {
    countdown();
    const cnt = document.getElementById("container");
    cnt.classList.remove("bg")
    cnt.classList.add("scare");
});

function calcMyTime() { 
    let actualHour = new Date();

    let wantedHour = new Date();

    wantedHour.setDate(wantedHour.getDate() + 3);
    wantedHour.setHours(9);
    wantedHour.setMinutes(30);
    wantedHour.setSeconds(0);
    
    let timeDiff = wantedHour - actualHour;

    return timeDiff;
};

function countdown() {
    let timeToWait = calcMyTime();
    let daysToWait = Math.floor(timeToWait / (1000 * 60 * 60 * 24));
    let hoursToWait = Math.floor((timeToWait % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesToWait = Math.floor((timeToWait % (1000 * 60 * 60)) / (1000 * 60));
    let secondsToWait = Math.floor((timeToWait % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${daysToWait}d ${hoursToWait}h  ${minutesToWait}m  ${secondsToWait}s`;
  
    setTimeout(countdown, 1000);    
}   
