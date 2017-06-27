import * as config from './config';
import { Mql, removeEvtListener, resizeToViewportHeight, toggleTop } from './utils';

(($) => {
  let mql = new Mql();
  mql.MediaQueryListener();
  function logobar(obj, media) {
    let links = $(obj).find('a');
    let imgs = $(obj).find('img');
    let logos = [ config.GHB_LOGO, config.GFZ_LOGO, config.MFF_LOGO ];
    let urls = [ config.GHB_LINK, config.GFZ_LINK, config.MFF_LINK ];
    let logoBasePath = config.LOCATION.origin + '/ids' + config.IMG_DIR + config.LOGOBAR;

    function setAttr(elements, values, attribute) {
      $(elements).each(function (index, element) {
        $(element).attr(attribute, values[index]);
      });
    }

    let setLogoUrl = (device) => {
      for (let i = 0; i < logos.length; i = i + 1) {
        logos[i] = logoBasePath + device + logos[i];
      }
      return logos;
    };

    if (media === 'm') {
      setAttr(links, urls, 'href');
      setAttr(imgs, setLogoUrl(config.MOBILE), 'src');
    }

    if (media === 'd') {
      setAttr(links, urls, 'href');
      setAttr(imgs, setLogoUrl(config.DESK), 'src');
    }
  }

  $(document).ready(function () {
    $(window).on('breakpoint-change', (e, breakpoint) => {
      if (breakpoint.search('mini') >= 0) {
        logobar('#logobar', 'm');
        $('nav').toggle();
        toggleTop('btn_mobilenav', 'click');
        toggleTop('btn_mobilenav', 'touchend');
        console.log('mini', breakpoint.length); // eslint-disable-line no-console
      }

      if (breakpoint.search('small') >= 0) {
        logobar('#logobar', 'm');
        $('nav').toggle();
        toggleTop('btn_mobilenav', 'click');
        toggleTop('btn_mobilenav', 'touchend');
        console.log('small'); // eslint-disable-line no-console
      }

      if (breakpoint.search('medium') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show().find('a[href="'+ config.LOCATION.pathname +'"]').addClass('active');
        removeEvtListener($('#btn_mobilenav'));
        console.log('medium'); // eslint-disable-line no-console
      }

      if (breakpoint.search('large') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        $('nav').find('a[href="'+ config.LOCATION.pathname +'"]').addClass('active');
        removeEvtListener($('#btn_mobilenav'));
        console.log('large'); // eslint-disable-line no-console
      }

      if (breakpoint.search('extra') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        $('nav').find('a[href="'+ config.LOCATION.pathname +'"]').addClass('active');
        removeEvtListener($('#btn_mobilenav'));
        resizeToViewportHeight($('article'));
        console.log('extra'); // eslint-disable-line no-console
      }
    });
    // end of window breakpoint-change
  });
  // end of document ready by jQuery
})(jQuery);
