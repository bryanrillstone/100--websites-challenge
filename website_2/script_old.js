var color1 = document.querySelector(".color1");
var button = document.querySelector("button");
var colorChange = document.getElementsByClassName("color_change");
// var leftEye = document.querySelector(".left_eye");
// var rightEye = document.querySelector(".right_eye");
// var head = document.querySelector(".head");
// var leftArm = document.querySelector(".left_arm");
// var rightArm = document.querySelector(".right_arm");
// var torso = document.querySelector(".torso");
// var leftleg = document.querySelector(".left_leg");
// var rightleg = document.querySelector(".right_leg");
// var color_change = document.querySelectorAll(".color_change");

// var parts = document.querySelectorAll(".cc");

// Function to generate a random color
function randomColorAssigner() {
    var rgb1 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    color1.value = rgb1;
}


// function setColor() {
//     parts.style.backgroundColor = color1.value;
// }

// function setColor() {
//     leftEye.style.backgroundColor = color1.value;
// }

// function setColor(event) {
//     if (event.target.className === "left_eye") {
//         event.target.style.backgroundColor = color1.value;
//     }
// }

// function setColor(event) {
//         event.target.style.backgroundColor = color1.value;
// }

// function setColor(event) {
//     if (event.target.className === "color_change") {
//         event.target.style.backgroundColor = color1.value;
//     }
// }

// color_change.forEach(function (event) {
//     var c_c = document.querySelectorAll(".color_change");
//     c_c.onclick = setColor;
// })

// li.forEach(function (li) {
//     var deleteBtn = document.createElement("button");
//     deleteBtn.appendChild(document.createTextNode("Done"));
//     li.appendChild(deleteBtn);
// 	deleteBtn.onclick = deleteItem;
// })

// function setColor(event) {
//     event.target.style.backgroundColor = color1.value;
// }

// colorChange.forEach(function(cc) {
//     onclick = setColor;
// })

// li.forEach(function (li) {
//     var deleteBtn = document.createElement("button");
//     deleteBtn.appendChild(document.createTextNode("Done"));
//     li.appendChild(deleteBtn);
// 	deleteBtn.onclick = deleteItem;
// })

button.addEventListener("click", randomColorAssigner);
// parts.addEventListener("click", setColor);
// leftEye.addEventListener("click", setColor);
// rightEye.addEventListener("click", setColor);
// colorChange.addEventListener("click", setColor);

$(document).ready(function () {

	$(".color_change").on("click", function () {

		$(this).css("background-color", color1.value);
	});

});