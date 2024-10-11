//////////////////////////////


window.onload = function() {
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
};

//////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 1000,
    once: true
  });
});

//////////////////////////////

const btnbar = document.getElementById('btn-bars');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

btnbar.addEventListener('click', function() {
  
  bar1.classList.add('transform-45')
  bar2.style.display = 'none';
  bar3.classList.add('transform45')
});