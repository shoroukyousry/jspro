let myName = document.querySelector(".myName");

let auth = document.querySelector(".left");
let out = document.querySelector("#out");
let logout_btn = document.querySelector("#logout_btn");
let products = document.querySelector(".products");
let slide = document.querySelector("#slide");
let butaddtocar = document.querySelector("#butaddtocar");
let number = document.querySelector("#number");

let user = JSON.parse(localStorage.getItem("user"));
if (user) {
  auth.remove();
  out.style.display = "block";
  myName.innerHTML = user.userName;
} else {
  out.style.display = "none"
}

let product = [
  {
    id: 1,
    name: "back page",
    size: "small",
    price: "40$",
    imageUrl: "img/img2.jpg",
  },

  {
    id: 2,
    name: "page",
    size: "large",
    price: "100$",
    imageUrl: "img/img3.jpg",
  },

  {
    id: 3,
    name: "shoes",
    size: "32",
    price: "60$",
    imageUrl: "img/img4.jpg",
  },

  {
    id: 4,
    name: "shoes plack",
    size: "40",
    price: "160$",
    imageUrl: "img/img5.jpg",
  },
];

logout_btn.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "rigester.html"
})
let shoppingCart = [];

const addedToCar = (id) => {
  let chooseItem = product.find((item) => item.id === id);
  slide.innerHTML += `<p>${chooseItem.name}</p>`;
  shoppingCart.push(chooseItem);
  let productLength = shoppingCart.length;
  number.innerHTML = `<p>${productLength}</p>`;
}

function drawProductsUi() {
  let productsUi = product.map(function (item) {
    return `
    <div class="pro-1">
          <div class="img-pro-1">
            <img src="${item.imageUrl}" />
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
              <li><button  onclick="addedToCar(${item.id})">add to car</button></li>
              <li><i class="fa-solid fa-heart"></i></li>
            </ul>
          </div>

        </div>
    `;
  });
  products.innerHTML = productsUi;
}
drawProductsUi();


butaddtocar.addEventListener("click", function addShoppingCar() {
  if (user) {
    location.href = "shoppingcart.html";
  } else {
    location.href = "login.html";
  }
});
