'use strict';
let root = document.documentElement;
const blurButton = document.querySelector('.blur-button');
const contrastButton = document.querySelector('.contrast-button');
const animationButton = document.querySelector('.animation-button');
const bgColorInput = document.querySelector('.bg-color');
const dotColorInput = document.querySelector('.d-color');
const preloader = document.querySelector('.preloader');

blurButton.addEventListener('click', () => {
  preloader.classList.toggle('blur');
  blurButton.classList.toggle('button--checked');
});

contrastButton.addEventListener('click', () => {
  preloader.classList.toggle('contrast');
  contrastButton.classList.toggle('button--checked');
});

animationButton.addEventListener('click', () => {
  preloader.classList.toggle('animation');
  animationButton.classList.toggle('button--checked');
});

bgColorInput.addEventListener('change', () => {
  root.style.setProperty('--bg-color', bgColorInput.value);
});

dotColorInput.addEventListener('change', () => {
  root.style.setProperty('--dot-color', dotColorInput.value);
});

