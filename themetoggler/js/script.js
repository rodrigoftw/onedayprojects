let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const toggler = document.getElementById('toggler');
const favicon = document.querySelector('link[rel=icon]');
const heart = document.getElementById('heart');

toggler.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	if (heart.innerText == '💙') {
		heart.innerText = '🧡';
		favicon.setAttribute("href", "../contents/moon.png");
	} else {
		if (heart.innerText == '🧡') {
			heart.innerText = '💙';
			favicon.setAttribute("href", "../contents/sun.png");
		}
	}
});