let form = document.getElementById("form");
let inputEmail = document.getElementById("correoElec");
let messageError = document.getElementById("msgError");

form.addEventListener("submit", (event) => {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(inputEmail.value) == true) {

    messageError.innerHTML = "";

  } else {

    event.preventDefault();
    inputEmail.style.border = "2px solid rgb(255, 66, 66)";
    // inputEmail.style.backgroundImage = "url(./images/icon-error.svg)";
    messageError.innerHTML = "Please enter a valid email address";
  }
});