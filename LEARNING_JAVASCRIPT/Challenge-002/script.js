// Assigning elements to variables (
var conversionButton = document.getElementById(conversionButton);
var lengthInput = parseFloat(document.getElementById(lengthInput).value);
var lengthDisplay = document.getElementById(lengthDisplay);
// )

// Declaring variables (
var conversionMode = 'km';    
var length;
// )

// Adding events(
conversionButton.addEventListener('click', function(){
    showConvertedLength(lengthConverter(lengthInput, conversionMode));
});
// )

// Logic Functions(
function lengthConverter(length, conversionMode){
    if(conversionMode == 'kmToMile'){
        return length * 0.621371;
    }else if(conversionMode == 'mileToKm'){
        return length * 1.609344;
    }
}
function changeConversionMode(){
    if(conversionMode == 'kmToMile'){
        conversionMode = 'mileToKm';
    }else{
        conversionMode = 'kmToMile';
    }
}
// )

// View Functions(
function showConvertedLength(length){
    lengthDisplay.textContent = length;
}
function onlyNumbers(input){
    let value = input.value;
    let numbers = value.replace(/[^0-9]/g, "");
    input.value = numbers;
}
// )
