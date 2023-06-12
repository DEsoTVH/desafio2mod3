// Primer challenge, borde rojo a la imagen del logo //

document.addEventListener("click", (e) => {
    if (e.target.id == "clicker") {
        const borderImg = document.getElementById("clicker");

        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "none";
        } else {
            borderImg.style.border = "2px solid red";
        }
    }
})

// Segundo challenge, lista de items que deben indicar si la cantidad supera los 10 y sino es tal, indicar cuantos lleva. //

function calculate(){
    let diablo4 = document.getElementById("diablo4").value;
    let wow = document.getElementById("wow").value;
    let starcraft = document.getElementById("starcraft").value;
    
    let results = Number(diablo4) + Number(wow) + Number(starcraft);
    
    if (results <= 10) {
        document.getElementById("checkresults").innerHTML=
        "You have " + results + " codes"
        results;
       
    } else {
      document.getElementById("checkresults").innerHTML=
        "Thats way too much!";
    }
}

// Tercer challenge, consiste en generar respuestas para 2 dispocisiones de claves, 911 y 714. //
    
function passInput(){
    let passinput1 = document.querySelector("#firstdig").value;
    let passinput2 = document.querySelector("#secdig").value;
    let passinput3 = document.querySelector("#thirddig").value;
    
    if (passinput1 === "9" && passinput2 === "1" && passinput3 ==="1") {
      document.getElementById("loginresults").innerHTML=
      "FIRST PASSWORD OK";
    } else if (passinput1 === "7" && passinput2 === "1" && passinput3 ==="4"){
      document.getElementById("loginresults").innerHTML=
      "SECOND PASSWORD OK";
    } else{
      document.getElementById("loginresults").innerHTML=
      "WRONG PASSWORD! TRY AGAIN!";
    }
    
}