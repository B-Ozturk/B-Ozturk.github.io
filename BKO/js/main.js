alert("Als je op de foto's bij de tijdlijn klikt dan kan je naar die versie gaan.Dit werkt niet bij Versie 3\nIk heb niets verbeterd aan de oude versies zodat je kan zien hoe het er toen uit zag.Geniet van de evolutie van mijn website.\n\nBKO - Berke Kaan Öztürk");

const button = document.querySelector(".lichaam");
let lightModeOn = false;/*Darkmode*/

const changeHandler = function() {
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

    const container = document.querySelector(".kontainer");
    container.classList.toggle("kontainerLM");

    const introductie = document.querySelector(".intro");
    introductie.classList.toggle("introLM");

    let blok, b;
    blok = document.querySelectorAll(".blok");
    for (b = 0; b < blok.length; b++) {
    blok[b].classList.toggle("blokLM");
    }

    let pijl, c;
    pijl = document.querySelectorAll(".pijl");
    for (c = 0; c < pijl.length; c++) {
    pijl[c].classList.toggle("pijlLM");
    }

    let tblok, d;
    tblok = document.querySelectorAll(".tblok");
    for (d = 0; d < tblok.length; d++) {
    tblok[d].classList.toggle("tblokLM");
    }

    const footer = document.querySelector(".kopie");
    footer.classList.toggle("kopieLM");  

    console.log(lightModeOn);
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