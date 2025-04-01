var doc = document.getElementById("lights");

function changeColor() {
	if (doc.style.backgroundColor === '') {
 		doc.style.backgroundColor = 'yellow';
	} else if (doc.style.backgroundColor === 'yellow') {
		doc.style.backgroundColor = 'green';
	} else {
		doc.style.backgroundColor = '';
	}
}

var color = ['yellow', 'green', 'red'];
var i = 0;
function change() {
	doc.style.backgroundColor = color[i];
	++i;
	if (i > color.length - 1) {
		i = 0;
	}
}

setInterval(change, 10000);

