let gameSeq = [];
let playerSeq = [];

let Btn = ["red", "green", "blue", "yellow"];

let start = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if (start == false) {
        start = true;

        levelUp();
    }
});

function levelUp () {
    playerSeq = [];

    level++
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor( Math.random() * 3 );
    let randColor = Btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`) 

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    gameSeq.push(randColor)
    console.log(gameSeq);
    
    btnFlash(randBtn);
};

function btnFlash (btn) {
    btn.classList.add("btnFlash");
    setInterval(function(){
        btn.classList.remove("btnFlash")
    }, 300)
};

function userFlash (btn) {
    btn.classList.add("userFlash");
    setInterval(function(){
        btn.classList.remove("userFlash")
    }, 300)
};

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function btnPress () {
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    playerSeq.push(userColor)
    console.log(playerSeq);

    checkAns(playerSeq.length-1)
};  

function checkAns (idx) {

    if ( playerSeq[idx] == gameSeq[idx] ) {
        if ( playerSeq.length == gameSeq.length ) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h3.innerHTML = `Game over! Your score was <b> ${level} </b> </br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "rgb(254, 77, 77)";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset()
    }
}

function reset () {
    start = false;
    gameSeq = [];
    playerSeq = [];
    level = 0;
}