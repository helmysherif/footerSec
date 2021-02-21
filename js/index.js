$(".img1").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod1").css(`background` , `url(${imgSrc})`);
    $("section .prod1").css(`background-size` , `cover`);
})
$(".img2").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod2").css(`background` , `url(${imgSrc})`);
    $("section .prod2").css(`background-size` , `cover`);
})
$(".img3").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod3").css(`background` , `url(${imgSrc})`);
    $("section .prod3").css(`background-size` , `cover`);
})
$(".img4").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod4").css(`background` , `url(${imgSrc})`);
    $("section .prod4").css(`background-size` , `cover`);
})
$(".img5").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod5").css(`background` , `url(${imgSrc})`);
    $("section .prod5").css(`background-size` , `cover`);
})
$(".img6").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod6").css(`background` , `url(${imgSrc})`);
    $("section .prod6").css(`background-size` , `cover`);
})
$(".img7").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod7").css(`background` , `url(${imgSrc})`);
    $("section .prod7").css(`background-size` , `cover`);
})
$(".img8").click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
    let imgSrc = e.target.src;
    console.log(imgSrc);
    $("section .prod8").css(`background` , `url(${imgSrc})`);
    $("section .prod8").css(`background-size` , `cover`);
})
$(".link1").click(function(e){
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
})
$(".img2 , .img3 , .img4 , .img5 , .img6 , .img7 , .img8 , .img10").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".mins").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = seconds;
  document.getElementById("days2").innerHTML = days;
  document.getElementById("hours2").innerHTML = hours;
  document.getElementById("mins2").innerHTML = minutes;
  document.getElementById("sec2").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);