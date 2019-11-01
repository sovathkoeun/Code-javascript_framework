var timer = () =>{
    let days = new Date();
    let hours = (days.getHours() % 12 ).toString();
    let minutes = days.getMinutes().toString();
    let second = days.getSeconds().toString();


    let day = days.getDay();
    let display ="";
    let month = days.getMonth();
    let displayMonth ="";
    let minlli = days.getMilliseconds();
    let displaySeconds ="";
        switch(day){
            case 0:
                display ="Sunday"
                break;
            case 1:
                display ="Monday"
                break;
            case 2:
                display ="Tusday"
                break;
            case 3:
                display ="Wenesday"
                break;
            case 4:
                display ="Thursday"
                break;
            case 5:
                display ="Friday"
                break;
            case 6:
                display ="Satursday"
                break;
        }
        switch(month){
            case 0:
                displayMonth ="Janury"
                break;
            case 1:
                displayMonth ="Febury"
                break;
            case 2:
                displayMonth ="March"
                break;
            case 3:
                displayMonth ="May"
                break;
            case 4:
                displayMonth ="April"
            case 5:
                displayMonth ="June"
                break;
                break;
            case 6:
                displayMonth ="Junly"
                break;
            case 7:
                displayMonth ="Angust"
                break;
            case 8:
                displayMonth ="September"
                break;
            case 9:
                displayMonth ="October"
                break;
            case 10:
                displayMonth ="November"
                break;
            case 11:
                displayMonth ="December"
                break;
        }
    let dater = document.getElementById("dater");
    dater.innerHTML = display + "/" + displayMonth;
     if (hours.length < 2){
         hours = '0' + hours;
     }
     if (minutes.length < 2) {
         minutes = '0' + minutes;
     }
     if(second.length < 2) {
         second = '0' + second;
     }
     let result = document.getElementById("timer");
     let message = document.getElementById("message");
        if (days.getHours() < 12){
            result.innerHTML = hours + ":" + minutes + ":" + second +  " " + minlli + " "  + "AM";
            message.innerHTML = "Good Mornning!";
        }else{
            result.innerHTML = hours + ":" + minutes + ":" + second +  " " + minlli  + " "+ "PM";
            message.innerHTML = "Good afternoon!";
        }
        if(days.getHours() == 12){
            result.innerHTML = hours + ":" + minutes + ":" + second +  " " + minlli  + " " + "PM";
            message.innerHTML ="Good afternoon!";
        }
        if (days.getHours() >= 16){
            result.innerHTML = hours + ":" + minutes + ":" + second + " " + minlli  + " " + "PM";
            message.innerHTML = "Good Everning!";
        }
        if (days.getHours() >= 20){
            result.innerHTML = hours + ":" + minutes + ":" + second +  " " + minlli  + " " + "PM";
        }
}
setInterval(timer, 90);
// play color
var timer = () =>{
    let teal = document.getElementById("timer");
    if (teal.style.colors == "red"){
        teal.style.colors = "green";
    }else{
        teal.style.colors = "red";
    }
}
setInterval(red, 90);

var color = () =>{
    let green = querySelector('h1');
        if(green.style.color == "purple"){
            green.style.color = "blue";
    }else{
        green.style.color = "purple";
    }
}
setInterval(colors, 90);