$(document).ready(function () {

    $(".faq-question").click(function () {

        // Close others
        $(".faq-answer").not($(this).next()).slideUp();

        // Toggle current
        $(this).next(".faq-answer").slideToggle();

    });

});