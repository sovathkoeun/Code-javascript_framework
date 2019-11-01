var sounds = document.getElementById("output-text");
var btn = document.querySelector("#microphone");
btn.addEventListener('click', userSpeak);
function userSpeak() {
    if ('webkitSpeechRecognition' in window) {
        let speak = new webkitSpeechRecognition();
        speak.continuous = true;
        speak.interimResults = true;
        speak.lang = "en-IN";
        speak.start();

        let finalSpeak = '';
        speak.onresult = function (event) {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalSpeak += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }
            sounds.innerHTML = finalSpeak + interimTranscript;
        };
    }else{
        sounds.innerHTML = "Browser not supporot";
    }
}

// calculate 

function getNumber(number) {
    let getValue = document.getElementById("number");
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































































































