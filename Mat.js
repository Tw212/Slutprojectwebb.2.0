function Go(i){
    document.getElementById(i).style.display ="flex";
    document.getElementById("Mat-tabel").style.display = "none";
}



function Return(i){
    
        document.getElementById(i).style.display = "none";
        document.getElementById("Mat-tabel").style.display = "block";

}

let a = true;

function Menu(){
    if(a){
        document.getElementById("sidor").style.display = "block";
        document.getElementById("Mat-tabel").style.display = "none"
        a = false
    }
    else{
        document.getElementById("sidor").style.display = "none";
        document.getElementById("Mat-tabel").style.display = "block"
        a = true
    }
}