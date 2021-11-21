var color = document.getElementsByClassName("color");
var parts = document.getElementsByClassName("part");

var paint = "#747270";

function selectPaint(event) {
    paint = event.target.style.backgroundColor;
}

for(var i = 0; i < color.length; i++){
	color[i].addEventListener("click", selectPaint);
}

function paintPart(event) {
	event.target.style.backgroundColor = paint;
}

for(var i = 0; i < parts.length; i++){
	parts[i].addEventListener("click", paintPart);
}