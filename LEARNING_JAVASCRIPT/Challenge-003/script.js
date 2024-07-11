const invertBtn = document.getElementById('invert');
const arrayInput = document.getElementById('array');
const display = document.getElementById('display');

invertBtn.addEventListener('click', () => {
	display.textContent = invertArray(arrayInput.value);
});

function invertArray(arr) {
	if (typeof arr === 'string') {
		return arr.split('').reverse().join('');
	} else if (Array.isArray(arr) && arr.length < 2) {
		return arr;
	} else if (Array.isArray(arr)) {
		let i, temp;
		let j = arr.length;

		for (i = 0; i < Math.floor(arr.length / 2); i++) {
			j--;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	} else return arr;
}
