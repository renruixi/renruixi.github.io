var smy = {
    PageOne : {
        start: function (container) {
        },
        end: function (container) {
            var headbox = container.find(".smy_eye");
            headbox.delay(500).fadeIn("slow",function(){
                $(this).find(".left_eye").addClass("lefteyeChange");
                $(this).find(".right_eye").addClass("righteyeChange");
            });

            smy.animationEnd(container.find(".left_eye"), function () {
                container.find(".smy_big_head").fadeIn('slow');
            });
        },
    },
    PageTwo : {
        start: function (container) {

        },
        end: function (container) {

        },
    },
    PageThree : {
        start: function (container) {

        },
        end: function (container) {
            var smy_head = container.find(".smy_head");
            var download = container.find(".smy_download");
            smy_head.addClass("headOut");
            smy.animationEnd(smy_head, function () {
                smy_head.find(".head_before").addClass("headbg");
                download.delay(500).fadeIn("normal");
            });
        },
    },
    /* 监听动画结束并回调 */
    animationEnd : function(obj, callback){
        obj.on("animationend webkitAnimationend", callback);
    }
};


var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    preloadImages: false,
    lazyLoadingOnTransitionStart: true,
    pagination: '.swiper-pagination',
    // onSlideChangeStart: function (swiper) {
    //     var nowSlide = $('.smy_' + swiper.activeIndex+".swiper-slide-active");
    //     switch (swiper.activeIndex) {
    //         case 1 :

    //             break;
    //         case 2 :
    //             break;
    //         case 3 :
    //          break;
    //     }   
    // },
    onSlideChangeEnd: function (swiper) {
        var nowSlide = $('.smy_' + swiper.activeIndex+".swiper-slide-active");
        switch (swiper.activeIndex) {
            case 1 :
            smy.PageOne.end(nowSlide);
            break;
            case 2 :
            break;
            case 3 :
            smy.PageThree.end(nowSlide);
            break;
        }
    } 
});





