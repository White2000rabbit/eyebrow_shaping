'use strict'
//Анимация 
const animItems = document.querySelectorAll('._animation');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll () {
      for (let i=0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            animItem.classList.remove('_active');
         }
      }
}

function offset(el) {
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
setTimeout(animOnScroll(), 3)

}


//Бургер-меню
   const menuIcon = document.querySelector('.menu__icon');
   if (menuIcon) {
      const headerMenu = document.querySelector('.header__menu');
      menuIcon.addEventListener('click', function(e) {
         document.body.classList.toggle('_lock');
         menuIcon.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      }
      )
   }
