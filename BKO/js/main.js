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

    const demo = document.getElementById("demo");
    demo.classList.toggle("demoLM");

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

// Set the date we're counting down to
const countDownDate = new Date("May 31, 2021 00:00:00").getTime();

let Timer = setInterval(function() {

  // Data van vandaag
  const nu = new Date().getTime();
    
  // Berekent het verschil tussen nu en countDownDate
  let verschil = countDownDate - nu;
    
  // Berekening van de resterende tijd
  const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
  const uren = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuten = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
  const seconden = Math.floor((verschil % (1000 * 60)) / 1000);
    
  // De output => id="demo"
  document.getElementById("demo").innerHTML ="Next update in " + dagen + "d " + uren + "h "
  + minuten + "m " + seconden + "s ";
    
  // Als de timer op nul staat dan voert het dit uit
  if (verschil < 0) {
    clearInterval(Timer);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);