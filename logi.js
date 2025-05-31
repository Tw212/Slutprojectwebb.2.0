
function Logina(){

    const username = document.getElementById("a-name").value;
    const password = document.getElementById("L-name").value;
    const errorMsg = document.getElementById("error-msg");


    const validUser = "admin";
    const validPass = "1234";

  
  
    if (username === validUser && password === validPass) {
        errorMsg.style.color = "green";
        errorMsg.textContent = "Inloget lyckades!";
        window.location.href = "hem.html";
    } 
    else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "fel användarnamn eller lössenord.";
    }
}


