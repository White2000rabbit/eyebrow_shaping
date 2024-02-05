'use strict'
//форма отправки запись 
const form = document.querySelector('#form-email');
const submit = form.querySelector('.form__button');
submit.addEventListener('click', function (evt) {
      evt.preventDefault();
      form.innerHTML='Подписка оформлена. Пожалуйста проверьте ваш почтовый ящик :)';
})