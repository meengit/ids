const idsJsModule = (function ($, ids) {
  'use strict';
  ids.sticky = function (e, t) { // element[string], target[obj]
    t.bind('load', function(){
      let eHeight = 0, 
          eTop = 0, 
          $e = $(e);
    
      pos();
    
      function pos() {
        eHeight = $e.height();
        eTop = (t.scrollTop()+t.height()-eHeight)+'px';
        console.log($(document.body).height());
        console.log(t.height());
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
      
    }); // end of bind
  }; // end of ids.sticky
  return ids;
}(jQuery, idsJsModule || {}));

(function ($, idsJsModule) {
  'use strict';
  $(document).ready(function () {
    idsJsModule.sticky('#footerline',$(window));
  });
}(jQuery, idsJsModule));

