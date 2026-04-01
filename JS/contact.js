$(document).ready(function () {

    $("#contactForm").validate({

        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Minimum 3 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Enter a valid email"
            },
            message: {
                required: "Please enter your message",
                minlength: "Minimum 10 characters"
            }
        },

        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.reset();
        }

    });
    $(document).ready(function () {

        $(".faq-question").click(function () {

            // Close others
            $(".faq-answer").not($(this).next()).slideUp();

            // Toggle current
            $(this).next(".faq-answer").slideToggle();

        });

    });


});
