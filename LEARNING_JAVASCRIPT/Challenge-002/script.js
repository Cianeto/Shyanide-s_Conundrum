// Assigning elements to variables (
var convertButton = document.getElementById('convert');
var lengthInputField = document.getElementById('lengthInput');
var lengthDisplayText = document.getElementById('lengthDisplay');
var conversionModeButton = document.getElementById('conversionMode');
// )

// Declaring variables (
var conversionMode = 'kmToMile';
// )

// Adding events(
convertButton.addEventListener('click', function(){
    showconvertButtonedLength(lengthconvertButtoner(lengthInputField, conversionMode));
    console.log("it worked")
});
conversionModeButton.addEventListener('click', function(){
    changeConversionMode();
});
// )

// Logic Functions(
function lengthconvertButtoner(length, conversionMode){
    if(conversionMode == 'kmToMile'){
        return length.value * 0.621371;
    }else if(conversionMode == 'mileToKm'){
        return length.value * 1.609344;
    }
}
function changeConversionMode(){
    if(conversionMode == 'kmToMile'){
        conversionModeButton.textContent = 'Mile to Kilometer'
        conversionMode = 'mileToKm';
    }else{
        conversionModeButton.textContent = 'Kilometer to Mile'
        conversionMode = 'kmToMile';
    }
}
// )

// View Functions(
function showconvertButtonedLength(length){
    lengthDisplayText.textContent = length;
}
function onlyNumbers(input){
    let string = input.value;
    let number = string.replace(/[^0-9.]/g, "");

    number = number.replace(/(\.)(?=.*\.)/g, "");

    input.value = number;
}
// )
