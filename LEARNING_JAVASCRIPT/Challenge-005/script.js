const input = document.getElementById('field');

input.addEventListener('input', () => {
	VowelPicker.exec(input.value);
});

class VowelPicker {
	static exec(input) {
		this.showVowels(input);
		this.vowelCounter(input);
		this.characterCounter(input);
	}

	static showVowels(input) {
		const display = document.getElementById('display-1');
		input = input.replace(/[^aeiou]/gi, '');
		display.textContent = input;
	}

	static vowelCounter(input) {
		const vowelDisplay = document.getElementById('display-2');
		const count = input.replace(/[^aeiou]/gi, '').length;
		vowelDisplay.textContent = 'Vowels: ' + count;
	}

	static characterCounter(input) {
		const charDisplay = document.getElementById('display-3');
		charDisplay.textContent = 'Characters: ' + input.length;
	}
}
