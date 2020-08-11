$(function () {
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav, .mainTitle, main, body, .mainVisual').toggleClass('show');
    });

    var _window = $(window),
        _header = $('.headerInner'),
        heroBottom;

    _window.on('scroll', function () {
        heroBottom = $('.mainVisual').height();
        if (_window.scrollTop() > heroBottom - 81) {
            _header.addClass('transform');
        } else {
            _header.removeClass('transform');
        }
    });

    var windowWidth = $(window).width();
    var headerHight = 80;
    $('a[href^="#"]').click(function () {
        $('.nav_toggle, .nav, .mainTitle, main, body, .mainVisual').removeClass('show');
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('body,html').animate({scrollTop: position}, speed, 'swing');
        return false;
    });

});
