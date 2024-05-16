//hamburger
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

//reviews
const avatarOne = document.querySelector('#avatar-1');
const avatarTwo = document.querySelector('#avatar-2');
const avatarThree = document.querySelector('#avatar-3');

const reviewOne = document.querySelector('#review-1');
const reviewTwo = document.querySelector('#review-2');
const reviewThree = document.querySelector('#review-3');


avatarOne.addEventListener('click', function(){
    reviewOne.style.display = "flex";
    reviewTwo.style.display = "none";
    reviewThree.style.display = "none";

    avatarOne.classList.add('interactive-avatar--active');
    avatarTwo.classList.remove('interactive-avatar--active');
    avatarThree.classList.remove('interactive-avatar--active');
})

avatarTwo.addEventListener('click', function(){
    reviewOne.style.display = "none";
    reviewTwo.style.display = "flex";
    reviewThree.style.display = "none";

    avatarOne.classList.remove('interactive-avatar--active');
    avatarTwo.classList.add('interactive-avatar--active');
    avatarThree.classList.remove('interactive-avatar--active');
})

avatarThree.addEventListener('click', function(){
    reviewOne.style.display = "none";
    reviewTwo.style.display = "none";
    reviewThree.style.display = "flex";

    avatarOne.classList.remove('interactive-avatar--active');
    avatarTwo.classList.remove('interactive-avatar--active');
    avatarThree.classList.add('interactive-avatar--active');
})

