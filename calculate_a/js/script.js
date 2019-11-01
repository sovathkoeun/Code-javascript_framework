function getNumber(number) {
    let getValue = document.getElementById("enter");
    switch(number) {
        case 1:
            getValue.value += "1";
            break;
        case 2:
            getValue.value += "2";
            break;
        case 3:
            getValue.value += "3";
            break;
        case 4:
            getValue.value += "4";
            break;
        case 5:
            getValue.value += "5";
            break;
        case 6:
            getValue.value += "6";
            break;
        case 7:
            getValue.value += "7";
            break;
        case 8:
            getValue.value += "8";
            break;
        case 9:
            getValue.value += "9";
            break;
        case 0:
            getValue.value += "0";
            break;
    }   
}
// clear screen
function clearScreen(){
    document.getElementById('enter').value ="";
    document.getElementById('answer').value ="";
}

// get operator

function getOperantors(operator){
    let getValue = document.getElementById("enter");
    switch(operator){
        case '+':
            getValue.value += "+";
            break;
        case '-':
            getValue.value += "-";
            break;
        case '*':
            getValue.value += "*";
            break;
        case '/':
            getValue.value += "/";
            break;
    }
}
// culate

function calculate() {
    let getValue = document.getElementById("enter");
    let answer = Math.floor(+eval(getValue.value));
    document.getElementById('answer').value =" = " + answer;
}