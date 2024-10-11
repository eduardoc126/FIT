var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Mensagem enviada com sucesso!";
      status.style.color = 'var(--VerdeP)';
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Não foi possível enviar sua mensagem no momento!";
          status.style.color = 'red';
        }
      });
    }
  }).catch(error => {
    status.innerHTML = "Não foi possível enviar sua mensagem no momento!";
    status.style.color = 'red';
  });
}

form.addEventListener("submit", handleSubmit);


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
