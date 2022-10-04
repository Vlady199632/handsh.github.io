/**
* popup
*/
let btnPopup = document.getElementById("logIn-btn");
let popup = document.getElementById("modal");
let close = document.getElementById("popup-close");

btnPopup.onclick = function (){
    popup.style.display="block";
};
close.onclick = function (){
    popup.style.display = "none";
};

window.onclick = function (event){

    if (event.target == popup) {
        popup.style.display = "none";
    };
};

/**
* jQuery popup
*/
// $(document).ready(function (){
//     $("#logIn-btn").click(function (){
//         $("#modal").css("display","block");
//     });
//     $("#popup-close").click(function (){
//         $("#modal").css("display","none");
//     });
// })
//


/**
* burger-menu
*/
function myFunction(x) {
    x.classList.toggle("change");
};

$(document).ready(function (){
    $("#web-menu").click(function (){
        $(".website__nav").toggleClass("menu-active");
    });
    $("#business-menu").click(function (){
        $(".business__nav").toggleClass("menu-active");
    });

/**
* owl-carousel
*/
    $("#partners-carousel").owlCarousel({
        loop:true,
        center:true,
        nav:true,
        dots:true,
        smartSpeed:450,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        dotsEach:1,
        responsive: {
            1000: {
                items: 5
            },
            600: {
                items: 3
            },
            0: {
                items: 1
            }
        }
    });
});

/**
 * slider
 */
let sliderIndex = 1;

showSlides(sliderIndex);

function plusSlider () {
    showSlides(sliderIndex += 1);
}

function  minusSlider () {
    showSlides(sliderIndex -= 1);
}

function currentSlider (n) {
    showSlides(sliderIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");

    let dots = document.getElementsByClassName("slider-dots_item");

    if (n > slides.length) {
        sliderIndex = 1;
    }

    if(n < 1) {
        sliderIndex = slides.length;
    }
    for (i = 0; i < slides.length;i++) {
        slides[i].style.display ="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dots", "");
    }

    slides[sliderIndex - 1].style.display = "flex";
    dots[sliderIndex - 1].className += " active-dots";
}





