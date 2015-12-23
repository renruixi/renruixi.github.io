(function ($) {
    var $body = $("body"), _sliding = false;

    function _slideIn(panel, options) {
        var panelWidth = panel.outerWidth(true), bodyAnimation = {}, panelAnimation = {};
        if (panel.is(":visible") || _sliding) {
            return
        }
        _sliding = true;
        panel.addClass("ps-active-panel").css({position: "fixed", top: 0, height: "100%", "z-index": 999999});
        panel.data(options);
        switch (options.side) {
            case"left":
                panel.css({left: "-" + panelWidth + "px", right: "auto"});
                bodyAnimation["margin-left"] = "+=" + panelWidth;
                panelAnimation.left = "+=" + panelWidth;
                break;
            case"right":
                panel.css({left: "auto", right: "-" + panelWidth + "px"});
                bodyAnimation["margin-left"] = "-=" + panelWidth;
                panelAnimation.right = "+=" + panelWidth;
                break
        }
        $body.animate(bodyAnimation, options.duration);
        panel.show().animate(panelAnimation, options.duration, function () {
            _sliding = false
        })
    }

    $.panelslider = function (element, options) {
        var active = $(".ps-active-panel");
        var defaults = {side: "left", duration: 200, clickClose: true};
        options = $.extend({}, defaults, options);
        if (active.is(":visible") && active[0] != element[0]) {
            $.panelslider.close(function () {
                _slideIn(element, options)
            })
        } else {
            if (!active.length || active.is(":hidden")) {
                _slideIn(element, options)
            }
        }
    };
    $.panelslider.close = function (callback) {
        var active = $(".ps-active-panel"), duration = active.data("duration"), panelWidth = active.outerWidth(true), bodyAnimation = {}, panelAnimation = {};
        if (!active.length || active.is(":hidden") || _sliding) {
            return
        }
        _sliding = true;
        switch (active.data("side")) {
            case"left":
                bodyAnimation["margin-left"] = "-=" + panelWidth;
                panelAnimation.left = "-=" + panelWidth;
                break;
            case"right":
                bodyAnimation["margin-left"] = "+=" + panelWidth;
                panelAnimation.right = "-=" + panelWidth;
                break
        }
        active.animate(panelAnimation, duration);
        $body.animate(bodyAnimation, duration, function () {
            active.hide();
            active.removeClass("ps-active-panel");
            _sliding = false;
            if (callback) {
                callback()
            }
        })
    };
    $(document).bind("click keyup", function (e) {
        var active = $(".ps-active-panel");
        if (e.type == "keyup" && e.keyCode != 27) {
            return
        }
        if (active.is(":visible") && active.data("clickClose")) {
            $.panelslider.close()
        }
    });
    $(document).on("click", ".ps-active-panel", function (e) {
        e.stopPropagation()
    });
    $.fn.panelslider = function (options) {
        this.click(function (e) {
            var active = $(".ps-active-panel"), panel = $(this.getAttribute("href"));
            if (active.is(":visible") && panel[0] == active[0]) {
                $.panelslider.close()
            } else {
                $.panelslider(panel, options)
            }
            e.preventDefault();
            e.stopPropagation()
        });
        return this
    }
})(jQuery);
var scrolltotop = {
    setting: {startline: 100, scrollto: 0, scrollduration: 400, fadeduration: [500, 100]},
    controlHTML: '<div class="up"></div>',
    controlattrs: {offsetx: 30, offsety: 80},
    anchorkeyword: "#top",
    state: {isvisible: false, shouldvisible: false},
    scrollup: function () {
        if (!this.cssfixedsupport) {
            this.$control.css({opacity: 0})
        }
        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        if (typeof dest == "string" && jQuery("#" + dest).length == 1) {
            dest = jQuery("#" + dest).offset().top
        } else {
            dest = 0
        }
        this.$body.animate({scrollTop: dest}, this.setting.scrollduration)
    },
    keepfixed: function () {
        var $window = jQuery(window);
        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
        var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({left: controlx + "px", top: controly + "px"})
    },
    togglecontrol: function () {
        var scrolltop = jQuery(window).scrollTop();
        if (!this.cssfixedsupport) {
            this.keepfixed()
        }
        this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false;
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({opacity: 1}, this.setting.fadeduration[0]);
            this.state.isvisible = true
        } else {
            if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({opacity: 0}, this.setting.fadeduration[1]);
                this.state.isvisible = false
            }
        }
    },
    init: function () {
        jQuery(document).ready(function ($) {
            var mainobj = scrolltotop;
            var iebrws = document.all;
            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
            mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + "</div>").css({
                position: mainobj.cssfixedsupport ? "fixed" : "absolute",
                bottom: mainobj.controlattrs.offsety,
                right: mainobj.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({title: "返回顶部"}).click(function () {
                mainobj.scrollup();
                return false
            }).appendTo("body");
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") {
                mainobj.$control.css({width: mainobj.$control.width()})
            }
            mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword + '"]').click(function () {
                mainobj.scrollup();
                return false
            });
            $(window).bind("scroll resize", function (e) {
                mainobj.togglecontrol()
            })
        })
    }
};
scrolltotop.init();