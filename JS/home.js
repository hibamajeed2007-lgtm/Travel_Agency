$(document).ready(function () {


    setTimeout(function () {
        $("#popup-overlay").fadeIn();
        $("#popup-modal").fadeIn();
    }, 2000);


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


    $(".destinations li").hover(function () {
        $(this).css("color", "#327D81");
    }, function () {
        $(this).css("color", "black");
    });

});