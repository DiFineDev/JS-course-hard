let week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();
let day = date.getDay();

let element = document.querySelector('#tag');


for (let i = 0; i < week.length; i++){

    if (i === day) {
        element.innerHTML += '<b>' + week[i] + '<b>' +'<br>'; 
    } else if (i === 0 || i === 6) {
        element.innerHTML += '<i>' + week[i] + '<i>' +'<br>'; 
    } else {
        
        element.innerHTML += week[i] + '<br>';
    }
}


