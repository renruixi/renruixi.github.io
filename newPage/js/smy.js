var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    preloadImages: false,
    lazyLoadingOnTransitionStart: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    onSlideChangeStart: function (swiper) {
        var nowSlide = $('.slide_' + swiper.activeIndex);
        switch (swiper.activeIndex) {
            case 1 :
            break;
            case 2 :
            break;
            case 3 :
                sildeThree.emd();
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
    start: function (container) {

    },
    end: function (container) {

    },
};

var sildeTwo = {
    start: function (container) {

    },
    end: function (container) {

    },
};

var sildeThree = {
    start: function (container) {

    },
    end: function (nowSlide) {
        var text = nowSlide.find(".slide_3_text");
        nowSlide.children(".left_section").addClass("leftDown");
        nowSlide.children(".right_section").addClass("rightUp");
        animationEnd(nowSlide.children(".right_section"), function () {
            text.addClass("textMove");
            animationEnd(text, function () {
                text.find(".before").addClass("bgMove");
            });
        });
    },
};

var animationEnd = function (obj, callback) {
    obj.on("animationend webkitAnimationend", callback);
}