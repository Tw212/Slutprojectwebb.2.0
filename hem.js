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