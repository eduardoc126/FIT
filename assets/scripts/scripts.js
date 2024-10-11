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

hbtn.addEventListener('click', function() {
  hbtn.classList.toggle('active');
});
