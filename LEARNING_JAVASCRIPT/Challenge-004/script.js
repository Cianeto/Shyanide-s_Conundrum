const arrField = document.getElementById('array');
const sortBtn = document.getElementById('sort');
const display = document.getElementById('display');
const sortModeBtn = document.getElementById('sortMode');
let sortMode = 'Ascending';

arrField.addEventListener('input', () => {
	Regexer.execRegexer(arrField);
});

sortBtn.addEventListener('click', () => {
	ArraySorter.sortArray(arrField.value);
});

sortModeBtn.addEventListener('click', changeSortMode);

class ArraySorter {
	static sortArray(str) {
		str = str.replace(/[\[\]]/g, '');
		let arr = str.match(/(-?\d+(?:\.\d+)?)/g).map(Number);
		let i, j;
		for (i = 0; i < arr.length - 1; i++) {
			for (j = arr.length - 1; j > i; j--) {
				arr = sortMode === 'Ascending' ? ascending(arr, i, j) : descending(arr, i, j);
			}
		}

		display.textContent = '[' + arr.join(', ') + ']';
	}

	static changeSortMode() {
		sortMode = sortMode === 'Ascending' ? 'Descending' : 'Ascending';
		sortModeBtn.textContent = sortMode;
	}

	static ascending(arr, i, j) {
		let temp;
		if (arr[i] > arr[j]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}

	static descending(arr, i, j) {
		let temp;
		if (arr[i] < arr[j]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}
}

class Regexer {
	static execRegexer(input) {
		let str = input.value;
		str = allowedCharacters(str);
		str = ensureBrackets(str);
		str = separateValues(str);
		input.value = str;
	}

	static allowedCharacters(str) {
		return str.replace(/[^\d., \-\[\]]/g, '');
	}

	static ensureBrackets(str) {
		str = str.replace(/^(?!\[)(.*)/, '[$1');
		str = str.replace(/(.*)(?<!\])$/, '$1]');
		str = str.replace(/(\[.*)\[(.*)/, '$1$2');
		str = str.replace(/(.*)\](.*\])/, '$1$2');
		return str;
	}

	static separateValues(str) {
		str = str.replace(/(?<!,)( )/g, '');
		str = str.replace(/(?<!, )(-)/g, '');
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
}
