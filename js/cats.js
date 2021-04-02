//Adoptable Dogs API
var cat1Name = document.getElementById("cat1-name");
var cat1Description = document.getElementById("cat1-description");
var cat1Image = document.getElementById("cat1-image");
var cat2Name = document.getElementById("cat2-name");
var cat2Description = document.getElementById("cat2-description");
var cat2Image = document.getElementById("cat2-image");
var cat3Name = document.getElementById("cat3-name");
var cat3Description = document.getElementById("cat3-description");
var cat3Image = document.getElementById("cat3-image");
var cat4Name = document.getElementById("cat4-name");
var cat4Description = document.getElementById("cat4-description");
var cat4Image = document.getElementById("cat4-image");
var cat5Name = document.getElementById("cat5-name");
var cat5Description = document.getElementById("cat5-description");
var cat5Image = document.getElementById("cat5-image");
var cat6Name = document.getElementById("cat6-name");
var cat6Description = document.getElementById("cat6-description");
var cat6Image = document.getElementById("cat6-image");


var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "https://api.petfinder.com/v2/oauth2/token";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
       var bearer = JSON.parse(xmlhttp.responseText).access_token;
       var url = "https://api.petfinder.com/v2/animals?type=cat&location=81211";
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
                cat1Image.src = (JSON.parse(xhr.responseText).animals[0].photos[0].medium);
             }
             catch(err) {
                cat1Image.src = "images/default_cat.jpg";
             }
             cat1Name.innerHTML = (JSON.parse(xhr.responseText).animals[0].name);
             cat1Description.innerHTML = (JSON.parse(xhr.responseText).animals[0].description);
          
            //Dog 2
            try{
                cat2Image.src = (JSON.parse(xhr.responseText).animals[1].photos[0].medium);
            }
            catch(err) {
                cat2Image.src = "images/default_cat.jpg";
            }
            cat2Name.innerHTML = (JSON.parse(xhr.responseText).animals[1].name);
            cat2Description.innerHTML = (JSON.parse(xhr.responseText).animals[1].description);
            
            //Dog 3
            try {
                cat3Image.src = (JSON.parse(xhr.responseText).animals[2].photos[0].medium);
            }
            catch(err) {
                cat3Image.src = "images/default_cat.jpg";
            }
            cat3Name.innerHTML = (JSON.parse(xhr.responseText).animals[2].name);
            cat3Description.innerHTML = (JSON.parse(xhr.responseText).animals[2].description);

            //Dog 4
            try {
                cat4Image.src = (JSON.parse(xhr.responseText).animals[3].photos[0].medium);
            }
            catch(err) {
                cat4Image.src = "images/default_cat.jpg";
            }
            cat4Name.innerHTML = (JSON.parse(xhr.responseText).animals[3].name);
            cat4Description.innerHTML = (JSON.parse(xhr.responseText).animals[3].description);

            //Dog 5
            try {
                cat5Image.src = (JSON.parse(xhr.responseText).animals[4].photos[0].medium);
            }
            catch(err) {
                cat5Image.src = "images/default_cat.jpg";
            }
            cat5Name.innerHTML = (JSON.parse(xhr.responseText).animals[4].name);
            cat5Description.innerHTML = (JSON.parse(xhr.responseText).animals[4].description);

            //Dog 6
            try {
                cat6Image.src = (JSON.parse(xhr.responseText).animals[5].photos[0].medium);
            }
            catch(err) {
                cat6Image.src = "images/default_cat.jpg";
            }
            cat6Name.innerHTML = (JSON.parse(xhr.responseText).animals[5].name);
            cat6Description.innerHTML = (JSON.parse(xhr.responseText).animals[5].description);
            }};
       xhr.send();
    }};

xmlhttp.send(JSON.stringify({
	"grant_type": "client_credentials",
	"client_id": "Z4kgtgXvezDWTvr2PEdPG7V325DqJDQe4w7HsVfGiTIzzP6LkJ",
	"client_secret": "mI05IC8FaXZYC80WVgb1d4gfhlJeB94wO6Qw2Wn0"
}));