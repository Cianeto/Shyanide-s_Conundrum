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
  let value = input.value;
  let numbers = value.replace(/[^0-9]/g, '');
  input.value = numbers;
}
