let anyText = prompt('Введите строку');

hiddingString(anyText);

function hiddingString(text){
    if (typeof text !== 'string'){
        alert('Это не строка!');
    } else {
        console.log(text.trim().substr(0,30)+'...');
    }
}