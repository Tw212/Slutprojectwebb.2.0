let tid;
const gen = Värde();
const gen2 = Värde(); 
let poäng = 0;
let tl = 3;
let hp = 3

let pause = false;
let stängav = false;

function Starta()
{(function()
    {
        let tids = 0;
        tid = setInterval(()=>{
        tids ++;
        if(tids >= tl && pause == false && stängav == false)
        {       
            const c1 = gen.next().value;
            let c2 = gen2.next().value;
           
            while (c2 === c1) {
                c2 = gen2.next().value;
            }

            Spawn("dbild", c1);
            Spawn("bbild", c2);
            tids = 0;
        }
    },1000)
    })()
    
}
function Pause(){
    if(pause == false){
        pause = true;
    }
    else if(pause == true){
        pause = false;
    }
    
}
function Stängav(){
    clearInterval(tid);
    tid = null;
    document.getElementById("bbild").style.display = "none"
    document.getElementById("dbild").style.display = "none"
}
function Plus(){
    poäng+= 1;
    tl -= 0.1;
    document.getElementById("Poäng").innerHTML = poäng;
    document.getElementById("bbild").style.display = "none"
}
function Minus(){
    hp -= 1;
    document.getElementById("hp").innerHTML = hp;
    document.getElementById("dbild").style.display = "none"
    if(hp<=0){
        Stängav()
    }
}


function* Värde(){
    while (true) {
    yield Math.floor(Math.random() * 9) + 1;
  }
}





function Spawn(id, c)
{
    const bild1 = document.getElementById(id)
    const nyPlats = document.querySelector(`[data-area='r-${c}']`);
    if(bild1 && nyPlats){
        nyPlats.appendChild(bild1);
        bild1.style.display = "block";
        nyPlats.style.display = "flex";
        nyPlats.style.justifyContent = "center";
        nyPlats.style.alignItems = "center";
    }

}


let a = true
function Menu(){
    if(a){
        document.getElementById("sidor").style.display = "block";
        document.getElementById("Spel-block").style.display = "none";
        document.getElementById("aside2").style.display = "none"
        document.getElementById("Viktiga-Knappar").style.display = "none"
        a = false
    }
    else{
        document.getElementById("sidor").style.display = "none";
        document.getElementById("Spel-block").style.display = "";
        document.getElementById("aside2").style.display = ""
        document.getElementById("Viktiga-Knappar").style.display = ""
        a = true
    }
}