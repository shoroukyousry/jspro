let myName = document.querySelector ("#my name");

let auth = document.querySelector(".left");
let logout = document.querySelector(".logout");




let nname = JSON.parse(localStorage.getItem("user"));


if (nname !=="") {
    auth.remove();
    logout.style.display = "block";
    UserActivation.innerHTML = nname.username;
};





