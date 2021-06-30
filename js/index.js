$(".list a").click(function () {
  $(".list a").removeClass("active");
  $(this).addClass("active");
});

// GSAP
var tl = gsap.timeline();
tl.from(".jumper", { duration: 1, y: -100, opacity: 0 });
//Button open overlay+about
$(".btn-about").click(function () {
  tl.to(".overlay", { duration: 0.5, x: 0, opacity: 1, zIndex: 9});
  tl.to(".about", { duration: 0.5, x: 0, opacity: 1, display: "block" });
  tl.to(".about .strigger", { duration: 0.6, x: 0, stagger: 0.2, opacity: 1 }, "-=.3");
});

//Button close overlay+about
$(".about .close").click(function () {
  tl.to(".strigger", { duration: 0.3, x: "10%", stagger: 0.2, opacity: 0 }, "-=.2");
  tl.to(".overlay", { duration: 0.5, x: "100%", opacity: 0, zIndex: -1 });
  tl.to(".about", { duration: 0, x: "100%", opacity: 0, display: "none" });
});

//Button open overlay+service
$(".btn-service").click(function () {
  tl.to(".overlay", { duration: 0.5, x: 0, opacity: 1, zIndex: 9 });
  tl.to(".services", { duration: 0.5, x: 0, opacity: 1, display: "block" });
  tl.to(".services .strigger", { duration: 0.6, x: 0, stagger: 0.2, opacity: 1 }, "-=.3");
});
//Button close overlay+service
$(".close-services").click(function () {
  tl.to(".services .strigger", { duration: 0.5, x: "10%", stagger: 0.3, opacity: 0 }, "-=.3");
  tl.to(".overlay", { duration: 0.5, x: "100%", opacity: 0, zIndex: -1 });
  tl.to(".services", { duration: 0, x: "100%", opacity: 0, display: "none" });
});
