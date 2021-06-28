// Globale Variabelen
let firstLevelScore = 0;
let secondLevelScore = 0;
let thirdLevelScore = 0;
let totalScore = 0;
let players = [];

// Variabelen
let studentNumber = 0;
let speler = "";

const addPlayer = document.querySelector(".add-player-button");
addPlayer.addEventListener("click", function(event)
{  
    player1.number = document.querySelector(".studentNumber").value;
    player1.name = document.querySelector(".nickName").value;
    player1.points = totalScore;

    playerList.push(player1);
    console.log(playerList);
    
});

/* Level 1 */

// Variabelen
let score = 0;
let multiplier = 0;
let ingevuldeAntwoordenEen = [];
let juisteAntwoordenEen = ['3' , '3', '2', '1', '3', '3', '1', '2', '4', '4'];

const checkButton = document.querySelector(".checkButton");

checkButton.addEventListener("click", function(event){
    let formsArray = document.querySelectorAll(".anket1");

    formsArray.forEach(element => {
        let inputs = element.elements;
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].type == 'radio') {
                let check = inputs[i].checked;
               
                if(check){
                    ingevuldeAntwoordenEen.push(inputs[i].value);
                }

            }
        }
    });

    for (let i = 0; i < ingevuldeAntwoordenEen.length; i++) {
        if(ingevuldeAntwoordenEen[i] === juisteAntwoordenEen[i]){
            console.warn("juist");
            score++;
            multiplier++;
        }
        else {
            console.warn("invul antwoord = " + ingevuldeAntwoordenEen[i]);
            console.info("goede antwoord = "  + juisteAntwoordenEen[i]);
        }
    }

    let streak = multiplier * 1.5;
    console.log("Streak:" + streak);

    firstLevelScore = score + streak;
    console.log("FinalScore:" + firstLevelScore);

    document.querySelector(".scoreBord").innerHTML = '<b> ' + firstLevelScore + '</b>';
});

/* Level 2 */

// Variabelen
let score2 = 0;
let multiplier2 = 0;
let ingevuldeAntwoordenTwee = [];
let juisteAntwoordenTwee = ['1' , '4', '4', '3', '1', '3', '1', '2', '4', '1'];

const checkButton2 = document.querySelector(".checkButtonTwo");

checkButton2.addEventListener("click", function(event){
    let formsArray2 = document.querySelectorAll(".anket2");

    formsArray2.forEach(element => {
        let inputs2 = element.elements;
        for (let i = 0; i < inputs2.length; i++) {

            if (inputs2[i].type == 'radio') {
                let check2 = inputs2[i].checked;
               
                if(check2){
                    ingevuldeAntwoordenTwee.push(inputs2[i].value);
                }
            }
        }
    });

    for (let i = 0; i < ingevuldeAntwoordenTwee.length; i++) {
        if(ingevuldeAntwoordenTwee[i] === juisteAntwoordenTwee[i]){
            console.warn("juist");
            score2++;
            multiplier2++;
        }
        else {
            console.warn("invul antwoord = " + ingevuldeAntwoordenTwee[i] );
            console.info("goede antwoord = "  + juisteAntwoordenTwee[i]);
            multiplier2--;
        }
    }

    let streak2 = multiplier2 * 2.5;
    console.log("Streak2:" + streak2);

    secondLevelScore = score2 + streak2;
    console.log("FinalScore2:" + secondLevelScore);

    document.querySelector(".scoreBordTwo").innerHTML = '<b> ' + secondLevelScore + '</b>';
});

/* Level 3 */

// Variabelen
let score3 = 0;
let multiplier3 = 0;
let ingevuldeAntwoordenDrie = [];
let juisteAntwoordenDrie = ['1' , '4', '4', '3', '1', '3', '1', '2', '4', '1'];

const checkButton3 = document.querySelector(".checkButtonThree");

