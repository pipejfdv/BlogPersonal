let porcentaje = document.querySelector('.porcentaje');
let progreso = document.querySelector('.progreso');
var cuenta = 4;
var porce = 16;
var carga = setInterval(animacion,50);
function animacion(){
    if(cuenta == 100 && porce == 400){
        clearInterval(carga);
        window.location.href="/enlaces/Index.html";
    }
    else{
        porce=porce+4;
        cuenta= cuenta+1;
        progreso.style.width = porce + 'px';
        porcentaje.textContent = cuenta + '%';
    }
}