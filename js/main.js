document.addEventListener('DOMContentLoaded', () => {
  const event = document.getElementsByClassName("news__list");
  var array = Array.prototype.slice.call(event);
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add('event');
  }
});

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});