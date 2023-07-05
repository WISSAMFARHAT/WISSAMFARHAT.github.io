const mobileMenu=document.querySelector(".header-mobile");
const closeMenu=document.querySelector(".popup-close");
const menuContent=document.querySelector(".popup-content");
const theme=document.querySelector("#theme");
const closer=document.querySelector("#close");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const items=document.querySelectorAll(".item");
const box=document.querySelector(".color_box");
const colors=document.querySelectorAll(".colorhex");
const ages=document.querySelector(".age");
const send=document.querySelector("form");
const currentYear = new Date().getFullYear();
let minus1998 = currentYear - 1998;
ages.innerHTML=minus1998+" Years";

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

theme.addEventListener("click",function(event){
    box.classList.toggle("_opened");
});

closer.addEventListener("click",function(e){
    box.classList.remove("_opened");
});


next.addEventListener("click",function(event){
    var currentpage=document.querySelector(".currentpage").innerHTML;
    ChangePage(currentpage);
});

prev.addEventListener("click",function(event){
    var currentpage=document.querySelector(".currentpage").innerHTML;
    ChangePage(currentpage);
});

function ChangePage(pagenumber){
    if(pagenumber==1)
    {
        document.querySelector(".currentpage").innerHTML=2;
        items.forEach(item=>item.classList.remove("disabled"));
        items.forEach(item=>item.classList.add("disabled"));
        items[3].classList.remove("disabled");
        items[4].classList.remove("disabled");
        items[5].classList.remove("disabled");

    
    }else if(pagenumber==2)
    {
        document.querySelector(".currentpage").innerHTML=3;
        items.forEach(item=>item.classList.remove("disabled"));
        items.forEach(item=>item.classList.add("disabled"));       
         items[6].classList.remove("disabled");
        items[7].classList.remove("disabled");
        items[8].classList.remove("disabled");
    }else if(pagenumber==3)
    {
        document.querySelector(".currentpage").innerHTML=4;
        items.forEach(item=>item.classList.remove("disabled"));
        items.forEach(item=>item.classList.add("disabled")); 
        items[9].classList.remove("disabled");
        items[10].classList.remove("disabled");
        items[11].classList.remove("disabled");
    }else if(pagenumber==4)
    {
        document.querySelector(".currentpage").innerHTML=5;
        items.forEach(item=>item.classList.remove("disabled"));
        items.forEach(item=>item.classList.add("disabled")); 
        items[12].classList.remove("disabled");
        items[13].classList.remove("disabled");
        items[14].classList.remove("disabled");
    }else
    {
        document.querySelector(".currentpage").innerHTML=1;
        items.forEach(item=>item.classList.remove("disabled"));
        items.forEach(item=>item.classList.add("disabled")); 
        items[1].classList.remove("disabled");
        items[2].classList.remove("disabled");
        items[3].classList.remove("disabled");
    }
}


colors.forEach(colorindex=>{
    colorindex.addEventListener("click",function(){
        document.documentElement.style.setProperty("--primaryColor", colorindex.getAttribute("data-color"));
    })
})

