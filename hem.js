let a = true;

function Menu(){
    if(a){
        document.getElementById("sidor").style.display = "block";
        a = false
    }
    else{
        document.getElementById("sidor").style.display = "none";
        a = true
    }
}
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