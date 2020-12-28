const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const displayElement = document.querySelector('.clock-display');
const timeElement = document.querySelector('.time');
const amPmElement = document.querySelector('.am-pm');

const weekdayElement = document.querySelector('.weekday');
const dayElement = document.querySelector('.day');
const monthElement = document.querySelector('.month');
const yearElement = document.querySelector('.year');


runClock = () => {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  minutes < 10 ? minutes = '0' + minutes : minutes;
  seconds < 10 ? seconds = '0' + seconds : seconds;
  
  hours = hours % 12;
  hours < 10 ? hours = '0' + hours : hours;
  
  let date = currentTime.getDate();
  date < 10 ? date = '0' + date : date;

	let day = currentTime.getDay();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();
  
  timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  amPmElement.innerHTML = `${ampm}`;

  weekdayElement.innerHTML = `${weekdaysArray[day].toUpperCase()}`;
  dayElement.innerHTML = `${date}`;
  monthElement.innerHTML = `${monthsArray[month].toUpperCase()}`;
  yearElement.innerHTML = `${year}`;
}

runClock();

setInterval(runClock, 1000);