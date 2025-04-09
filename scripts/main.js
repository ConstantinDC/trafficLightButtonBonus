const TIME_INTERVAL = 10000;
const BTN = document.getElementById("btn");
const COLOR = ['yellow', 'green', 'red'];

let i = 0;

function changeColor() {
	BTN.style.backgroundColor = COLOR[i];
	++i;
	if (i > COLOR.length - 1) {
		i = 0;
	}
}

setInterval(changeColor, TIME_INTERVAL);
