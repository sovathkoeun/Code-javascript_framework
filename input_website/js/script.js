var timer = () =>{
    let days = new Date();
    let hours = days.getHours() % 12; // method short
    // let hours = (days.getHours() % 12).toString();
    let minute = days.getMinutes();  //.toString();
    let second = days.getSeconds();  //.toString();

//     if(hours.length < 2){
//         hours = '0' + hours;
//     }
//     if(minute.length < 2) {
//         minute = '0' + minute;
//     }
//     if(second.length < 2) {
//         second  = '0' + seconds;
//     }
//     let result = document.getElementById("timer");
//     result.innerHTML = hours + " : " + minute + " : " + second + "  " + "AM";
//     document.body.style.background = "#ff33aa" + hours + minute + second;
// }
// setInterval(timer, 1000);

/////////////
// method short 
///////////////////
if (hours < 10){
    hours = '0' + hours;
}
if (minute < 10) {
    minute = '0' + minute;
}
if (second < 10) {
    second = '0' + second;
}
let result = document.querySelector("#timer");
result.innerHTML = hours + " : " + minute + " : " + second + "  " + "AM";
    if(minute == 11){
        Window.open('https://drive.google.com/drive/my-drive');
    } 
}
setInterval(timer, 1000);