checkButton3.addEventListener("click", function(event){
    let formsArray3 = document.querySelectorAll(".anket3");

    formsArray3.forEach(element => {
        let inputs3 = element.elements;
        for (let i = 0; i < inputs3.length; i++) {

            if (inputs3[i].type == 'radio') {
                let check3 = inputs3[i].checked;
               
                if(check3){
                    ingevuldeAntwoordenDrie.push(inputs3[i].value);
                }
            }
        }
    });

    for (let i = 0; i < ingevuldeAntwoordenDrie.length; i++) {
        if(ingevuldeAntwoordenDrie[i] === juisteAntwoordenDrie[i]){
            console.warn("juist");
            score3++;
            multiplier3++;
        }
        else {
            console.warn("invul antwoord = " + ingevuldeAntwoordenDrie[i] );
            console.info("goede antwoord = "  + juisteAntwoordenDrie[i]);
            multiplier3 = 0;
        }
    }

    let streak3 = multiplier3 * 3;
    console.log("streak3:" + streak3);

    thirdLevelScore = score3 + streak3;
    console.log("Finalscore3:" + thirdLevelScore);

    document.querySelector(".scoreBordThree").innerHTML = '<b> ' + thirdLevelScore + '</b>';
});

// Quiz afronden
const clearButton = document.querySelector(".afrondenButton");

clearButton.addEventListener("click", function(event){

    let vraag1 = document.getElementsByName("vraag1");
    for(let i = 0; i < vraag1.length; i++)
    vraag1[i].checked = false;

    let vraag2 = document.getElementsByName("vraag2");
    for(let i = 0; i < vraag2.length; i++)
    vraag2[i].checked = false;

    let vraag3 = document.getElementsByName("vraag3");
    for(let i = 0; i < vraag3.length; i++)
    vraag3[i].checked = false;

    let vraag4 = document.getElementsByName("vraag4");
    for(let i = 0; i < vraag4.length; i++)
    vraag4[i].checked = false;

    let vraag5 = document.getElementsByName("vraag5");
    for(let i = 0; i < vraag5.length; i++)
    vraag5[i].checked = false;

    let vraag6 = document.getElementsByName("vraag6");
    for(let i = 0; i < vraag6.length; i++)
    vraag6[i].checked = false;

    let vraag7 = document.getElementsByName("vraag7");
    for(let i = 0; i < vraag7.length; i++)
    vraag7[i].checked = false;

    let vraag8 = document.getElementsByName("vraag8");
    for(let i = 0; i < vraag8.length; i++)
    vraag8[i].checked = false;

    let vraag9 = document.getElementsByName("vraag9");
    for(let i = 0; i < vraag9.length; i++)
    vraag9[i].checked = false;

    let vraag10 = document.getElementsByName("vraag10");
    for(let i = 0; i < vraag10.length; i++)
    vraag10[i].checked = false;

    // Het resetten van de score
    document.querySelector(".scoreBord").innerHTML = '<b> ' + "" + '</b>';
    document.querySelector(".scoreBordTwo").innerHTML = '<b> ' + "" + '</b>';
    document.querySelector(".scoreBordThree").innerHTML = '<b> ' + "" + '</b>';

    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    totalScore = firstLevelScore + secondLevelScore + thirdLevelScore;
    player1.points = totalScore;
    // alert("Studentnummer: " + JSON.stringify(studentNumber) + "Speler: " + JSON.stringify(speler) + "Score: " + totalScore);
    alert("Studentnummer: " + player1.number + " | Speler: " + player1.name + " | Score: " + player1.points);
    printArray();
    reset();

    console.warn("Studentnummer: " + player1.number + " | Speler: " + player1.name + " | Score: " + player1.points);
    player1 = {};

    console.warn("Alles is gewist :*");
});

// Variabelen
const playerList = [];  // Array met players
console.log(playerList);
let player1 = {};     // Object van player1
console.log(player1);

// Prints the scoreBoard
const arrayLabel = document.querySelector('.players-label');

function printArray() {
    let arrayText = "";

    for(let i = 0; i < playerList.length; i++) {
        arrayText += i + ": " + JSON.stringify(playerList[i]) + "<br>";
    }

    arrayLabel.innerHTML = arrayText;
}

// Score word gereset en klaar gezet voor de volgende ronde
function reset() {
    // Array met ingevulde antwoorden word geleegd
    ingevuldeAntwoordenEen = [];
    ingevuldeAntwoordenTwee = [];
    ingevuldeAntwoordenDrie = [];

    // Scores resetten
    score = 0;
    score2 = 0;
    score3 = 0;
    
    // Multipliers resetten
    multiplier = 0;
    multiplier2 = 0;
    multiplier3 = 0;

    // Eindscore resetten
    firstLevelScore = 0;
    secondLevelScore = 0;
    thirdLevelScore = 0;

    console.warn(firstLevelScore);
    console.warn(secondLevelScore);
    console.warn(thirdLevelScore);

    // Speler resetten
    studentNumber = 0;
    speler = "";
    totalScore = 0;
}