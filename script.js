let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];
let HighestScore = 0;

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})
function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200)
}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 200)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let index = Math.floor(Math.random() * 3);
    let randColor = btns[index];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    btnFlash(randbtn)
}
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    }
    else {
        HighestScore = Math.max(HighestScore, level);
        h2.innerHTML = `Game Over! Your Score :-<b> ${level}</b> 
        <br> HighestScore :- ${HighestScore}
        <br> Press Any Key to Start.  `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}