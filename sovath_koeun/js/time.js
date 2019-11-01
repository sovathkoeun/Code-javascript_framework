var timer = () => {
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minutes = days.getMinutes().toString();
    let second = days.getSeconds().toString();


    let day = days.getDay();
    let display = "";
    let month = days.getMonth();
    let displayMonth = "";
    let year = days.getFullYear();
    let displayYear ="";
    switch (day) {
        case 0:
            display = "Sunday"
            break;
        case 1:
            display = "Monday"
            break;
        case 2:
            display = "Tuseday"
            break;
        case 3:
            display = "Wednesday"
            break;
        case 4:
            display = "Thursday"
            break;
        case 5:
            display = "Friday"
            break;
        case 6:
            display = "Saturday"
            break;
    }

    switch (month) {
        case 0:
            displayMonth = "January"
            break;
        case 1:
            displayMonth = "Feabrury"
            break;
        case 2:
            displayMonth = "March"
            break;
        case 3:
            displayMonth = "April"
            break;
        case 4:
            displayMonth = "May"
            break;
        case 5:
            displayMonth = "June"
            break;
        case 6:
            displayMonth = "Yuly"
            break;
        case 7:
            displayMonth = "Agust"
            break;
        case 8:
            displayMonth = "September"
            break;
        case 9:
            displayMonth = "October"
            break;
        case 10:
            displayMonth = "November"
            break;
        case 11:
            displayMonth = "December"
            break;
    }

    let dater = document.getElementById("dater");
    dater.innerHTML = display  + " " + "11" + "  " + displayMonth + "  " + displayYear;

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (second.length < 2) {
        second = '0' + second;
    }

    let result = document.getElementById("timer");
    let message = document.getElementById('message');
    if (days.getHours() < 12) {
        result.innerHTML = hours + ":" + minutes + ":" + second + " " + "AM";
        message.innerHTML = "Good morning!";
    } else {
        result.innerHTML = hours + ":" + minutes + ":" + second + "PM";
        message.innerHTML = "Good afternoon!";
    }
    if (days.getHours() == 12) {
        result.innerHTML = days.getHours() + ":" + minutes + ":" + second + "PM";
        message.innerHTML = "Good afternoon!";

    }
  if (days.getHours() >= 16) {
    result.innerHTML = hours + ":" + minutes + ":" + second + "PM";
        message.innerHTML = "Good evening!";
  }
  if(days.getHours() >= 20) {
      result.innerHTML = hours + ":" + minutes + ":" + second + "PM";
      message.innerHTML = "Good nigth!";
  }
}
setInterval(timer, 1000);