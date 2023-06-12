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
    
    let resultado = Number(diablo4) + Number(wow) + Number(starcraft);
    
    if (resultado <= 10) {
        document.getElementById("checkresults").innerHTML=
        "You have " + resultado + " codes"
        resultado;
       
    } else {
      document.getElementById("checkresults").innerHTML=
        "Thats way too much!";
    }
    }
    


