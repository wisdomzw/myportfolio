//work in progress
$(".contact").on("click", function () {
  $(".work-card").toggleClass("active");
});

$(".work-card .close").on("click", function (e) {
  e.preventDefault();
  $(".work-card").toggleClass("active")
});