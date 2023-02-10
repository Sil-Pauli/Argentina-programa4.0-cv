//función que muestra el menu responsive
function responsiveMenu(){
    var x =document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className="";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { 
    efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("info");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("1").classList.add("barra-progreso1");
        document.getElementById("2").classList.add("barra-progreso2");
        document.getElementById("3").classList.add("barra-progreso3");
        document.getElementById("4").classList.add("barra-progreso4");
    }

}