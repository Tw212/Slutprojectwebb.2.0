let myTimer= setInterval(myTimer, 1000);
let time = 0;
let Start = false;

function Start(){
    Start = true
    return Start
}


function myTimer() { 
    if(Start = true)
    {
        time++; 
        document.getElementById("tid").innerHTML = time;
    }
}
setTimeout(myTimer, 100) 