//-----------------------------------navbar---------------------------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-shadow");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


//------------------------------------------------slider---------------------------------------------
$('.slider-content').slick({
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
});
//----------------------------------------------back to top------------------------------------------------
const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
