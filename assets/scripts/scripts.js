$("header .container .menu-hamburger").click(function(){
  $('header .container nav').toggleClass('ativo');
});


// SWIPER


// Swiper sobre

var swiperSobre = new Swiper(".swiper-sobre", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});


// Swiper Matrizes

var swiperRacas = new Swiper(".swiper-racas", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  jQuery(".filtro").on("click", function(){

    var filter = jQuery(this).data("topico");

    jQuery(".filtro").removeClass("ativo");
    jQuery(this).addClass("ativo");

      jQuery("#raca .swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
      jQuery("[data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();

      swiperRacas.destroy();
      swiperRacas = new Swiper(".swiper-racas", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          601: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
  });

  // Swiper avaliações

  var swiperAvaliacoes = new Swiper(".swiper-avaliacoes", {
    loop: true,
    navigation: {
      nextEl: ".proximo-avaliacoes",
      prevEl: ".anterior-avaliacoes",
    },
  });