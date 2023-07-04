const mobileMenu=document.querySelector(".header-mobile");
const closeMenu=document.querySelector(".popup-close");
const menuContent=document.querySelector(".popup-content");


mobileMenu.addEventListener("click",function(){
    document.querySelector("html").classList.add("_open");
});

closeMenu.addEventListener("click",function(){
    document.querySelector("html").classList.remove("_open");
});

document.addEventListener('click', function(event) {
    if (!menuContent.contains(event.target) && !mobileMenu.contains(event.target)) {
        document.querySelector("html").classList.remove("_open");
    }
  });

  window.addEventListener('scroll', () => {
    checkScrollHeight();
});

function checkScrollHeight() {
    const scrollHeight = window.scrollY;
    const html = document.querySelector('html');

    if (scrollHeight > 55) {
        html.classList.add('_scroll');
    } else {
        html.classList.remove('_scroll');
    }
}


