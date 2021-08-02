let lang = prompt('"en" or "ru"');
let namePerson = prompt('Введите имя:');

let ArrWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let ArrWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let ArrWeeks = {
    ru: ArrWeekRu,
    en: ArrWeekEn 
};

if (lang === 'en') {
    console.log(ArrWeekEn);
} else if (lang === 'ru') {
    console.log(ArrWeekRu);
} else {
    console.log('Что то пошло не так!');
}

switch (lang) {
    case 'ru':
        console.log(ArrWeekRu);
        break;
    case 'en':
        console.log(ArrWeekEn);
        break;
    default:
        console.log('Что то пошло не так!');
}

console.log(ArrWeeks[lang]);

console.log((namePerson === 'Артем') ? "Директор":
            (namePerson === 'Максим') ? "Преподаватель":
            "Студент");

