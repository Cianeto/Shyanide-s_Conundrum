const convertButton = document.getElementById('convert');
const lengthInputField = document.getElementById('lengthInput');
const lengthDisplayText = document.getElementById('lengthDisplay');
const conversionModeButton = document.getElementById('conversionMode');

let conversionMode = 'kmToMile';

lengthInputField.addEventListener('input', () => {
	onlyNumbers(lengthInputField);
});

convertButton.addEventListener('click', convertLength);

conversionModeButton.addEventListener('click', changeConversionMode);

function convertLength() {
	const convertedLength = calculateConvertedLength(lengthInputField.value, conversionMode);
	displayConvertedLength(convertedLength);
	console.log('Conversion successful');
}

function calculateConvertedLength(length, mode) {
	const conversionFactors = {
		kmToMile: 0.621371,
		mileToKm: 1.609344
	};
	const factor = conversionFactors[mode];
	return '≈ ' + (length * factor).toFixed(5);
}

function changeConversionMode() {
	if (conversionMode === 'kmToMile') {
		conversionModeButton.textContent = 'Mile to Kilometer';
		conversionMode = 'mileToKm';
	} else {
		conversionModeButton.textContent = 'Kilometer to Mile';
		conversionMode = 'kmToMile';
	}
}

function displayConvertedLength(length) {
	lengthDisplayText.textContent = length;
}

function onlyNumbers(input) {
	input.value = input.value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
}
