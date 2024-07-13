const input = document.getElementById('field');
const display = document.getElementById('display');

input.addEventListener('input', ()=>{
  showVowels(input.value);
})

function showVowels(input){
  input = input.replace(/[^aeiou]/gi, '');
  display.textContent = input;
}
