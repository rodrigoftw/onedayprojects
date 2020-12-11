const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const date = new Date();
const currentMonth = date.getMonth();
const currentDay = date.getDate();

document.getElementById("month").innerHTML = monthsArray[currentMonth];
document.getElementById("day").innerHTML = currentDay;

