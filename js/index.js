let myName = document.querySelector(".myname");

let auth = document.querySelector(".left");
let out = document.querySelector("#out");
let products = document.querySelector(".products");
let slide = document.querySelector("#slide");

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);
if (user) {
  auth.remove();
  out.style.display = "block";
  myName.innerHTML = user.userName;
}

//product slise

let product = [
  {
    id: 1,
    name: "back page",
    size: "smal",
    price: "40$",
    imgeurl: "img/img2.jpg",
  },

  {
    id: 2,
    name: "page",
    size: "larg",
    price: "100$",
    imgeurl: "img/img3.jpg",
  },

  {
    id: 3,
    name: "sheose",
    size: "32",
    price: "60$",
    imgeurl: "img/img4.jpg",
  },

  {
    id: 4,
    name: "sheose plack",
    size: "40",
    price: "160$",
    imgeurl: "img/img5.jpg",
  },
];

function drawproductsui() {
  let productsui = product.map(function (item) {
    return `
    <div class="pro-1">
          <div class="img-pro-1">
            <img src="${item.imgeurl}" />
          </div>

          <div class="disc-pro-1">
            <ul>
              <li>name:${item.name}<li>
              <li>size:${item.size}</li>
              <li>price:${item.price}</li>
            </ul>
          </div>

          <div class="icon">
            <ul>
              <li><button onclick="addShoppingCar()">add to car</button></li>
              <li><i class="fa-solid fa-heart"></i></li>
            </ul>
          </div>

        </div>
    `;
  });
  products.innerHTML = productsui;
}
drawproductsui();

function addedToCar(id) {
  let shosenItem = product.find((item) => item.id === id);
  slide.innerHTML += `<p>${shosenItem.titel}</p>`;
}

function addShoppingCar() {
  let ss = JSON.parse(localStorage.getItem("userData"));
  console.log(ss.userName);
  if (ss.userName) {
    Window.location = "shoppingcar.html";
  } else {
    window.location = "login.html";
  }
}
