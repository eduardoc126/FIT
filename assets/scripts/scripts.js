//////////////////////////////


window.onload = function() {
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
};

//////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 1000,
    once: false
  });
});

//////////////////////////////

const hbtn = document.getElementById('menu-btn');
const submenu = document.getElementById('submenu');

hbtn.addEventListener('click', function() {
  hbtn.classList.toggle('active');
  submenu.classList.toggle('off');
});

//////////////////////////////


document.addEventListener('scroll', () => {

  const header = document.getElementById('header');
  const sectionAll = document.getElementById('show-header');

  const planosPosition = sectionAll.getBoundingClientRect();

  if (planosPosition.top <= 0 && planosPosition.bottom >= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
    submenu.classList.add('visible');
    submenu.classList.remove('hidden');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
    submenu.classList.remove('visible');
    submenu.classList.add('hidden');
    
  }
});