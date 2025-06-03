let b= true;
let c = true;
const pbris1 = 100;
const pbris2 = 1000;

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

function Kassa(){
    
    document.getElementById("Kundkassa").style.display = "block"
    document.getElementById("Pris1").style.display = "none"
    document.getElementById("Pris2").style.display = "none"
    document.getElementById("headerg").style.display = "none"
    document.getElementById("maing").style.display = "none"
}
function Close(){
    document.getElementById("Kundkassa").style.display = "none"
    document.getElementById("Pris1").style.display = ""
    document.getElementById("Pris2").style.display = ""
    document.getElementById("headerg").style.display = ""
    document.getElementById("maing").style.display = ""
}


function Läggtill1(){
    
    document.getElementById("Priskassa").innerHTML = pbris1;
    document.getElementById("Väljprodukt").innerHTML = "1 månad"
    
}

function Läggtill2(){
        document.getElementById("Priskassa").innerHTML = pbris2;
        document.getElementById("Väljprodukt").innerHTML = "12 månad"
}
function Betala(){
        document.getElementById("Pr").style.display ="none"
        document.getElementById("Su").style.display ="none"
        document.getElementById("betala").style.display="none"
        document.getElementById("Namnk").style.display="block"
        document.getElementById("lössenordk").style.display="block"
}