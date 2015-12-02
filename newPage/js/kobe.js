var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    preloadImages:false,
    lazyLoadingOnTransitionStart : true,
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination',
    onSlideChangeStart: function (swiper) {
        var nowSlide = $('.slide_'+swiper.activeIndex);
        switch (swiper.activeIndex) {
            case 1 :
                break;
            case 2 :
                break;
            case 3 :
                nowSlide.children(".left_section").addClass("leftDown");
                nowSlide.children(".right_section").addClass("rightUp");
                break;
        }
    },
    onSlideChangeEnd: function (swiper) {
        var nowSlide = $('.slide_'+swiper.activeIndex);
        switch (swiper.activeIndex) {
            case 1 :
                break;
            case 2 :
                var move = $("#kobeMove");
                move.addClass("kobeMove kobeanimate")
                break;
            case 3 :
                break;
        }
    }
});

var animationEnd = function () {
    
}