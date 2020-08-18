let timerMinutes = 25;
let timerSeconds = 0;
let timerInstance = null;
let resetbtn = document.querySelector('.reset');
window.addEventListener('DOMContentLoaded', (event) => {
    M.AutoInit();
    displayTimer();
});

function displayTimer(){
    
    let display = document.querySelector('.timer');
    if(timerMinutes == 0 && timerSeconds == 0){
        stop();
        document.querySelector("#minion").play();
        timerMinutes = 25
    }
    if(timerMinutes<10 && timerSeconds <10){
        display.innerHTML = `0${timerMinutes}:0${timerSeconds}`;
    }
    if(timerMinutes<10 && timerSeconds >=10){
        display.innerHTML = `0${timerMinutes}:${timerSeconds}`;
    }
    if(timerMinutes>=10 && timerSeconds <10){
        display.innerHTML = `${timerMinutes}:0${timerSeconds}`;
    }
    if(timerMinutes>=10 && timerSeconds >=10){
        display.innerHTML = `${timerMinutes}:${timerSeconds}`;
    }
    // if(1){

    // }
    // if(timerSeconds == 0){
    //     display.innerHTML = `${timerMinutes}:00`;
    // }else if(timerSeconds<10){
    //     display.innerHTML = `${timerMinutes}:0${timerSeconds}`;
    // }else{
        
    //     display.innerHTML = `${timerMinutes}:${timerSeconds}`;
    // }
}

function setTimer(){
    let time = document.querySelector('#time');
    timerMinutes = time.value;
    timerSeconds = 00;
    displayTimer();
}

function start(){
    stop();
    resetbtn.disabled = true;
    timerInstance = setInterval(()=>{
        if(timerSeconds == 0){
            timerMinutes -=1
            timerSeconds = 59
        }else{
            timerSeconds -= 1
        }

        displayTimer();
    },1000)
}
function stop(){
    clearInterval(timerInstance);
    resetbtn.disabled = false;

}

function reset(){
    stop();
    timerInstance = null
    timerMinutes = 25
    timerSeconds = 00
    displayTimer();
}
