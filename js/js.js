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


//team________________________________________________________

const trineOne = document.querySelector("#trine-1");
const trineTwo = document.querySelector("#trine-2");
const trineThree = document.querySelector("#trine-3");
const trineFour = document.querySelector("#trine-4");

const trineOneR = document.querySelector('#trine-1-1');
const trineTwoR = document.querySelector('#trine-2-1');
const trineThreeR = document.querySelector('#trine-3-1');
const trineFourR = document.querySelector('#trine-4-1');

const teamTextOne = document.querySelector("#team-text-1");
const teamTextTwo = document.querySelector("#team-text-2");
const teamTextThree = document.querySelector("#team-text-3");
const teamTextFour = document.querySelector("#team-text-4");

const teamIconOne = document.querySelector("#team__icon-1");
const teamIconTwo = document.querySelector("#team__icon-2");
const teamIconThree = document.querySelector("#team__icon-3");
const teamIconFour = document.querySelector("#team__icon-4");

trineOne.addEventListener('click', function(){
    teamTextOne.classList.toggle('team__item-text--display');
    trineOneR.classList.toggle('team__item-trine--rotate');
    teamIconOne.classList.toggle('team__icon--tablets');
})

trineTwo.addEventListener('click', function(){
    teamTextTwo.classList.toggle('team__item-text--display');
    trineTwoR.classList.toggle('team__item-trine--rotate');
    teamIconTwo.classList.toggle('team__icon--tablets');
})

trineThree.addEventListener('click', function(){
    teamTextThree.classList.toggle('team__item-text--display');
    trineThreeR.classList.toggle('team__item-trine--rotate');
    teamIconThree.classList.toggle('team__icon--tablets');
})

trineFour.addEventListener('click', function(){
    teamTextFour.classList.toggle('team__item-text--display');
    trineFourR.classList.toggle('team__item-trine--rotate');
    teamIconFour.classList.toggle('team__icon--tablets');
})


//slider__________________________________________________


const slideOne = document.querySelector('.slider__item--1');
const slideTwo = document.querySelector('.slider__item--2');

const sliderBtnL = document.querySelector('.slider__btn--left');
const sliderBtnR = document.querySelector('.slider__btn--right');

sliderBtnL.addEventListener('click', function(){
    slideOne.classList.toggle('slider__item-swap-1');
    slideTwo.classList.toggle('slider__item-swap-2');
})

sliderBtnR.addEventListener('click', function(){
    slideOne.classList.toggle('slider__item-swap-1');
    slideTwo.classList.toggle('slider__item-swap-2');
})


//colors slider______________________________________________________


const colorSlideOne = document.querySelector('.colors__item-title--silver');
const colorSlideTwo = document.querySelector('.colors__item-title--black');
const colorSlideThree = document.querySelector('.colors__item-title--red');

const colorTextOne = document.querySelector('.colors__item-text--1');
const colorTextTwo = document.querySelector('.colors__item-text--2');
const colorTextThree = document.querySelector('.colors__item-text--3');

const colorTitleOne = document.querySelector('.colors__title--1');
const colorTitleTwo = document.querySelector('.colors__title--2');

colorSlideOne.addEventListener('click', function(){
    colorTextOne.classList.toggle('colors__item-text--display');
    colorTitleOne.classList.toggle('colors__title--1--display');
    colorTitleTwo.classList.toggle('colors__title--2--display');
})



