let buttonOfChange = document.querySelector('#change'),
    wrap = document.querySelector('.wrapper'),
    textColour = document.querySelector('#color'),
    letters = "0123456789ABCDEF",
    color = '#';

    
function changeColour(){
        
    for (var i = 0; i < 6; i++){
        
        color += letters[(Math.floor(Math.random() * 16))];
    }

    console.log(color);
        
    wrap.style.backgroundColor = color;
    textColour.innerHTML = color;
    color = '#'; 
}

buttonOfChange.addEventListener('click', changeColour);

