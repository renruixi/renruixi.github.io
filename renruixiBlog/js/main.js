/**
 * Created by ASUS on 2015/12/22.
 */
$(function () {


    seajs.use("./js/weather.js", function (GLoc) {
        GLoc.init();
    });


})