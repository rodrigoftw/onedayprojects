const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const dateElement = document.querySelector('.date-info');

const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

runClock = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  
	const date = currentTime.getDate();
	const day = currentTime.getDay();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();
  
  const hoursDeg = (hours / 12) * 360;
  const minutesDeg = (minutes / 60) * 360;
  const secondsDeg = (seconds / 60) * 360;
  
  hoursElement.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
	minutesElement.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
	secondsElement.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
  
  dateElement.innerHTML = `<h4>Today is...</h4> ${daysArray[day]}, ${monthsArray[month]} ${date} ${year}`;
}

runClock();

setInterval(runClock, 1000);