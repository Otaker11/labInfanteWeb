//Metodo para ocultar el navbar horizontal
var bandera = true;
var sideId = document.getElementById("side");
var mainId = document.getElementById("main");

function sideBar() {
    if (bandera) {
        sideId.classList.remove("openSide");
        mainId.classList.remove("openMain");
        bandera = false;
    } else {
        sideId.classList.add("openSide");
        mainId.classList.add("openMain");
        bandera = true;
    }
}