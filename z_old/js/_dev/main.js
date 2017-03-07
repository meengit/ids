const idsJsModule = (($, ids) => {
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
      
    }); // end of bind
  } // end of ids.sticky
  
  ids.toggleTop = (obj, evt) => {
    document.getElementById(obj).addEventListener(evt, (e) => {
      e.preventDefault();
      $('nav').animate({
          height: 'toggle'
        }, 200, () => {
        ($('nav').is(':visible')) ? $('article').css('display','none') : $('article').css('display','block');
      }); // end of nav.animate
    }, false);
  } // end of ids.nav
  return ids;
})(jQuery, idsJsModule || {});

(($, idsJsModule) => {
  'use strict';
  $(document).ready(() => {
    ($(window).width() < 1024) ? $('nav').toggle() : idsJsModule.sticky('#footerline',$(window));
    idsJsModule.toggleTop('btn_mobilenav','click');
    idsJsModule.toggleTop('btn_mobilenav','touchend');
  });
})(jQuery, idsJsModule);

console.log(window);

