document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showLoginButton = document.getElementById('showLogin');
  const showRegisterButton = document.getElementById('showRegister');

  showLoginButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
  });

  showRegisterButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulación básica de inicio de sesión
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
      // Aquí podrías redirigir a otra página
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    // Simulación básica de registro
    alert(`Usuario ${newUsername} registrado`);
    // Aquí podrías redirigir a una página de confirmación de registro
  });
});
