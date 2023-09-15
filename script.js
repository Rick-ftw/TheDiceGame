function randomNumFun() {
    var ranNum = Math.random();
    return ranNum;
}

// Storing random number value and and making it a floor value between 1 to 6
var ranNum0;
// ranNum0 = Math.floor(ranNum0 * 6) + 1;

var ranNum1; 
// ranNum1 = Math.floor(ranNum1 * 6) + 1;


// selecting header
var head = document.querySelector("#heading_con > h1");


//selecting roll btn
var roll = document.querySelector("#roll_btn");

//all dots selected and stored inside a variable
var dot1 = document.querySelectorAll(".dot1")
var dot2 = document.querySelectorAll(".dot2")
var dot3 = document.querySelectorAll(".dot3")
var dot4 = document.querySelectorAll(".dot4")
var dot5 = document.querySelectorAll(".dot5")
var dot6 = document.querySelectorAll(".dot6")

//Three containers
var dotcon1 = document.querySelectorAll(".dotcon1");
var dotcon2 = document.querySelectorAll(".dotcon2");
var dotcon3 = document.querySelectorAll(".dotcon3");



//For getting number 1
function number1() {
    //for box1 who's gonna be hidden
    dotcon1[0].style.visibility = "hidden";
    dotcon3[0].style.visibility = "hidden";
    dot1[0].style.visibility = "hidden"
    dot2[0].style.visibility = "hidden"
    dot3[0].style.display = "none";
    dot5[0].style.visibility = "hidden"
    dot6[0].style.visibility = "hidden"

    //alignment
    dotcon2[0].style.justifyContent = "center";



    //who's gonna be visible
    dot4[0].style.visibility = "visible";
}

function num1() {

    //alignment
    dotcon2[1].style.justifyContent = "center";

    //for box2 who's gonna be hidden
    dotcon1[1].style.visibility = "hidden";
    dotcon3[1].style.visibility = "hidden";
    dot1[1].style.visibility = "hidden"
    dot2[1].style.visibility = "hidden"
    dot3[1].style.display = "none";
    dot5[1].style.visibility = "hidden"
    dot6[1].style.visibility = "hidden"

    //who's gonna be visible

    dot4[1].style.visibility = "visible";

}

function number2() {
    //for box1 who's gonna be hidden
    dotcon2[0].style.visibility = "hidden"
    dot1[0].style.visibility = "hidden";
    dot3[0].style.display = "none";
    dot6[0].style.visibility = "hidden";
    dot4[0].style.visibility = "hidden"


    //who's gonna be visible
    dotcon1[0].style.visibility = "visible"
    dotcon3[0].style.visibility = "visible"
    dot2[0].style.visibility = "visible"
    dot5[0].style.visibility = "visible"


}
function num2() {
    //for box2 who's gonna be hidden
    dotcon2[1].style.visibility = "hidden"
    dot1[1].style.visibility = "hidden";
    dot3[1].style.display = "none";
    dot6[1].style.visibility = "hidden";
    dot4[1].style.visibility = "hidden"

    //who's gonna be visible
    dotcon1[1].style.visibility = "visible"
    dotcon3[1].style.visibility = "visible"
    dot2[1].style.visibility = "visible"
    dot5[1].style.visibility = "visible"

}

function number3() {
    //for box1 who's gonna be hidden
    dot1[0].style.visibility = "hidden";
    dot6[0].style.visibility = "hidden";
    dot3[0].style.display = "none";

    //alignment
    dotcon2[0].style.justifyContent = "center";

    //who's gonna be visible
    dot2[0].style.visibility = "visible";
    dot4[0].style.visibility = "visible";
    dot5[0].style.visibility = "visible";


}
function num3() {
    //for box2 who's gonna be hidden
    dot1[1].style.visibility = "hidden";
    dot6[1].style.visibility = "hidden";
    dot3[1].style.display = "none";

    //alignment
    dotcon2[1].style.justifyContent = "center";

    //who's gonna be visible
    dot2[1].style.visibility = "visible";
    dot4[1].style.visibility = "visible";
    dot5[1].style.visibility = "visible";
}

function number4() {
    //for box1 who's gonna be hidden
    dotcon2[0].style.visibility = "hidden";
    dot3[0].style.display = "none";
    dot4[0].style.visibility = "hidden";
    dot5[0].style.visibility = "hidden";

    //who's gonna be visible
    dotcon1[0].style.visibility = "visible";
    dotcon3[0].style.visibility = "visible";
    dot1[0].style.visibility = "visible";
    dot2[0].style.visibility = "visible";
    dot5[0].style.visibility = "visible";
    dot6[0].style.visibility = "visible";

}

