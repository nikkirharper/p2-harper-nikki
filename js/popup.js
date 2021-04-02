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