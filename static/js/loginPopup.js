var botonLoginAbrirPopup = document.getElementById('user-boton__mostrar'),
    botonLoginCerrarPopup = document.getElementById('user-boton__ocultar')
    loginContainer = document.getElementById('login-container'),
    formContainer = document.getElementById('form-container');

botonLoginAbrirPopup.addEventListener('click', function(){
  loginContainer.classList.add('active'),
  formContainer.classList.add('active'),
  botonLoginAbrirPopup.classList.add('oculto'),
  botonLoginCerrarPopup.classList.add('visible')
});

botonLoginCerrarPopup.addEventListener('click', function(){
  loginContainer.classList.remove('active'),
  formContainer.classList.remove('active'),
  botonLoginAbrirPopup.classList.remove('oculto'),
  botonLoginCerrarPopup.classList.remove('visible')
});

loginContainer.addEventListener('click', function(){
  loginContainer.classList.remove('active'),
  formContainer.classList.remove('active'),
  botonLoginAbrirPopup.classList.remove('oculto'),
  botonLoginCerrarPopup.classList.remove('visible')
});