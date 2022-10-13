//==========// IMPORTS \\==========\\

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

bag.addEventListener("click", e => {
  fontCartMenu.classList.add("font-open-cart")
  cart.classList.add("open-menu")
})

closeCart.addEventListener("click", e => {
  fontCartMenu.classList.remove("font-open-cart")
  cart.classList.remove("open-menu")
})
