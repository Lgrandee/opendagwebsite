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

