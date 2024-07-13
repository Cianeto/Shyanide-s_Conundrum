const arrField = document.getElementById('array');
const sortBtn = document.getElementById('sort');
const display = document.getElementById('display');

arrField.addEventListener('input', () => {
	onlyNumbers(arrField);
});

sortBtn.addEventListener('click', () => {
	sortArray();
});

function sortArray(arr) {

	display.textContent = 'something';
}

function onlyNumbers(input) {
	const regex = input.value.replace(/[^\d.,[\]]/g, '');


	input.value = regex;
}
// here i want to 
