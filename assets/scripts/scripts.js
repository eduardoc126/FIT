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


const hbtn = document.getElementById('menu-btn');
const submenu = document.getElementById('submenu');

hbtn.addEventListener('click', function() {
  hbtn.classList.toggle('active');
  submenu.classList.toggle('off');
});
