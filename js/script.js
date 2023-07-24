// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


//Start script ketika memnutup menu sidebar klik di mana saja
const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');


document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

});
//End script ketika memnutup menu sidebar klik di mana saja