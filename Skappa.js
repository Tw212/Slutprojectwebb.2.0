let b= true;

function Pris1(){
    if(b){
        document.getElementById("text1").style.display = "block"
        document.getElementById("text2").style.display = "none"
        b = false
        c = true
        
    }
    else{
        document.getElementById("text1").style.display = "none";
        b = true
        
    }
}

let c = true;

function Pris2(){
    if(c){
        document.getElementById("text2").style.display = "block"
        document.getElementById("text1").style.display = "none"
        c = false
        b = true
        
    }
    else{
        document.getElementById("text2").style.display = "none"
        c = true
        
    }
}

let l = true;

function Kassa(){
    if(l){
        document.getElementById("Kundkassa").style.display = "block"
        document.getElementById("Pris1").style.display = "none"
        document.getElementById("Pris2").style.display = "none"
        l = false;
    }
    else{
        document.getElementById("Kundkassa").style.display = "none"
        document.getElementById("Pris1").style.display = "block"
        document.getElementById("Pris2").style.display = "block"
        l = true;
    }
}