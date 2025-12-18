// assets/js/main.js

// Cambio de tema
function cambiarTema() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}


// Animación scroll
$(document).ready(function () {
  $('a.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 800);
  });


  // Validación formulario
  $('#formContacto').submit(function (e) {
    e.preventDefault();
    if ($('#nombre').val() === '' || $('#email').val() === '') {
      $('#error').text('Todos los campos son obligatorios');
    } else {
      $('#error').text('Formulario enviado correctamente');
    }
  });
});

