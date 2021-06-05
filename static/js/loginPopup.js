var botonLoginAbrirPopup = document.getElementById('user-boton__mostrar'),
    botonLoginCerrarPopup = document.getElementById('user-boton__ocultar')
    loginContainer = document.getElementById('login-container'),
    formContainer = document.getElementById('form-container'),
    botonMenuResponsive= document.getElementById('menu-bars'),
    menuResponsive = document.getElementById('responsive-menu'),
    botonMenuResponsiveX = document.getElementById('menu-x')

botonLoginAbrirPopup.addEventListener('click', function(){
  loginContainer.classList.add('active'),
  formContainer.classList.add('active'),
  formContainer.classList.add('ocultar'),
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

/*?Aqui empueza los eventos para el boton del menu responsive*/
botonMenuResponsive.addEventListener('click', function(){
  menuResponsive.classList.add('active'),
  menuResponsive.classList.add('ocultar'),
  botonMenuResponsive.classList.remove('menu-bars'),
  botonMenuResponsive.classList.add('oculto'),
  botonMenuResponsiveX.classList.add('active')
});

botonMenuResponsiveX.addEventListener('click', function(){
  menuResponsive.classList.remove('active'),
  botonMenuResponsive.classList.add('menu-bars'),
  botonMenuResponsive.classList.remove('oculto'),
  botonMenuResponsiveX.classList.remove('active')
});
