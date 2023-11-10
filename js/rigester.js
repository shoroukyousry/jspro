let userName = document.querySelector("#name");
let pass = document.querySelector("#pass");
let email = document.querySelector("#email");
let but = document.querySelector("#but");
let error = document.querySelector(".error");

but.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || pass.value === "" || email.value === "") {
    error.innerHTML = "it is error";
  } else {
    let userData = {
      userName: userName.value,
      pass: pass.value,
      email: email.value,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setTimeout(() => {
      location.href = "login.html";
    }, 2000);
  }
});
