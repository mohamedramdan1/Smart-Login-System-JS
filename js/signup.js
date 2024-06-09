var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupbtn = document.getElementById("signupbtn");
var error = document.getElementById("error");
var success = document.getElementById("success");

var sign_up_arr = [];

if (localStorage.getItem("info") == null) {
  sign_up_arr = [];
} else {
  sign_up_arr = JSON.parse(localStorage.getItem("info"));
}

function sign_up() {
  if (isSigupEmpty() == true) {
    error.innerHTML = `<p class="text-danger m-3">All inputs is required</p>`;
  } else {
    var signup = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };

    if (isEmailExist() == true) {
      error.innerHTML = `<p class="text-danger m-3">email already exists</p>`;
    } else {
      sign_up_arr.push(signup);
      localStorage.setItem("info", JSON.stringify(sign_up_arr));
      error.innerHTML = `<p class="text-success m-3">Success</p>`;
    }
  }
}

function isSigupEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function isEmailExist() {
  for (var i = 0; i < sign_up_arr.length; i++) {
    if (sign_up_arr[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return true;
    }
  }
}

signupbtn.addEventListener("click", function () {
  sign_up();
});
