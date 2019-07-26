$(function() {


    // var imgIcons = $('.who__images__icons');
    // imgIcons.css('opacity', '0');

    // var imgCover = $('.who__images__cover');
    // imgCover.stop().mouseenter(function() {
    //     imgIcons.animate({
    //         'opacity': '1',
    //         'top': '50%'
    //     }, 300);
    // });
    // imgCover.mouseleave(function() {
    //     imgIcons.stop().animate({
    //         'opacity': '0',
    //         'top': '54%'
    //     }, 300);
    // });


    var pathEls = $('path');

    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];

        var offset = anime.setDashoffset(pathEl);
    }

    //
    //  anime({
    //    targets: pathEl,
    //    strokeDashoffset: [0,offset],
    //    duration: 1000,
    //    delay: 0,
    //    direction: 'alternate',
    //    easing: 'easeInOutSine',
    //    loop: true
    //  });


    //header text CSI
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function() {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 2000);


    //Parallax classes
    var rellax1 = new Rellax('.rellax1', {
        speed: -3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax2 = new Rellax('.rellax2', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax3 = new Rellax('.rellax3', {
        speed: 3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    //Scroll functions

    const mainPageScrollEffect = () => {

        ScrollReveal().reveal('.header__csi', {
            delay: 500,
            duration: 1000
        });
        ScrollReveal().reveal('.header__csi__type', {
            delay: 500,
            duration: 1200
        });
        ScrollReveal().reveal('.header__moto', {
            delay: 500,
            duration: 1400
        });



        ScrollReveal().reveal('.section__who__heading', {
            delay: 400,
            duration: 1000
        });
        ScrollReveal().reveal('.who__text', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal('.who__btn', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal('.who__images', {
            delay: 420,
            duration: 1000
        });

        var allDomainImages = document.querySelectorAll('.service__domain__image');
        var allDomainText = document.querySelectorAll('.service__domain__text');

        ScrollReveal().reveal('.section__service__heading', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal(allDomainText, {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal(allDomainImages, {
            delay: 420,
            duration: 1000,
            distance: '300px',
            origin: 'bottom'
        });

        //Section features

        ScrollReveal().reveal('.section__features__heading', {
            delay: 420,
            duration: 1000
        });
        // ScrollReveal().reveal('.features__box', {
        //     delay: 420,
        //     duration: 1000,
        //     distance: '100px',
        //     origin: 'bottom'
        // });

        //section joinUs

        ScrollReveal().reveal('.section__join__heading', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal('.join__box', {
            delay: 420,
            duration: 1000,

        });

        //section alumni

        ScrollReveal().reveal('.section__alumni__heading', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal('.alumni__container', {
            delay: 420,
            duration: 1000
        });
        ScrollReveal().reveal('.section__features', {
            delay: 420,
            duration: 1000
        });


    }

    mainPageScrollEffect();



});