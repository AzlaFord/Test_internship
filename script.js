$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.contact-btn').on('click', function (e) {
        e.preventDefault();
        $('#contactPopup').slideDown('slow');
        $('.popup-overlay').css('display', 'flex');
    });

    $('.close-popup').on('click', function () {
        $('#contactPopup').slideUp('slow');
    });

    $('.popup-overlay').on('click', function (e) {
        if (e.target === this) {
            $('#contactPopup').slideUp('slow');
        }
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        console.log('Form submitted:', formData);
        alert('message sent');
        $(this)[0].reset();
        $('#contactPopup').slideUp('slow');
    });

    function animateOnScroll() {
        $('.animate-on-scroll').each(function () {
            const elementTop = this.getBoundingClientRect().top;
            const windowHeight = $(window).height();
            if (elementTop < windowHeight - 100) {
                $(this).addClass('visible');
            }
        });
    }

    $('#home h1, #home p').slideDown('slow');
    animateOnScroll();
    $(window).on('scroll', animateOnScroll);
});
