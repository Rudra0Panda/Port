
$("#menu_trigger").click(function(){
  $(".menu").toggleClass("is-active");
  $("#menu_trigger").toggleClass('clicked')
  $(".logo , #social").toggleClass("hidden")
  $("html , body").toggleClass('overflow-hidden')
});

let Ccursor = document.querySelector(".cursor")
window.addEventListener('mousemove', cursor)

function cursor(e){
  Ccursor.style.top = e.pageY + "px";
  Ccursor.style.left = e.pageX + "px";
}
$('a , button , .underline  ,.link').mouseover(function(){
  $(".cursor").addClass("grow");
  $(".cursor>svg").show();
  $(".cursor>a").html("click")
})
$('a , button , .underline , .link ').mouseleave(function(){
  $(".cursor").removeClass("grow");
  $(".cursor>svg").hide();
})
// $("#works").mouseover(
//   function(){
// $(".ims").addClass('work-bg')
//   }
// )
// $("#works").mouseleave(
//   function(){
// $(".ims").removeClass('work-bg')
//   }
// )

// $("#about").mouseover(
//   function(){
// $(".ims").addClass('about-bg')
//   }
// )
// $("#about").mouseleave(
//   function(){
// $(".ims").removeClass('about-bg')
//   }
// )

