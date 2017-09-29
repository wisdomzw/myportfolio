// Add touch support in place of :hover
if (Modernizr.touch === true) {
  var $vcard = document.querySelectorAll(".vcard")[0];

$vcard.addEventListener("click", function() {
  $vcard.classList.toggle("active");
});
}