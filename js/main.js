// ============ active header ==============
let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("active")
//     }else{
//   nav.classList.remove('active');
// }
// }

window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// ============ counter section ============

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 1000);
  counter("count2", 0, 3787, 1000);
  counter("count3", 0, 2769, 1000);
  counter("count4", 0, 3487, 1000);
});
