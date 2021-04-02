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
            try {
              dog1Image.src = (JSON.parse(xhr.responseText).animals[0].photos[0].medium);
             }
             catch(err) {
              dog1Image.src = "images/default.jpg";
             }
             dog1Name.innerHTML = (JSON.parse(xhr.responseText).animals[0].name);
             dog1Description.innerHTML = (JSON.parse(xhr.responseText).animals[0].description);
          
            //Dog 2
            try{
              dog2Image.src = (JSON.parse(xhr.responseText).animals[1].photos[0].medium);
            }
            catch(err) {
              dog2Image.src = "images/default.jpg";
            }
            dog2Name.innerHTML = (JSON.parse(xhr.responseText).animals[1].name);
            dog2Description.innerHTML = (JSON.parse(xhr.responseText).animals[1].description);
            
            //Dog 3
            try {
              dog3Image.src = (JSON.parse(xhr.responseText).animals[2].photos[0].medium);
            }
            catch(err) {
              dog3Image.src = "images/default.jpg";
            }
            dog3Name.innerHTML = (JSON.parse(xhr.responseText).animals[2].name);
            dog3Description.innerHTML = (JSON.parse(xhr.responseText).animals[2].description);

            //Dog 4
            try {
              dog4Image.src = (JSON.parse(xhr.responseText).animals[3].photos[0].medium);
            }
            catch(err) {
              dog4Image.src = "images/default.jpg";
            }
            dog4Name.innerHTML = (JSON.parse(xhr.responseText).animals[3].name);
            dog4Description.innerHTML = (JSON.parse(xhr.responseText).animals[3].description);

            //Dog 5
            try {
              dog5Image.src = (JSON.parse(xhr.responseText).animals[4].photos[0].medium);
            }
            catch(err) {
              dog5Image.src = "images/default.jpg";
            }
            dog5Name.innerHTML = (JSON.parse(xhr.responseText).animals[4].name);
            dog5Description.innerHTML = (JSON.parse(xhr.responseText).animals[4].description);

            //Dog 6
            try {
              dog6Image.src = (JSON.parse(xhr.responseText).animals[5].photos[0].medium);
            }
            catch(err) {
              dog6Image.src = "images/default.jpg";
            }
            dog6Name.innerHTML = (JSON.parse(xhr.responseText).animals[5].name);
            dog6Description.innerHTML = (JSON.parse(xhr.responseText).animals[0].description);
            }};
       xhr.send();
    }};
xmlhttp.send(JSON.stringify({
	"grant_type": "client_credentials",
	"client_id": "Z4kgtgXvezDWTvr2PEdPG7V325DqJDQe4w7HsVfGiTIzzP6LkJ",
	"client_secret": "mI05IC8FaXZYC80WVgb1d4gfhlJeB94wO6Qw2Wn0"
}));