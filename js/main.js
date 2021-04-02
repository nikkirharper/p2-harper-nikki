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

//Adoptable Dogs API
var dog1Name = document.getElementById("dog1-name");
var dog1Description = document.getElementById("dog1-description");
var dog1Image = document.getElementById("dog1-image");
var dog2Name = document.getElementById("dog2-name");
var dog2Description = document.getElementById("dog2-description");
var dog2Image = document.getElementById("dog2-image");
var dog3Name = document.getElementById("dog3-name");
var dog3Description = document.getElementById("dog3-description");
var dog3Image = document.getElementById("dog3-image");
var dog4Name = document.getElementById("dog4-name");
var dog4Description = document.getElementById("dog4-description");
var dog4Image = document.getElementById("dog4-image");
var dog5Name = document.getElementById("dog5-name");
var dog5Description = document.getElementById("dog5-description");
var dog5Image = document.getElementById("dog5-image");
var dog6Name = document.getElementById("dog6-name");
var dog6Description = document.getElementById("dog6-description");
var dog6Image = document.getElementById("dog6-image");


var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "https://api.petfinder.com/v2/oauth2/token";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
       var bearer = JSON.parse(xmlhttp.responseText).access_token;
       var url = "https://api.petfinder.com/v2/animals?type=dog&location=81211";
       var xhr = new XMLHttpRequest();
       xhr.open("GET", url);
       xhr.setRequestHeader("Accept", "application/json");
       xhr.setRequestHeader("Authorization", "Bearer " + bearer);
       xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            //  console.log(xhr.status);
            //  console.log(xhr.responseText);
             //Dog 1
             dog1Name.innerHTML = (JSON.parse(xhr.responseText).animals[0].name);
             dog1Description.innerHTML = (JSON.parse(xhr.responseText).animals[0].description);
             try {
              dog1Image.src = (JSON.parse(xhr.responseText).animals[0].photos[0].medium);
             }
             catch {
              dog1Image.src = "images/meet_our_dogs.jpg";
             }

             //Dog 2
             dog2Name.innerHTML = (JSON.parse(xhr.responseText).animals[1].name);
             dog2Description.innerHTML = (JSON.parse(xhr.responseText).animals[1].description);
             dog2Image.src = (JSON.parse(xhr.responseText).animals[1].photos[0].medium);

             //Dog 3
             dog3Name.innerHTML = (JSON.parse(xhr.responseText).animals[2].name);
             dog3Description.innerHTML = (JSON.parse(xhr.responseText).animals[2].description);
             dog3Image.src = (JSON.parse(xhr.responseText).animals[2].photos[0].medium);

             //Dog 4
             dog4Name.innerHTML = (JSON.parse(xhr.responseText).animals[3].name);
             dog4Description.innerHTML = (JSON.parse(xhr.responseText).animals[3].description);
             dog4Image.src = (JSON.parse(xhr.responseText).animals[3].photos[0].medium);

             //Dog 5
             dog5Name.innerHTML = (JSON.parse(xhr.responseText).animals[4].name);
             dog5Description.innerHTML = (JSON.parse(xhr.responseText).animals[4].description);
             dog5Image.src = (JSON.parse(xhr.responseText).animals[4].photos[0].medium);

             //Dog 6
             dog6Name.innerHTML = (JSON.parse(xhr.responseText).animals[5].name);
             dog6Description.innerHTML = (JSON.parse(xhr.responseText).animals[5].description);
             dog6Image.src = (JSON.parse(xhr.responseText).animals[5].photos[0].medium);

            }};
       xhr.send();
    }};
xmlhttp.send(JSON.stringify({
	"grant_type": "client_credentials",
	"client_id": "Z4kgtgXvezDWTvr2PEdPG7V325DqJDQe4w7HsVfGiTIzzP6LkJ",
	"client_secret": "mI05IC8FaXZYC80WVgb1d4gfhlJeB94wO6Qw2Wn0"
}));


