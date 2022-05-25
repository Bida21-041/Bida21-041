let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


var swiper = new Swiper(".mySwiper", {
 slideperview: 3,
 loop: true,
 spacebetween: 4,
 autoplay: {
     delay:4000,
     disableOnInteraction: false,
 },
 breakpoints: {
     0: {
         slidesPerView: 1,
     },
    550: {
     slidesPerView: 2,
    },
    800: {
     slidesPerview: 3,
    },
    1000: {
     slidesPerView: 3,
    },
    },
pagnation: {
    el: ".swiper-pagnation",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: "swiper-button-prev",
},
});

 // Swiper
 var swiper = new Swiper(".coming-container", {
    loop: true,
    spacebetween: 20,
    autoplay: {
        delay:55000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
       568: {
        slidesPerView: 2,
       },
       768: {
        slidesPerview: 3,
       },
       968: {
        slidesPerView: 3,
       },
       },
    });

        