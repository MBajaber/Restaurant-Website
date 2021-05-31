var lastScroll = 0;

var navbar = document.querySelector(".header-bottom");

window.addEventListener("scroll", function () { 

  // Give Sticky Class To Navagator

  navbar.classList.toggle("sticky", window.scrollY >= 450);

  //  show Navagation When Scroll Back or Up

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScroll) {
    navbar.style.top = "-75px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = scrollTop;
});

//Trigger MixitUp Plugin

var containerEl = document.querySelector(".gallery-list");

var mixer = mixitup(containerEl);

$(document).ready(function () {
  //  Trigger Pogo Slider

  var mySlider = $(".pogoSlider")
    .pogoSlider({
      displayProgess: false,
    })
    .data("plugin_pogoSlider");

  // Start Header

  $(".navbar-nav li a").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");

    $(".header-bottom .navbar-collapse").fadeOut(600);

    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 60,
      },
      1000
    );
  });

  $(".header-bottom .navbar-light .navbar-toggler").on("click",function(){
    $(".header-bottom .navbar-collapse").fadeIn(400);
  });

  // Add Active On Scroll

  $(window).on("scroll", function () {
    $(".check").each(function () {
      var bookId = $(this).attr("id");

      if ($(window).scrollTop() >= $(this).offset().top - $(".sticky").innerHeight()) {
        
        $(".header-bottom .navbar-nav li a").removeClass("active");
        
        $(".header-bottom .navbar-nav li a[data-scroll ='" + bookId + "']").addClass("active");
      }
    });
  });

  // End Header

  //  Trigger owlCarousel Slider

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //    Add Class Active on Click on Gallery

  $(".ul-gallery .row > div > li").on("click", function () {
    $(this).addClass("active").parent().siblings().find("li").removeClass("active");
  });

  //  Change Guests Number on click

  var num = 1;
  $(".guests .fa-chevron-up").on("click", function () {
    if (num <= 10) {
      $(".date .guests h4").text(num++);
      $(".guests .fa-chevron-down").css("color", "#7e7e7e");
    } else {
      $(this).css("color", "rgba(126, 126, 126, .5)");
    }
  });

  $(".guests .fa-chevron-down").on("click", function () {
    if (num > 1) {
      $(".date .guests h4").text((num -= 1));
      $(".guests .fa-chevron-up").css("color", "#7e7e7e");
    } else {
      $(this).css("color", "rgba(126, 126, 126, .5)");
    }
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
});

// window.addEventListener("scroll", function () {
  
//   //  Start Stricky Navagation
//   let sticky = document.querySelector(".header-bottom");

//   sticky.classList.toggle("sticky", window.scrollY >= 450);

// })

//  Trigger WOW Plugin

new WOW().init();

