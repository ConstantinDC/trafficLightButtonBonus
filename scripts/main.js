const TIME_INTERVAL = 10000;

let btn = document.getElementById("lights");
let color = ['yellow', 'green', 'red'];
let i = 0;

function changeColor() {
	btn.style.backgroundColor = color[i];
	++i;
	if (i > color.length - 1) {
		i = 0;
	}
}

setInterval(changeColor, TIME_INTERVAL);
