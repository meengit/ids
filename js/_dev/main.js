const idsJsModule = (function ($, ids) {
  'use strict';
  ids.sticky = (e, t) => { // element[string], target[obj]
    t.bind('load', () => {
      let eHeight = 0, 
          eTop = 0, 
          $e = $(e);
    
      pos();
    
      function pos() {
        eHeight = $e.height();
        eTop = (t.scrollTop()+t.height()-eHeight)+'px';
        if ( ($(document.body).height()) < t.height()) {
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
      
    } // end of bind
  } // end of ids.sticky
  
  ids.nav = (obj) => {
    // none
  } // end of ids.nav
  return ids;
}(jQuery, idsJsModule || {}));

(function ($, idsJsModule) {
  'use strict';
  $(document).ready(function () {
    idsJsModule.sticky('#footerline',$(window));
    document.getElementById(obj).addEventListener('touchend', (e) => {
      e.preventDefault();
      var touch = e.touches[0];
      console.log('Test', touch.pageX + " - " + touch.pageY);
    }, false);
  });
}(jQuery, idsJsModule));

