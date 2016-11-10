'use strict';

var idsJsModule = function ($, ids) {
  'use strict';

  ids.sticky = function (e, t) {
    // element[string], target[obj]
    t.bind('load', function () {
      var eHeight = 0,
          eTop = 0,
          $e = $(e);

      pos();

      function pos() {
        eHeight = $e.height();
        eTop = t.scrollTop() + t.height() - eHeight + 'px';
        if ($(document.body).height() < t.height()) {
          $e.css({
            position: "absolute"
          }).animate({
            top: eTop
          });
        } else {
          $e.css({
            position: "static"
          });
        } // end of if else
      } // end of fn pos

      $(window).scroll(pos).resize(pos);
    }); // end of bind
  }; // end of ids.sticky

  ids.animInOut = function (obj) {
    document.getElementById(obj).addEventListener('touchend', function (e) {
      e.preventDefault();
      var touch = e.touches[0];
      // console.log(e.target);
      $('nav').animate({
        height: 'toggle'
      }, 200, function () {
        console.log('Animation complete');
      }); // end of nav.animate
    }, false);
  }; // end of ids.nav
  return ids;
}(jQuery, idsJsModule || {});

(function ($, idsJsModule) {
  'use strict';

  $(document).ready(function () {
    idsJsModule.sticky('#footerline', $(window));
    $(window).width() < 1024 ? $('nav').toggle() : console.log('Desktop ui');
    idsJsModule.animInOut('btn_mobilenav');
  });
})(jQuery, idsJsModule);
//# sourceMappingURL=main.js.map
