$(document).ready(function () {

    // Show popup after 2 seconds
    setTimeout(function () {
        $("#popup-overlay").fadeIn();
        $("#popup-modal").fadeIn();
    }, 2000);

    // Close popup
    $("#close-btn, #popup-overlay").click(function () {
        $("#popup-overlay").fadeOut();
        $("#popup-modal").fadeOut();
    });
    $(".hero-content").hide().fadeIn(1500);

    $(".btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".section").offset().top
        }, 800);
    });

    // Hover effect on destinations
    $(".destinations li").hover(function () {
        $(this).css("color", "#327D81");
    }, function () {
        $(this).css("color", "black");
    });

});

document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 3,
        gap: "20px",
        autoplay: true,
        pauseOnHover: true,

        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
        },
    }).mount();
});