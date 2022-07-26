/* eDetailer v1.0 */

var eDetailer = function(options) {

    var defaults = {};

    var module = {};
    var settings = $.extend({}, defaults, options);

    var init = function() {};

    var isActive = function() {

        return $('body').hasClass('eDetailer');

    };

    var getInteractionsStatus = function() {

        return !$('body').hasClass('eDetailer-interactions-off');

    };

    var getAnimationsStatus = function() {

        return !$('body').hasClass('eDetailer-animations-off');

    };

    var getScreenshotsStatus = function() {

        return $('body').hasClass('eDetailer-screenshots');

    };

    var setScroll = function(iScrollName, value) {

        eval(iScrollName).scrollTo(0, value);

        return false;

    };

    var getIScrollOuterHeight = function(iScrollName) {

        var iScrollOuter = $('[data-iscroll="' + iScrollName + '"]').parent();
        var offset = parseInt(iScrollOuter.attr('data-offset'));

        return iScrollOuter.height()+offset;

    };

    var getIScrollInnerHeight = function(iScrollName) {

        var iScrollInner = $('[data-iscroll="' + iScrollName + '"]');

        return iScrollInner.height();

    };

    init();

    return {

        isActive: isActive,
        getInteractionsStatus: getInteractionsStatus,
        getAnimationsStatus: getAnimationsStatus,
        getScreenshotsStatus: getScreenshotsStatus,
        setScroll: setScroll,
        getIScrollOuterHeight: getIScrollOuterHeight,
        getIScrollInnerHeight: getIScrollInnerHeight

    };

};

var edetailer = eDetailer();