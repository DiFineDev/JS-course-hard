let anyText = prompt('Введите строку');

hiddingString(anyText);

function hiddingString(text){
    if (typeof text !== 'string'){
        alert('Это не строка!');
    } else {
        if (text.trim().length <= 30) {
            console.log(text.trim());
        } else {
            console.log(text.trim().substr(0,30)+'...');       
        } 
    }
}