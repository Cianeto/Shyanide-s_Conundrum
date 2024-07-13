const arrField = document.getElementById('array');
const sortBtn = document.getElementById('sort');
const display = document.getElementById('display');

arrField.addEventListener('input', () => {
	theRegexer(arrField);
});

sortBtn.addEventListener('click', () => {
	sortArray(arrField.value);
});

function sortArray(str) {
	str = str.replace(/[\[\]]/g, '');
	let arr = str.match(/(-?\d+(?:\.\d+)?)/g).map(Number);
	let i, j, temp;
	for (i = 0; i < arr.length - 1; i++) {
		for (j = arr.length - 1; j > i; j--) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	display.textContent = '[' + arr.join(', ') + ']';
}

function theRegexer(input) {
	let str = input.value;
	str = allowedCharacters(str);
	str = ensureBrackets(str);
	str = separateValues(str);
	input.value = str;
}

function allowedCharacters(str) {
	return str.replace(/[^\d., \-\[\]]/g, '');
}

function ensureBrackets(str) {
	str = str.replace(/^(?!\[)(.*)/, '[$1');
	str = str.replace(/(.*)(?<!\])$/, '$1]');
	str = str.replace(/(\[.*)\[(.*)/, '$1$2');
	str = str.replace(/(.*)\](.*\])/, '$1$2');
	return str;
}

function separateValues(str) {
	str = str.replace(/(?<!,)( )/g, '');
	str = str.replace(/(.*),(?! )(.*)/g, '$1, $2');
	str = str
		.split(', ')
		.map((segment) => {
			segment = segment.replace(/(-.*)-/g, '$1');
			segment = segment.replace(/(\..*)\./g, '$1');
			return segment;
		})
		.join(', ');
	return str;
}
