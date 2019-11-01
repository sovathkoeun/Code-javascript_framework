var timer = () =>{
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minute = days.getMinutes().toString();
    let second = days.getSeconds().toString();

    if(hours.length < 2){
        hours ='0' + hours;
    }
    if (minute.length < 2){
        minute ='0' + minute;
    }
    if(second.length < 2){
        second ='0' + second;
    }
    let result = document.getElementById("timer");
    if(days.getHours() < 12){
        result.innerHTML = hours + ":" + minute + ":" + second;
        document.body.style.background = '#' + hours + minute + second;
    }
}
setInterval(timer, 1000);