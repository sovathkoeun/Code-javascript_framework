var timer = () => {
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minutes = days.getMinutes().toString();
    let second = days.getSeconds().toString();

    
    let day = days.getDay();
    let date = days.getDate();
    let year = days.getFullYear();
    let month = days.getMonth();
    let displayMonth = "";
    //day
    switch(day){
        case 0:
            displays ="Sunday"
            break;
        case 1:
            displays ="Monday"
            break;
        case 2:
            displays ="Wenesday"
            break;
        case 3:
            displays ="Tursday"
            break;
        case 4:
            displays ="Thursday"
            break;
        case 5:
            displays ="Friday"
            break;
        case 6:
            displays ="Satusday"
            break;
    }
    // Month
    switch(month){
        case 0:
            display ="Junuary"
            break;
        case 1:
            display ="Febury"
            break;
        case 2:
            display ="March"
            break;
        case 3:
            display ="April"
            break;
        case 4:
            display ="May"
            break;
        case 5:
            display ="June"
            break;
        case 6:
            display ="July"
            break;
        case 7:
            display ="Angust"
            break;
        case 8:
            display ="September"
            break;
        case 9:
            display ="October"
            break;
        case 10:
            display ="November"
            break;
        case 11:
            display ="December"
            break;
    }
    let top =" ";
    switch(day){
        case 1:
        case 21:
        case 31:
            top = "st";
            break;
        case 2:
        case 22:
            top = "nd";
            break;
        case 3:
        case 23:
            top = "rd";
            break;
         default :
            top = "th";
            break;

    }
    //document.getElementById("day").innerHTML = displays;
    
    let dater = document.getElementById("dater");
    dater.innerHTML = displays+ " " + date + "<sup>"+top+"</sup>"  + "  " + displayMonth + " " + year;
    if(hours.length < 2){
        hours = '0' + hours;
    }
    if(minutes.length < 2) {
        minute = '0' + minutes;
    }
    if(second.length < 2) {
        second = '0' + second;
    }
    
    let result = document.getElementById("timer");
    let message = document.getElementById('message');
    if(days.getHours() < 12){
        result.innerHTML = hours + " : " + minutes +  " : " + second + " " + "AM";
        message.innerHTML = "Good Morning!";
    }else{
        result.innerHTML = hours + " : " + minutes + " : " + second + " " + "AM";
        message.innerHTML = "Good afternoon!";
    }
    if(days.getHours() == 12){
        result.innerHTML = days.getHours +  " : " + minutes +  " : " + second + " " + "PM";
        message.innerHTML = "Good afternoon!";
    }
    if(days.getHours() >= 16){
        result.innerHTML = hours +  " : " + minutes +  " : " + second + " " + "PM";
        message.innerHTML = "Good Evening!";
    }
    if(days.getHours() >= 20){
        result.innerHTML = hours +  " : " + minutes +  " : " + second + " " + "PM";
        message.innerHTML = "Good Nigth!";
    }
}
setInterval(timer, 1000);