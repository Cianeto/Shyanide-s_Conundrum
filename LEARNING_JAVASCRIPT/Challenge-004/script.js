const arrField = document.getElementById('array');
const sortBtn = document.getElementById('sort');
const display = document.getElementById('display');

arrField.addEventListener('input', () => {
	onlyNumbers(arrField);
});

sortBtn.addEventListener('click', () => {
	sortArray();
});

function sortArray(arr) {}

function onlyNumbers(input) {
	const result = input.value.replace(/([^,]*)(,|$)/g, (match, p1, p2) => {
		return p1.replace(/\./g, '#').replace('#', '.').replace(/#/g, '') + p2;
	});
	input.value = result;
	// input.value = input.value.replace(/[^0-9\.,\{\} ]/g, '').replace(/(\..*)\./g, '$1');
}
