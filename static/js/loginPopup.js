var botonLoginAbrirPopup = document.getElementById('user-boton__mostrar'),
    botonLoginCerrarPopup = document.getElementById('user-boton__ocultar')
    loginContainer = document.getElementById('login-container');

botonLoginAbrirPopup.addEventListener('click', function(){
  loginContainer.classList.add('active'),
  botonLoginAbrirPopup.classList.add('oculto'),
  botonLoginCerrarPopup.classList.add('visible')
});

botonLoginCerrarPopup.addEventListener('click', function(){
  loginContainer.classList.remove('active'),
  botonLoginAbrirPopup.classList.remove('oculto'),
  botonLoginCerrarPopup.classList.remove('visible')
});
