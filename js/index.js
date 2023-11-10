let myName = document.querySelector(".myname");

let auth = document.querySelector(".left");
let out = document.querySelector("#out");
let products = document.querySelector(".products");

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
    size: "larg",
    price: "00$",
    imgeurl: "img/img2.jpg",
  },

  {
    id: 2,
    size: "larg",
    price: "60$",
    imgeurl: "img/img2.jpg",
  },

  {
    id: 3,
    size: "larg",
    price: "60$",
    imgeurl: "img/img2.jpg",
  },

  {
    id: 4,
    size: "larg",
    price: "60$",
    imgeurl: "img/img2.jpg",
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
              
              <li>size:${item.size}</li>
              <li>price:${item.price}</li>
            </ul>
          </div>

          <div class="icon">
            <ul>
              <li><button>add to car</button></li>
              <li><i class="fa-solid fa-heart"></i></li>
            </ul>
          </div>

        </div>
    `;
  });
   products.innerHTML = productsui;
};
drawproductsui();
