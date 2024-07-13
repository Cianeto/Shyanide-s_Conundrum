const arrField = document.getElementById('array');
const sortBtn = document.getElementById('sort');
const display = document.getElementById('display');

arrField.addEventListener('input', () => {
	theRegexer(arrField);
});

sortBtn.addEventListener('click', () => {
	sortArray();
});

function sortArray(arr) {
	display.textContent = 'something';
}

function theRegexer(input) {
	let str = input.value;
	str = allowedCharacters(str);
	str = ensureBrackets(str);
	//str = regex.replace(/ /, '');

	input.value = str;
}

// /(-?\d+(?:\.\d+)?)/g regex for capturing each value of an array

function ensureBrackets(str) {
	str = str.replace(/^(?!\[)(.*)/, '[$1');
	str = str.replace(/(.*)(?<!\])$/, '$1]');
	str = str.replace(/(\[.*)\[(.*)/, '$1$2');
	str = str.replace(/(.*)\](.*\])/, '$1$2');
	return str;
}

function allowedCharacters(str) {
	return str.replace(/[^\d., \-\[\]]/g, '');
}
