(function ($, window, document, undefined) {
    $.fn.mailIt = function (options) {
        var settings = $.extend({
            dummy: '-REMOVE-THIS-',
            at: '\\[at\\]',
            dot: '\\[dot\\]'
        }, options);
        return this.each(function () {
            var $me = $(this)
            ,a = $me.text().replace(new RegExp(settings.dummy, "g"), '').replace(new RegExp(settings.at, "g"), '&#64;').replace(new RegExp(settings.dot, "g"), '&#46;');
            $(this).replaceWith('<a href="mailto:' + a + '" class="email">' + a + '</a>')
        });
    }
}(jQuery));