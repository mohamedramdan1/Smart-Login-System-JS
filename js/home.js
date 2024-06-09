var userName = document.getElementById("userName");
var person_name = localStorage.getItem("login-info");
var logout = document.getElementById("logout");

userName.innerHTML += person_name;

function Logout() {
  localStorage.removeItem("login-info");
}

logout.addEventListener("click", function () {
  Logout();
});
