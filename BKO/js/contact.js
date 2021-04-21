const button = document.querySelector(".lichaam");
let lightModeOn = false;

const changeHandler = function(){
    lightModeOn = true;
    
    const nav = document.querySelector("nav");
    nav.classList.toggle("navLM");

    const polestar = document.querySelector(".jumbotron");
    polestar.classList.toggle("jumbotronLM");

    const dropdown = document.querySelector(".navbar-dark");
    dropdown.classList.toggle("navbar-light");

    const dropdown2 = document.querySelector(".navbar-toggler-icon");
    dropdown2.classList.toggle("navbar-light");

    let subpagina, a;
    subpagina = document.querySelectorAll(".subpagina");
    for (a = 0; a < subpagina.length; a++) {
    subpagina[a].classList.toggle("subpaginaLM");
    }

    const body = document.querySelector(".lichaam");
    body.classList.toggle("lichaamLM");

    const container = document.querySelector(".container");
    container.classList.toggle("containerLM");
    
    let ttxt, b;
    ttxt = document.querySelectorAll(".tabeltekst");
    for (b = 0; b < ttxt.length; b++) {
    ttxt[b].classList.toggle("tabeltekstLM");
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

//Website visitor counter
function counter_fn() {
    let counter = document.getElementById("cntr");
    let count = 0;
    count = parseInt(counter.innerHTML);
    count = count + 1;
    counter.innerHTML = count;
}
window.onload = counter_fn;