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

function getNumbers(number) {
    let getValue = document.getElementById("output-value");
    switch(number) {
        case 1:
            getValue.innerHTML += "1";
            break;
        case 2:
            getValue.innerHTML += "2";
            break;
        case 3:
            getValue.innerHTML += "3";
            break;
        case 4:
            getValue.innerHTML += "4";
            break;
        case 5:
            getValue.innerHTML += "5";
            break;
        case 6:
            getValue.innerHTML += "6";
            break;
        case 7:
            getValue.innerHTML += "7";
            break;
        case 8:
            getValue.innerHTML += "8";
            break;
        case 9:
            getValue.innerHTML += "9";
            break;
        case 0:
            getValue.innerHTML += "0";
            break;
    }   
}
// clear screen
function getClear(){
    let clear = document.getElementById('output-value').innerHTML ="";
}

// get operator

function getOperantors(operator){
    let getValue = document.getElementById("output-value");
    switch(operator){
        case '+':
            getValue.innerHTML += "+";
            break;
        case '-':
            getValue.innerHTML += "-";
            break;
        case '*':
            getValue.innerHTML += "*";
            break;
        case '/':
            getValue.innerHTML += "/";
            break;
        case '%':
            getValue.innerHTML += "%";
            break;
    }
}
// culate

function num() {
    let num = document.getElementById("output-value");
    let sum = Math.abs(eval(num.innerHTML));
    document.getElementById('output-value').innerHTML = + sum;
}

// backspace
function backspace() {
    let back = document.getElementById("output-value");
    let space = back.innerHTML;
    if (space.length > 0 ) {
        space = space.substring(0, space.length - 1);
        back.innerHTML = space;
    }
}




























































































