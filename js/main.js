var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var cross = document.querySelector(".cross");
var hamburger = document.querySelector(".hamburger");


ham.addEventListener("click", toggleMenu);

// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      cross.style.display = "none";
      hamburger.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      cross.style.display = "block";
      hamburger.style.display = "none";
    }
  }

var menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )

// // Navigation sub-menu transition for Adopt
// var button1 = document.getElementById("adopt");
// var wrapper1 = document.getElementById("adopt-wrapper");

// function showWrapper1() {
//   wrapper1.classList.add("show");
// }

// function hideWrapper1() {
//   wrapper1.classList.remove("show"); 
// }

// button1.addEventListener("mouseover", showWrapper1);
// button1.addEventListener("mouseleave", hideWrapper1);



