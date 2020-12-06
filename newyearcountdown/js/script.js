const body = document.body;
const currentYear = new Date().getFullYear();
const endTime = new Date(`December 31 ${currentYear} 23:59:59`);

const h1Elements = document.querySelectorAll("h1");

const cardElement = document.getElementById('card');

const titleElement = document.getElementById('title');
const subtitleElement = document.getElementById('subtitle');

titleElement.innerHTML = `${currentYear + 1} is coming in...`;
subtitleElement.innerHTML = `Let's make ${currentYear + 1} our best year ever!`;

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const startTime = new Date();
  const diff = endTime - startTime;
  if (diff > 0) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysElement.innerHTML = days < 10 ? '0' + days : days;
    hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds; 
  } else {
    clearInterval(countdown);
    updateLayout();
    setFireworks();
  }
}

function updateLayout() {
  body.style.backgroundColor = "#000000";
  cardElement.style.backgroundColor = "#000000";
  cardElement.style.opacity = "0.9";
  cardElement.style.border = "1px #b3b3b3 solid";
  cardElement.style.animation = "swing 1s ease";
  cardElement.style.animationIterationCount = "infinite";
  titleElement.innerHTML = 'Happy New Year!';
  subtitleElement.style.opacity = 1;
  daysElement.innerHTML = '00';
  hoursElement.innerHTML = '00';
  minutesElement.innerHTML = '00';
  secondsElement.innerHTML = '00';
  h1Elements.forEach((element) => {
    element.style.color = "#FFFFFF"
  });
}

function setFireworks() {
  if (!PIXI.utils.isWebGLSupported()) return;

  const fireworks = new FIREWORKS({
    full_screen: true,
    target_node: null,
    amount: 10
  });
  
  fireworks.start_burst();
}