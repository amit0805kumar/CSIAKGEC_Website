$(function () {


    var imgIcons = $('.who__images__icons');
    imgIcons.css('opacity', '0');

    var imgCover = $('.who__images__cover');
    imgCover.stop().mouseenter(function () {
        imgIcons.animate({
            'opacity': '1',
            'top': '50%'
        }, 300);
    });
    imgCover.mouseleave(function () {
        imgIcons.stop().animate({
                'opacity': '0',
                'top': '54%'
            },300
        );
    });

});
