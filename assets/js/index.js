//-----------------------------------navbar---------------------------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}


//------------------------------------------------slider---------------------------------------------
$(document).ready(function () {
    $('.slider-content').slick({
        infinite: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Change slide every 2 seconds
        slidesToShow: 7, // Default: 3 slides on large screens
        slidesToScroll: 1, // Scroll 1 logo at a time
        dots: false, // Remove dots
        arrows: false, // Hide prev/next arrows
        responsive: [
            {
                breakpoint: 991.98, // Large screens (lg)
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 767.98, // Medium screens (md)
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 575.98, // Small screens (sm)
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

//----------------------------------------------back to top------------------------------------------------
const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
