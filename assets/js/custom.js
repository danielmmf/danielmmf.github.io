$(document).ready(function() {

  // On Scroll   
  $(window).scroll(function() {
    "use strict";
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".navigation").addClass("fixed-navbar");
    } else {
      $(".navigation").removeClass("fixed-navbar");
    }
  });

  // Mobile hide collapse
  $('.navigation a').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Smooth Scrolling
  $(".navigation a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 2000, function() {
      window.location.hash = hash;
    });
  });

  /* Form
  $('#find_location').on('click', function(e) {
    e.preventDefault();
   // alert("clicamos");
    var emailInput =  $.trim($(".email-capture").val());
    var form = $(this);
    //var post_url = form.attr('action');
    var post_data = {"username":emailInput};

    $('.error-msg').hide();
    $('#feature-bullet').hide();

    if (emailInput.length > 0) {
      $.ajax({
        type: 'POST',
        url: '/api/twitter/location',
        data: post_data,
        success: function(data) {
          $('#feature-bullet').show();
          $(".nome_usuario").html(data.name);
          $(".description_usuario").html(data.description);
          //$(".desc").html("local de um usuario ja consultado");
          //$("#local_usuario").html(data.location);
          $("#location_name").html(data.location_name);
          $("#img_usuario").attr("src",data.image);
          $("#data_usuario").html(data.desde);
          $("#background_usuario").attr("src",data.background_image);
          $("#local_usuario").attr("href", data.location);
          $('#thank-you').modal('toggle')
        }
      });
    } else {
      $('.error-msg').show();
    }
    e.preventDefault();
  });*/

  // Screenshots
  var gallery = $('.screenshot a').simpleLightbox();
  
  // Testimnials Carousel
  $('.testimonial-listing').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});