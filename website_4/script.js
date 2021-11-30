const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const hideBtn = document.getElementById("hideBtn");
const person = document.getElementById("person");
const getBtn = document.getElementById("getBtn");
const clearBtn = document.getElementById("clearBtn");

const inputLength = () => {
	return input.value.length;
}


const createListElement = () => {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}


const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}


const addListAfterKeypress = () => {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Code for toggling hideUnhide class that will hide/unhide participant list when button is clicked.

const hidden = () => ul.classList.toggle("hideUnhide");

hideBtn.addEventListener("click", hidden);

// Code to select person from list of participants

const selectPerson = () => {
	participants = document.querySelectorAll("li");
	randomSelect = participants[Math.floor(Math.random()*participants.length)]
	person.innerHTML = randomSelect.innerText;
	person.classList.toggle("person");
}

getBtn.addEventListener("click", selectPerson);

// Code to clear selected person and remove them from the list of participants

const clearPerson = () => {
	randomSelect.remove();
	person.innerHTML = "?????";
}

clearBtn.addEventListener("click", clearPerson);