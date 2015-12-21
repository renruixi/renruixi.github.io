var mySwiper;
mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    preloadImages: false,
    lazyLoadingOnTransitionStart: true,
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination',
    onSlideChangeStart: function (swiper) {
        var nowSlide = $('.slide_' + swiper.activeIndex);
        switch (swiper.activeIndex) {
            case 1 :
                break;
            case 2 :
                break;
            case 3 :
                var title = $('#title');
                nowSlide.children(".left_section").addClass("leftDown");
                nowSlide.children(".right_section").addClass("rightUp");
                animationEnd(nowSlide.children(".right_section"), function () {
                    $('#title').addClass("textMove");
                    animationEnd(title, function () {
                        title.find(".before").addClass("bgMove");
                    });
                });
                break;
        }
    },
    onSlideChangeEnd: function (swiper) {
        var nowSlide = $('.slide_' + swiper.activeIndex);
        switch (swiper.activeIndex) {
            case 1 :
                break;
            case 2 :
                var move = $("#kobeMove");
                move.addClass("kobeMove kobeanimate");
                break;
            case 3 :
                break;
        }
    }
});

var sildeOne = {
    start: function () {

    },
    end: function () {

    },
};

var sildeTwo = {
    start: function () {

    },
    end: function () {

    },
};

var sildeThree = {
    start: function () {

    },
    end: function () {

    },
};

var animationEnd = function (obj, callback) {
    obj.on("animationend webkitAnimationend", callback);
}