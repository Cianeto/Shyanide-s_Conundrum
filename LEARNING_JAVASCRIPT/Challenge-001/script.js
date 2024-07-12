// Use const for constants, let for variables that change
const contEnabled = 'bi bi-check-circle';
const contDisabled = 'bi bi-x-square';
let continuity = true;
let verifiedOnce = false;
let oneClick = false;

// Cache DOM elements to avoid repeated lookups
const numbah = document.getElementById('number');
const contIcon = document.getElementById('continuousIcon');
const startAtBtn = document.getElementById('start_at');
const yapBtn = document.getElementById('yap');
const startingPointField = document.getElementById('startingPoint');
const continuousBtn = document.getElementById('continuous');

// Simplify event listeners using arrow functions
startingPointField.addEventListener('input', () => {
	onlyNumbers(startingPointField);
});

startAtBtn.addEventListener('click', () => {
	numbah.textContent = document.getElementById('startingPoint').value;
});

yapBtn.addEventListener('click', () => {
	if (continuity && !oneClick) {
		oneClick = true;
		Yapper.yap();
	} else if (!continuity) {
		Yapper.yappin();
	}
});

continuousBtn.addEventListener('click', () => {
	if (continuity) {
		oneClick = false;
	}
	continuousSwitch();
});

// Example of encapsulating functionality
class Yapper {
	static async yap() {
		if (continuity) {
			verifiedOnce = true;
			await this.sleep(500);
			this.yappin();
			this.yap();
		} else if (verifiedOnce) {
			verifiedOnce = false;
			numbah.textContent = parseInt(numbah.textContent, 10) - 2;
		}
	}

	static yappin() {
		const currentNumber = parseInt(numbah.textContent, 10);
		numbah.textContent = currentNumber % 2 === 0 ? currentNumber + 2 : currentNumber + 1;
	}

	static sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}

function continuousSwitch() {
	if (verifyIcon()) {
		continuity = false;
		contIcon.className = contDisabled;
	} else {
		continuity = true;
		contIcon.className = contEnabled;
	}
}

function verifyIcon() {
	if (contIcon.className == contEnabled) {
		return true;
	} else {
		return false;
	}
}

function onlyNumbers(input) {
	let value = input.value;
	let numbers = value.replace(/[^0-9]/g, '');
	input.value = numbers;
}
