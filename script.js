let lang = prompt('"en" or "ru"');
let namePerson = prompt('Введите имя:');

let arrWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let arrWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let arrWeeks = {
    ru: arrWeekRu,
    en: arrWeekEn 
};

if (lang === 'en') {
    console.log(arrWeekEn);
} else if (lang === 'ru') {
    console.log(arrWeekRu);
} else {
    console.log('Что то пошло не так!');
}

switch (lang) {
    case 'ru':
        console.log(arrWeekRu);
        break;
    case 'en':
        console.log(arrWeekEn);
        break;
    default:
        console.log('Что то пошло не так!');
}

console.log(arrWeeks[lang]);

console.log((namePerson === 'Артем') ? "Директор":
            (namePerson === 'Максим') ? "Преподаватель":
            "Студент");

