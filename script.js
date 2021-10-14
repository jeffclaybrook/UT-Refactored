let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})

let menuCloseBtn = document.getElementById("menu-close");
menuCloseBtn.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})

let header = document.querySelector("header");
var scrollPrev = window.pageYOffset;
window.onscroll = function () {
    var scrollCur = window.pageYOffset;
    if (scrollPrev > scrollCur) {
        header.style.top = "0";
    } else {
        header.style.top = "-72px";

    }
    scrollPrev = scrollCur;
}

let navLink = document.querySelectorAll("nav a");
for (let i=0; i<navLink.length; i++) {
   navLink[i].onclick = function() {
      let j = 0;
      while(j < navLink.length) {
         navLink[j++].className = "list";
      }
      navLink[i].className = "list active";
   }
}