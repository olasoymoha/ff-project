const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  // Aquí puedes agregar la lógica para verificar las credenciales del usuario
  console.log(`Iniciar sesión con ${username} y ${password}`);
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = event.target['new-username'].value;
  const newPassword = event.target['new-password'].value;
  // Aquí puedes agregar la lógica para registrar al usuario
  console.log(`Registrar usuario con ${newUsername} y ${newPassword}`);
});
