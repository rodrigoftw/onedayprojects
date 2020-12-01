const body = document.body;
const color = document.getElementById('text-color');
const copied = document.getElementById('copied');
const card = document.getElementById('card');

card.addEventListener('click', copyToClipboard);

setInterval(changeBackground, 5000);

function changeBackground() {
  const col1 = setRandomRGB();
  const col2 = setRandomRGB();
  const col3 = setRandomRGB();

  const hexColorString = getFullColorHex(col1, col2, col3);

  const colorString = `RGB(${col1}, ${col2}, ${col3})`;
  body.style.background = colorString;
  color.innerText = `${colorString} - #${hexColorString}`;
}

function setRandomRGB() {
	return Math.floor(Math.random() * 256);
}

function getFullColorHex(r,g,b) {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red+green+blue;
};

function rgbToHex(rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

function copyToClipboard() {
  let range = document.createRange();
  range.selectNode(document.getElementById("text-color"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  
  copied.style.opacity = 1;
  setInterval(() => {
    copied.style.opacity = 0
  }, 2000);

}