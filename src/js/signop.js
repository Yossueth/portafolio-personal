const signopForm = document.querySelector("#signopForm");
signopForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = user.find((user) => user.email === email);
  if (isUserRegistered) {
    return alert("El usuario ya esta registrado");
  }

  user.push({ name: name, email: email, password: password });
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registro Exitiso");
  window.location.href = 'login.html';
});
