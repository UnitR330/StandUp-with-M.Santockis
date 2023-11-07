
const countdownSpan = document.getElementById("countdown");
const span = document.querySelector("span");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

const generateHexColor = ()=> {
    const randomcolor = Math.random().toString(16).slice(2, 8)
    
    span.innerHTML ='#' + randomcolor;
    
    body.style.backgroundColor = '#' + randomcolor;
    
    console.log(randomcolor);
    resetCountdown();  
}

btn.addEventListener("click", generateHexColor);
body.addEventListener("wheel", generateHexColor);

 
let countdown = 10;
let countdownInterval;

const resetCountdown = () => {
    clearInterval(countdownInterval);
    countdown = 10;
    countdownSpan.textContent = countdown;
    countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdownSpan.textContent = countdown;
            countdown--;
        } else {
            generateHexColor();
        }
    }, 1000);
}

btn.addEventListener("click", generateHexColor);
body.addEventListener("wheel", generateHexColor);
body.addEventListener("keypressvf", generateHexColor);

resetCountdown();  






