let Data = new Date(),
    hour = Data.getHours(),
    minute = Data.getMinutes(),
    second = Data.getSeconds(),
    year = Data.getFullYear(),
    month = Data.getMonth(),
    date = Data.getDate(),
    day = Data.getDay(),
    fMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    fweek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    element = document.querySelector('#tag');

function getNewData() {
    Data = new Date(),
    hour = Data.getHours(),
    minute = Data.getMinutes(),
    second = Data.getSeconds(),
    year = Data.getFullYear(),
    month = Data.getMonth(),
    date = Data.getDate(),
    day = Data.getDay();
}

function checkHour (hour) {
    if (hour === 1 || hour === 21) {
        return hour + (' час ');
    } else if (hour < 5 || hour > 21) {
        return hour + (' часа ');
    } else {
        return hour + (' часов ');
    }
}

function checkMinute (minute) {
    if (minute % 10 === 1 && minute != 11) {
        return minute + ' минута ';
    } else if (minute % 10 != 0 && minute % 10 < 5 && (minute < 10 ||  minute > 20)) {
        return minute + ' минуты ';
    } else {
        return minute + ' минут ';
    }
}

function checkSecond (second) {
    if (second % 10 === 1 && second != 11) {
        return second + ' секунда ';
    } else if (second % 10 != 0 && second % 10 < 5 && (second < 10 ||  second > 20)) {
        return second + ' секунды ';
    } else {
        return second + ' секунд ';
    }
}

function checkNumber (number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}   

function dateShow () {
    getNewData(); 
    element.innerHTML = 
    'Сегодня ' + fweek[day] + ', ' + date + ' ' + fMonth[month] + ' ' + year + ' года, ' + checkHour(hour) + checkMinute(minute) + checkSecond(second) + '<br>' + checkNumber(date) + '.' + checkNumber(month) + '.' + year + ' - ' + checkNumber(hour) + ':' + checkNumber(minute) + ':' + checkNumber(second);
}



setInterval(dateShow, 1000);
