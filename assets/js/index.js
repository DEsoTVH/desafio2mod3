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


