$("#menu_trigger").click(function () {
  $(".menu").toggleClass("is-active");
  $("#menu_trigger").toggleClass("clicked");
  $(".logo , #social").toggleClass("hidden");
  $("html , body").toggleClass("overflow-hidden");
});
gsap.registerPlugin(ScrollTrigger);
let Ccursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  Ccursor.style.top = e.pageY + "px";
  Ccursor.style.left = e.pageX + "px";
}
$("a , button , .underline  ,.link").mouseover(function () {
  $(".cursor").addClass("grow");
  $(".cursor>svg").show();
  $(".cursor>a").html("click");
});
$("a , button , .underline , .link ").mouseleave(function () {
  $(".cursor").removeClass("grow");
  $(".cursor>svg").hide();
});

  gsap.set(".hello ", {
    scrollTrigger: {
      trigger: ".hello",
      scrub: true,
      onEnter: () => $(".hello").addClass("text-pop"),
      onLeave: () => $(".hello").removeClass("text-pop"),
    },
  });

gsap.set("#know-me", {
  scrollTrigger: {
    trigger: "#know-me",
    scrub: true,
    onEnter: () => $("#know-me").addClass("blur-animation "),
    onLeave: () => $("#know-me").removeClass("blur-animation "),
  },
});

gsap.set("#recentworks", {
  scrollTrigger: {
    trigger: "#recentworks",
    scrub: true,
    onEnter: () => $("#recentworks").addClass("blur-animation "),
    onLeave: () => $("#recentworks").removeClass("blur-animation "),
  },
});

  var tl = gsap.timeline();

gsap.set('#recentworks' , {
  scrollTrigger: {
    trigger : "#Blog-section",
    onEnter: () =>  tl.to('body' , {duration: 1 , backgroundColor:"#000000" , color:"#fff!important" , stagger: .2})
  }
})
$("#titel").html("first")
$('#text-change').html(1)
$(document).ready(function () {
  $(".your-class").slick({
    speed: 900,
    slidesToShow: 2,
    dragable: true,
    centerMode: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    variableWidth: true,
    variableWidth: true,
  });
});
$(".your-class").on("afterChange", function (event, slick, currentSlide) {
let active =  + $(".slick-active").data("slickIndex");
$('#text-change').html(active+1)
if (active == 0 ){
  $("#titel").html("first")
}
if (active == 1 ){
  $("#titel").html("second")
}
if (active == 2 ){
  $("#titel").html("third")
}
Splitting();
tl.from("#titel", {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
});

