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


gsap.set("#recentworks", {
  scrollTrigger: {
    trigger: "#recentworks",
    scrub: true,
    onEnter: () => $("#recentworks").addClass("blur-animation "),
    onLeave: () => $("#recentworks").removeClass("blur-animation "),
  },
});

var tl = gsap.timeline();
tl.from('.highlight', 1, {
  background:"linear-gradient(135deg, rgb(255, 154, 211) 0%, rgb(255, 115, 115) 100%) center left / 0% 100em no-repeat", stagger: .2
})
gsap.set('#know-me', {
  scrollTrigger: {
    trigger: "#know-me",
    onEnter: () => tl.to('.highlight', 1, {
      background:
        "linear-gradient(135deg, rgb(255, 154, 211) 0%, rgb(255, 115, 115) 100%) center left / 100% 100em no-repeat", stagger: .2
    })
  }
})
$("#titel").html("first")
$(".description").html("lorem10")
$('#text-change').html(1)
$(document).ready(function () {
  $(".your-class").slick({
    speed: 900,
    slidesToShow: 2,
    dragable: true,
    centerMode: true,
    prevArrow: $(".slick-before"),
    nextArrow: $(".slick-after"),
    variableWidth: true,
    variableWidth: true,
  });
});
$(".your-class").on("afterChange", function (event, slick, currentSlide) {
  let active = + $(".slick-active").data("slickIndex");
  $('#text-change').html(active + 1)
  if (active == 0) {
    $("#titel").html("first")
    $(".description").html("lorem10")
  }
  if (active == 1) {
    $("#titel").html("second")
    $(".description").html("lorem20")
  }
  if (active == 2) {
    $("#titel").html("third")
    $(".description").html("lorem30")
  }
  $("#titel").css("clip: rect(14px, 418px, 150px, 0px);")
  TweenMax.set("#titel", {
    clip: "rect(91px,419px,150px,0px)"
  });
  TweenMax.to("#titel", {
    clip: "rect(14px, 418px, 150px, 0px)"
  });
});

$('.button-bg , .toggle ').click(function() {
  $('.button-bg').toggleClass('is-active');
});
