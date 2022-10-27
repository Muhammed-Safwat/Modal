'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// buttons array 
const btnsOpenModal = document.querySelectorAll('.show-modal');

// 1. open popup
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// 1. close popup  
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// add event Listener in buttons 
for (let i = 0; i < btnsOpenModal.length; i++){ 
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close when click in escape button in keyboard 
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});