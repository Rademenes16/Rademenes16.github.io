const scrollline = document.querySelector('.scroll-line');

function fillscrollline() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  scrollline.style.width = percentScrolled + '%';
};

window.addEventListener('scroll', fillscrollline);


const progress = document.querySelector('.progress-done');
const progress2 = document.querySelector('.progress-done2');
const progress3 = document.querySelector('.progress-done3');
const progress4 = document.querySelector('.progress-done4');
const progress5 = document.querySelector('.progress-done5');
const progress6 = document.querySelector('.progress-done6');
const progress7 = document.querySelector('.progress-done7');
const progress8 = document.querySelector('.progress-done8');
const progress9 = document.querySelector('.progress-done9');
const progress10 = document.querySelector('.progress-done10');
const progress11 = document.querySelector('.progress-done11');
const progress12 = document.querySelector('.progress-done12');
const progress13 = document.querySelector('.progress-done13');
setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress2.style.opacity = 1;
  progress2.style.width = progress2.getAttribute('data-done') + '%';
  progress3.style.opacity = 1;
  progress3.style.width = progress3.getAttribute('data-done') + '%';
  progress4.style.opacity = 1;
  progress4.style.width = progress4.getAttribute('data-done') + '%';
  progress5.style.opacity = 1;
  progress5.style.width = progress5.getAttribute('data-done') + '%';
  progress6.style.opacity = 1;
  progress6.style.width = progress6.getAttribute('data-done') + '%';
  progress7.style.opacity = 1;
  progress7.style.width = progress7.getAttribute('data-done') + '%';
  progress8.style.opacity = 1;
  progress8.style.width = progress8.getAttribute('data-done') + '%';

  progress9.style.opacity = 1;
  progress9.style.width = progress9.getAttribute('data-done') + '%';
  progress10.style.opacity = 1;
  progress10.style.width = progress10.getAttribute('data-done') + '%';
  progress11.style.opacity = 1;
  progress11.style.width = progress11.getAttribute('data-done') + '%';
  progress12.style.opacity = 1;
  progress12.style.width = progress12.getAttribute('data-done') + '%';
  progress13.style.opacity = 1;
  progress13.style.width = progress13.getAttribute('data-done') + '%';
}, 500)
