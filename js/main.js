'use strict'



{
  // $('.parallax-window').parallax({imageSrc: 'ima'});
  
  window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  
  
  
}
