const timerDisplay=document.querySelector("#timerDisplay");
const startbtn=document.querySelector("#startbtn");
const pausebtn=document.querySelector("#pausebtn");
const resetbtn=document.querySelector("#resetbtn");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId;
let secs=0;
let mins=0;
let hrs=0;

startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(updateTime,75);
    }
});
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalId);
    startTime=0;
    elapsedTime=0;
    currentTime=0;
    secs=0;
    mins=0;
    hrs=0;
    timerDisplay.textContent="00:00:00";
});
function updateTime(){
     elapsedTime=Date.now()-startTime;
     secs=Math.floor((elapsedTime/1000)%60);
     mins=Math.floor((elapsedTime/(1000*60))%60);
     hrs=Math.floor((elapsedTime/(1000*60*60))%60);
     secs=pad(secs);
     mins=pad(mins);
     hrs=pad(hrs);
     timerDisplay.textContent=`${hrs}:${mins}:${secs}`;

     function pad(unit){
        return(("0")+unit).length>2?unit:"0"+unit;
     }
}
 