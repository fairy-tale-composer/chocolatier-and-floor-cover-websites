var toEnterBtn = document.querySelector('#toggle-to-enter-btn'),
	toRegistrationBtn = document.querySelector('#toggle-to-register-btn'),
	registrationSection = document.querySelector('#registration-section'),
	enterSection = document.querySelector('#enter-section');

toEnterBtn.onclick = function () {
	registrationSection.style.display = "none";
	enterSection.style.display = "block";
}

toRegistrationBtn.onclick = function () {
	enterSection.style.display = "none";
	registrationSection.style.display = "block";
}
	