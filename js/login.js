let userName = document.querySelector("#name");
let pass = document.querySelector("#pass");

let but = document.querySelector("#but");
let error = document.querySelector(".error");
let userData = JSON.parse(localStorage.getItem( "user"));
console.log(userData);

but.addEventListener("click",(e)=>{
    e.preventDefault();

if (userName.value==="" && pass.value===""){
    error.innerHTML="it is error";
}

if(userName.value!==userData.userName && pass.value!==userData.pass ){
error.innerHTML="it is error";
}


else{

    setTimeout(()=>{

    location.href="index.html"
},2000);

}

});