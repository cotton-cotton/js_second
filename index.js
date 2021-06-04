/** @format */
const body = document.querySelector("body");

const colors = ["red", "peru", "teal"];

function resize() {
	let width = window.innerWidth;
	if (width > 1000) {
		body.style.backgroundColor = colors[0];
	} else if (700 <= width && width <= 1000) {
		body.style.backgroundColor = colors[1];
	} else {
		body.style.backgroundColor = colors[2];
	}
}

window.addEventListener("resize", resize);
