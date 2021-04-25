const button = document.querySelector(".lichaam");
let lightModeOn = false;

const changeHandler = function(){
    lightModeOn = true;
    const polestar = document.querySelector(".jumbotron");
    polestar.classList.toggle("jumbotronLM");

    const nav = document.querySelector("nav");
    nav.classList.toggle("navLM");
    
    let subpagina, a;
    subpagina = document.querySelectorAll(".subpagina");
    for (a = 0; a < subpagina.length; a++) {
    subpagina[a].classList.toggle("subpaginaLM");
    }

    const body = document.querySelector(".lichaam");
    body.classList.toggle("lichaamLM");

    const container = document.querySelector(".container");
    container.classList.toggle("containerLM");

    const text = document.querySelector("p");
    text.classList.toggle(".pLM");
    
    let tekst, b;
    tekst = document.querySelectorAll(".text");
    for (b = 0; b < tekst.length; b++) {
    tekst[b].classList.toggle("textLM");
    }

    const footer = document.querySelector(".kopie");
    footer.classList.toggle("kopieLM");    
}

button.addEventListener("click-disabled", changeHandler);

setInterval(function(){
  
    const currentDate = new Date();

    if(lightModeOn === false){
        if(currentDate.getHours() >= 8 && currentDate.getHours() <= 19 ){
                changeHandler();
                console.log(currentDate.getHours());
        }
    }
    else if(lightModeOn === true){
        console.log(currentDate.getHours());
    }

}, 1000);