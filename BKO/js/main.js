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

function showTime(){
    const date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
