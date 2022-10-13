//==========// IMPORTS \\==========\\






//==========// VARS \\==========\\

const cartItemsContainer = document.querySelector("section.content-cart")




// prices products 
const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/images/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/images/featured3.png',
    category: 'Sweatshirts',
    quantity: 20
  }
]

  // Evento DOMContentLoaded
const themeIcon = document.getElementById( "theme-btn" )

themeIcon.addEventListener("click", () =>{
  document.body.classList.toggle("dark-theme")
  if(themeIcon.classList.contains("bx-moon")){
    themeIcon.classList.replace("bx-moon", "bx-sun")
  }else{
    themeIcon.classList.replace("bx-sun", "bx-moon")
  }
})

//Ubicación del elemento loader dentro del DOM

const loadComponent = () => {
  const loader = document.getElementById("loader")

  setTimeout(() => {
    loader.classList.add("hide")
  }, 3000)
    
}
// Todas las funciones que se necesiten al cargar la pagina
// Se pueden agregar en este DOMContentLoaded
document.addEventListener( "DOMContentLoaded", () =>{
  loadComponent()
})

//NAVBAR SCROLL
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () =>{
  if(window.scrollY >= 50){
    navbar.classList.add("scroll-navbar")
  }else{
    navbar.classList.remove("scroll-navbar")
  }
})


//SLIDER MENU
const menuBtn = document.getElementById("menu-btn")
const menuSlider = document.getElementById("menu-slider")
const closeMenu = document.getElementById("close-menu")

menuBtn.addEventListener("click", e => {
  menuSlider.classList.add("open-menu")
})

closeMenu.addEventListener("click", e => {
  menuSlider.classList.remove("open-menu")
})

// SHOPING BAG
const closeCart = document.getElementById("close-cart")
const fontCartMenu = document.getElementById("font-cart-menu")
const cart = document.getElementById("cart")
const bag = document.getElementById("bag-btn")
const cartCounter = document.getElementById("cart-counter")

bag.addEventListener("click", e => {
  fontCartMenu.classList.add("font-open-cart")
  cart.classList.add("open-menu")
})

cartCounter.addEventListener("click", e => {
  fontCartMenu.classList.add("font-open-cart")
  cart.classList.add("open-menu")
})

closeCart.addEventListener("click", e => {
  fontCartMenu.classList.remove("font-open-cart")
  cart.classList.remove("open-menu")
})


// show products 
const addToCartButtons = document.querySelectorAll(".bx-plus")

addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener("click", addToCartClicked);
})

function addToCartClicked(e) {
  const button = e.target
  const item = button.closest(".product")
  console.log(item);

// product-images
// product-name
// price
// stock
  
  const productName = item.querySelector(".product-name").textContent;
  const price = item.querySelector(".price").textContent;
  const stock = item.querySelector(".stock").textContent;
  const productImg = item.querySelector(".product-image").src;
  console.log([productName]);
  console.log([price]);
  console.log([stock]);
  console.log([productImg]);

addItemToCart (productName, stock, price, productImg)



}
 
function addItemToCart ( productImg, productName, price, strock){
  const itemContainer = dad.createElement("div")

  const cartContent= ``
  

}