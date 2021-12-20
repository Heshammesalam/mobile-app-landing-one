$(document).ready(function () {

  $(window).on("load", function () {
    $(".preload").fadeOut("slow");
  });
  /*-----navbar-shirnk-----*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  /*---popup-vedio-setting----*/
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn,.video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  /*----- features-carousel------ */
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*----- features-carousel------ */
  $(".screenhots-caruosel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /*----- testimonial-carousel------ */
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*----- team-carousel------ */
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /*------scrolling-----*/
  $.scrollIt({
    topOffset: -50,
  });
  /*navbar-collapse */
  $(".navbar .nav-item .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /***dark-light-mode */
  function toggleTheme() {
    if (localStorage.getItem("hesham-theme") !== null) {
      if (localStorage.getItem("hesham-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("hesham-theme", "dark");
    } else {
      localStorage.setItem("hesham-theme", "light");
    }
    updateIcon();
  });
  /*update-icon*/
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }
});
