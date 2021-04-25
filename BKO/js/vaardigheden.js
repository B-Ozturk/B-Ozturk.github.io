<<<<<<< HEAD
const button = document.querySelector(".lichaam");
let lightModeOn = false;

const changeHandler = function(){
    lightModeOn = true;
    
    const nav = document.querySelector("nav");
    nav.classList.toggle("navLM");

    const polestar = document.querySelector(".jumbotron");
    polestar.classList.toggle("jumbotronLM");

    let subpagina, a;
    subpagina = document.querySelectorAll(".subpagina");
    for (a = 0; a < subpagina.length; a++) {
    subpagina[a].classList.toggle("subpaginaLM");
    }

    const body = document.querySelector(".lichaam");
    body.classList.toggle("lichaamLM");

    const container = document.querySelector(".container");
    container.classList.toggle("containerLM");

    let sterkT, b;
    sterkT = document.querySelectorAll(".sterkT");
    for (b = 0; b < sterkT.length; b++) {
        sterkT[b].classList.toggle("sterkTLM");
    }
    let sterk, c;
    sterk = document.querySelectorAll(".sterk");
    for (c = 0; c < sterk.length; c++) {
        sterk[c].classList.toggle("sterkLM");
    }

    let msterkT, d;
    msterkT = document.querySelectorAll(".msterkT");
    for (d = 0; d < msterkT.length; d++) {
        msterkT[d].classList.toggle("msterkTLM");
    }
    let msterk, e;
    msterk = document.querySelectorAll(".msterk");
    for (e = 0; e < msterk.length; e++) {
        msterk[e].classList.toggle("msterkLM");
    }

    let vaardighedenT, f;
    vaardighedenT = document.querySelectorAll(".vaardighedenT");
    for (f = 0; f < vaardighedenT.length; f++) {
        vaardighedenT[f].classList.toggle("vaardighedenTLM");
    }
    let vaardigheden, g;
    vaardigheden = document.querySelectorAll(".vaardigheden");
    for (g = 0; g < vaardigheden.length; g++) {
        vaardigheden[g].classList.toggle("vaardighedenLM");
    }

    let mkennisT, h;
    mkennisT = document.querySelectorAll(".mkennisT");
    for (h = 0; h < mkennisT.length; h++) {
        mkennisT[h].classList.toggle("mkennisTLM");
    }
    let mkennis, i;
    mkennis = document.querySelectorAll(".mkennis");
    for (i = 0; i < mkennis.length; i++) {
        mkennis[i].classList.toggle("mkennisLM");
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
        
    }

}, 1000);
=======
const button = document.querySelector(".lichaam");
let lightModeOn = false;

const changeHandler = function(){
    lightModeOn = true;
    
    const nav = document.querySelector("nav");
    nav.classList.toggle("navLM");

    const polestar = document.querySelector(".jumbotron");
    polestar.classList.toggle("jumbotronLM");
    
    let subpagina, a;
    subpagina = document.querySelectorAll(".subpagina");
    for (a = 0; a < subpagina.length; a++) {
    subpagina[a].classList.toggle("subpaginaLM");
    }

    const body = document.querySelector(".lichaam");
    body.classList.toggle("lichaamLM");

    const container = document.querySelector(".container");
    container.classList.toggle("containerLM");

    let sterkT, b;
    sterkT = document.querySelectorAll(".sterkT");
    for (b = 0; b < sterkT.length; b++) {
        sterkT[b].classList.toggle("sterkTLM");
    }
    let sterk, c;
    sterk = document.querySelectorAll(".sterk");
    for (c = 0; c < sterk.length; c++) {
        sterk[c].classList.toggle("sterkLM");
    }

    let msterkT, d;
    msterkT = document.querySelectorAll(".msterkT");
    for (d = 0; d < msterkT.length; d++) {
        msterkT[d].classList.toggle("msterkTLM");
    }
    let msterk, e;
    msterk = document.querySelectorAll(".msterk");
    for (e = 0; e < msterk.length; e++) {
        msterk[e].classList.toggle("msterkLM");
    }

    let vaardighedenT, f;
    vaardighedenT = document.querySelectorAll(".vaardighedenT");
    for (f = 0; f < vaardighedenT.length; f++) {
        vaardighedenT[f].classList.toggle("vaardighedenTLM");
    }
    let vaardigheden, g;
    vaardigheden = document.querySelectorAll(".vaardigheden");
    for (g = 0; g < vaardigheden.length; g++) {
        vaardigheden[g].classList.toggle("vaardighedenLM");
    }

    let mkennisT, h;
    mkennisT = document.querySelectorAll(".mkennisT");
    for (h = 0; h < mkennisT.length; h++) {
        mkennisT[h].classList.toggle("mkennisTLM");
    }
    let mkennis, i;
    mkennis = document.querySelectorAll(".mkennis");
    for (i = 0; i < mkennis.length; i++) {
        mkennis[i].classList.toggle("mkennisLM");
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
        
    }

}, 1000);
>>>>>>> 01d8e7ebac1f25a720e9937d041e68d9c319f354
