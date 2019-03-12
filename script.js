   $(function () {

       /*   var rellax1 = new Rellax('.rellax1', {
              speed: -7,
              center: false,
              wrapper: null,
              round: true,
              vertical: true,
              horizontal: false
          });

          var rellax2 = new Rellax('.rellax2', {
              speed: -5,
              center: false,
              wrapper: null,
              round: true,
              vertical: true,
              horizontal: false
          });
          var rellax4 = new Rellax('.rellax4', {
              speed: -3,
              center: false,
              wrapper: null,
              round: true,
              vertical: true,
              horizontal: false
          });
          var rellax3 = new Rellax('.rellax3', {
              speed: 0,
              center: false,
              wrapper: null,
              round: true,
              vertical: true,
              horizontal: false
          });
          var rellax5 = new Rellax('.rellax5', {
              speed: 2,
              center: false,
              wrapper: null,
              round: true,
              vertical: true,
              horizontal: false
          });*/


       var mainLinks = $('.main__links');
       var arrow = $('.arrow');
       var memberLinks = $('.memberLinks');
       var workshopLinks = $('.workshopLinks');
       var eventLinks = $(".eventLinks");
       var replacableLinks = $(".replacing__links");


       $('.navigation__button').click(function () {
           $('.navigation__button').toggleClass("nav__active");
       });

       $('input[type="checkbox"]').click(function () {
           if ($(this).prop("checked") == true) {
               $('#menu__section').addClass("expand");
               $(".menu__logo__section-img").toggleClass('movelogo');
               $(".menu__logo__section").css("width", "30%");


               mainLinks.removeClass('hideLinks');
               arrow.addClass('hideArrow');
               replacableLinks.removeClass('showRLinks');

           } else if ($(this).prop("checked") == false) {
               $('#menu__section').removeClass("expand");
               $(".menu__logo__section-img").toggleClass('movelogo');
               $(".menu__logo__section").css("width", "0%");


               mainLinks.addClass('hideLinks');
               arrow.addClass('hideArrow');
               replacableLinks.removeClass('showRLinks');
           }
       });



       $('.expMem').click(function () {
           hideLinks();
           memberLinks.toggleClass('showRLinks');


       });

       $('.expWorkshop').click(function () {
           hideLinks();
           workshopLinks.toggleClass('showRLinks');


       });

       $('.expEvents').click(function () {
           hideLinks();
           eventLinks.toggleClass('showRLinks');
       });

       $('.arrow').click(function () {
           mainLinks.removeClass('hideLinks');
           arrow.addClass('hideArrow');
           replacableLinks.removeClass('showRLinks');
       });

       function hideLinks() {
           mainLinks.toggleClass('hideLinks');
           arrow.toggleClass('hideArrow');
       }

   });
