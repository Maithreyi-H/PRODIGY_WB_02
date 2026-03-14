let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
function updateDisplay(){
    document.getElementById("display").innerText =
        `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}
function start(){
    if(timer !== null) return;
    timer = setInterval(()=>{
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        updateDisplay();
    },1000);
}
function pause(){
    clearInterval(timer);
    timer = null;
}
function reset(){
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}