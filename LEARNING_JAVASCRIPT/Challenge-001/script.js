const contEnabled = 'bi bi-check-circle';
const contDisabled = 'bi bi-x-square';
let numbah = document.getElementById('number');
let contIcon = document.getElementById('continuousIcon');
let continuity = true;
let verifiedOnce = false;
let oneClick = false;

document.getElementById('start_at').addEventListener('click', function(){
    numbah.textContent = document.getElementById('startingPoint').value;
})

document.getElementById('yap').addEventListener('click', function(){
    if(continuity && !oneClick){
        oneClick = true;
        yapper();
    }else if(!continuity){
        yappin();
    }
    
});
document.getElementById('continuous').addEventListener('click', function(){
    if(continuity){oneClick = false;}
    continuousSwitch();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Restricts input of something thats not in the range of 0-9
function onlyNumbers(input){
    let value = input.value;
    let numbers = value.replace(/[^0-9]/g, "");
    input.value = numbers;
}
async function yapper(){
    if(continuity){
        verifiedOnce = true;
        await sleep(500);
        yappin();
        yapper();
    }else if(verifiedOnce){
        verifiedOnce = false;
        numbah.textContent = parseInt(numbah.innerText) - 2;
    }
}
function yappin(){
    if(parseInt(numbah.innerText)%2 == 0){
        numbah.textContent = parseInt(numbah.innerText) + 2;
    }else{
        numbah.textContent = parseInt(numbah.innerText) + 1;
    }
}
function verifyIcon(){
    if(contIcon.className == contEnabled){
        return true;
    }else{
        return false;
    }
}
function continuousSwitch(){
    if(verifyIcon()){
        continuity = false;
        contIcon.className = contDisabled;
    }else{
        continuity = true;
        contIcon.className = contEnabled;
    }
}
