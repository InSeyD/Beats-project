const hamburger = document.querySelector('#hamburger');
const cross = document.querySelector('#cross');
const hambMenu = document.querySelector('#hambmenu');
//hamburger--menu--display

hamburger.addEventListener('click', function(){
    document.getElementsByClassName('hamburger--menu')[0].style.display = "block";;
})

cross.addEventListener('click', function(){
    document.getElementsByClassName('hamburger--menu')[0].style.display = "none";;
})

