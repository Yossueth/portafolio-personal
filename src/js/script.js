const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "login.html";
}
const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  alert("Hasta pronto");
  localStorage.removeItem("login_success");
  window.location.href = "login.html";
});

let input1 = document.getElementById("input1");
let tsobre = document.getElementById("tsobre");
btn1 = document.getElementById("Btn1");
btn1.addEventListener("click", function () {
  tsobre.innerHTML = input1.value;
});

let input2 = document.getElementById("input2");
let tsobre2 = document.getElementById("tsobre2");
Btn2 = document.getElementById("Btn2");
Btn2.addEventListener("click", function () {
  tsobre2.innerHTML = input2.value;
});

let input3 = document.getElementById("input3");
let tsobre3 = document.getElementById("tsobre3");
Btn3 = document.getElementById("Btn3");
Btn3.addEventListener("click", function () {
  tsobre3.innerHTML = input3.value;
});

let input4 = document.getElementById("input4");
let tsobre4 = document.getElementById("tsobre4");
Btn4 = document.getElementById("Btn4");
Btn4.addEventListener("click", function () {
  tsobre4.innerHTML = input4.value;
});
