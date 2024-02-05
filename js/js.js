'use strict'

//Бургер-меню
   const menuIcon = document.querySelector('.menu__icon');
   const headerMenu = document.querySelector('.header__menu');
   if (menuIcon) {
      
      menuIcon.addEventListener('click', function(e) {
         e.preventDefault();
         headerMenu.classList.toggle('_active');
      }
      )
   }
//переход на страницу 
const menu = document.querySelector('.menu-list');
menu.addEventListener('click', event => {
   if (event.target.className === 'click') { 
      console.log('Click!');
   }
});
//форма отправки запись 
const form = document.querySelector('#form');
const submit = form.querySelector('.form__button');
submit.addEventListener('click', function (evt) {
      evt.preventDefault();
      form.innerHTML='Форма отправлена. Свяжемся с вами в ближайшее время:)';
      setTimeout(function() {
      form.classList.remove('form--open');;
   }, 3000);
})
