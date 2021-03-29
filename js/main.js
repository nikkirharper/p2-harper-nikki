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

// Navigation sub-menu transition for Adopt
var button1 = document.getElementById("adopt");
var wrapper1 = document.getElementById("adopt-wrapper");

function showWrapper1() {
  wrapper1.classList.add("show-adopt");
}

function hideWrapper1() {
  wrapper1.classList.remove("show-adopt"); 
}

button1.addEventListener("mouseover", showWrapper1);
button1.addEventListener("mouseleave", hideWrapper1);


// Navigation sub-menu transition for Volunteer
var button2 = document.getElementById("volunteer");
var wrapper2 = document.getElementById("volunteer-wrapper");

function showWrapper2() {
  wrapper2.classList.add("show-volunteer");
}

function hideWrapper2() {
  wrapper2.classList.remove("show-volunteer"); 
}

button2.addEventListener("mouseover", showWrapper2);
button2.addEventListener("mouseleave", hideWrapper2);

//Popup ad display after 3 seconds on page load 
var modal = document.getElementById('modal-demo');
var closeModal = document.getElementsByClassName('close-modal')[0];

window.addEventListener("load",
  function() {
    setTimeout(displayAd, 2000);
  }, false
);

function displayAd() {
  modal.classList.add('visible');
}

closeModal.addEventListener('click', 
  function()  {
    modal.classList.remove('visible');
});


//Adoptable Dogs API
// var dogName = document.querySelectorAll('#adoptable-dogs p span');

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var apiResult = JSON.parse(this.responseText);

//         dogName[0].innerHTML = 

//     }
// };
// xmlhttp.open('GET', 'https://api.petfinder.com/v2/animals?key=VbmCfYHhv2pZ0onOYBFyS2tcgatPWSt8sNgv1UzGqTzkMwoylw&animal=cat&location="06824"&output=basic&format=json', true);
// xmlhttp.send();