function num4() {
    //for box2 who's gonna be hidden
    dotcon2[1].style.visibility = "hidden";
    dot3[1].style.display = "none";
    dot4[1].style.visibility = "hidden";
    dot5[1].style.visibility = "hidden";

    //who's gonna be visible
    dotcon1[1].style.visibility = "visible";
    dotcon3[1].style.visibility = "visible";
    dot1[1].style.visibility = "visible";
    dot2[1].style.visibility = "visible";
    dot5[1].style.visibility = "visible";
    dot6[1].style.visibility = "visible";


}

function number5() {
    //for box1 who's gonna be hidden
    dot3[0].style.display = "none";
    dot3[0].style.visibility = "hidden";

    //alignment
    dotcon2[0].style.justifyContent = "center";

    //who's gonna be visible
    dotcon1[0].style.visibility = "visible"
    dotcon2[0].style.visibility = "visible"
    dotcon3[0].style.visibility = "visible"

    dot1[0].style.visibility = "visible";
    dot2[0].style.visibility = "visible";
    dot4[0].style.visibility = "visible";
    dot5[0].style.visibility = "visible";
    dot6[0].style.visibility = "visible";

}

function num5() {
    //for box1 who's gonna be hidden
    dot3[1].style.display = "none";
    dot3[1].style.visibility = "hidden";

    //alignment
    dotcon2[1].style.justifyContent = "center";

    //who's gonna be visible
    dotcon1[1].style.visibility = "visible"
    dotcon2[1].style.visibility = "visible"
    dotcon3[1].style.visibility = "visible"

    dot1[1].style.visibility = "visible";
    dot2[1].style.visibility = "visible";
    dot4[1].style.visibility = "visible";
    dot5[1].style.visibility = "visible";
    dot6[1].style.visibility = "visible";


}

function number6() {

    //alignment 
    dotcon2[0].style.justifyContent = "space-between";

    //who's gonna be visible
    dotcon1[0].style.visibility = "visible";
    dotcon2[0].style.visibility = "visible";
    dotcon3[0].style.visibility = "visible";

    dot1[0].style.visibility = "visible";
    dot2[0].style.visibility = "visible";
    dot3[0].style.visibility = "visible";
    dot3[0].style.display = "block";
    dot4[0].style.visibility = "visible";
    dot5[0].style.visibility = "visible";
    dot6[0].style.visibility = "visible";

}

function num6() {
    //alignment 
    dotcon2[1].style.justifyContent = "space-between";

    //who's gonna be visible
    dotcon1[1].style.visibility = "visible";
    dotcon2[1].style.visibility = "visible";
    dotcon3[1].style.visibility = "visible";

    dot1[1].style.visibility = "visible";
    dot2[1].style.visibility = "visible";
    dot3[1].style.visibility = "visible";
    dot3[1].style.display = "block";
    dot4[1].style.visibility = "visible";
    dot5[1].style.visibility = "visible";
    dot6[1].style.visibility = "visible";

}

function rollDice0() {

    ranNum0 = randomNumFun();
    ranNum0 = Math.floor(ranNum0 * 6) + 1;

    switch (ranNum0) {
        case 1:
            number1();
            break;
        case 2:
            number2();
            break;
        case 3:
            number3();
            break;
        case 4:
            number4();
            break;
        case 5:
            number5();
            break;
        case 6:
            number6();
            break;
        default:
            break;
    }
}
function rollDice1() {

    ranNum1 = randomNumFun();
    ranNum1 = Math.floor(ranNum1 * 6) + 1;

    switch (ranNum1) {
        case 1:
            num1();
            break;
        case 2:
            num2();
            break;
        case 3:
            num3();
            break;
        case 4:
            num4();
            break;
        case 5:
            num5();
            break;
        case 6:
            num6();
            break;
        default:
            break;
    }
}

function winningStatus() {
    if (ranNum0 > ranNum1) {
        head.textContent = "Player 1 won🎉";
    }
    else if (ranNum0 === ranNum1) {
        head.textContent = "Draw 😒";
    }
    else {
        head.textContent = "Player 2 won🎉";
    }
}

roll.addEventListener("click", function(){
    rollDice0();
    rollDice1();
    winningStatus();
})