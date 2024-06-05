/* в этот файл добавляет скрипты*/

/* мобильное меню*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
}
);

/* слайдер */
const slider = document.querySelector('.slider');
const curtain = slider.querySelector('.slider__button');
const sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting(event) {
  curtainPlaceStart = +(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain(event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting() {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
