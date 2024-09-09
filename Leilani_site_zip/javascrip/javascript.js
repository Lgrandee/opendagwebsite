const bg = document.querySelector('.main');
const walk = 40;

const move = (e) => {
  let mouseX = -Math.round((e.clientX / window.innerWidth) * walk - (walk/2));
  let mouseY = -Math.round((e.clientY / window.innerHeight) * walk - (walk/2));
  bg.style.transform = `scale(1.1) translate(${mouseX}px, ${mouseY}px)`;
};
window.addEventListener('mousemove', move);

//LIST animation
var tl = new TimelineLite();
tl.staggerFrom("li", 2, { 
  delay: 0.5, 
  y: 10, 
  opacity: 0, 
  ease: Back.easeOut
}, 0.2);
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});