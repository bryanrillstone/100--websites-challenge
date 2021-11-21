var color1 = document.querySelector(".color1");
var button = document.querySelector("button");
var colorChange = document.getElementsByClassName("color_change");

// Function to generate a random color
function randomColorGenerator() {
    var rgb1 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    color1.value = rgb1;
}

// Function to set the target element's background color
function setColor(event) {
	event.target.style.backgroundColor = color1.value;
}

for(var i = 0; i < colorChange.length; i++){
	colorChange[i].addEventListener("click", setColor);
}

button.addEventListener("click", randomColorGenerator);