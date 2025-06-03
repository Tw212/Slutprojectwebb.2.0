let a = true;

function Menu(){
    if(a){
        document.getElementById("sidor").style.display = "block";
        document.getElementById("Albin").style.display = "none"
        document.getElementById("B-side").style.display = "none"
        document.getElementById("texth").style.display = "none"
        document.getElementById("t").style.display = "none"
        document.getElementById("b").style.display = "none"
        a = false
    }
    else{
        document.getElementById("sidor").style.display = "none";
        document.getElementById("Albin").style.display = ""
        document.getElementById("B-side").style.display = ""
        document.getElementById("texth").style.display = ""
        document.getElementById("t").style.display = ""
        document.getElementById("b").style.display = ""
        a = true
    }
}



let o = true;
let u = true;
let Pris1 = 100;
let Pris2 = 1000;

function Läggtill1(){
    if(o){
        document.getElementById("Priskassa").innerHTML = Pris1;
    }
}

function Läggtill2(){
    if(u){
        document.getElementById("Priskassa").innerHTML = Pris2;
    }
}