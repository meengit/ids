import { Mql, sticky, toggleTop } from './utils';

(($) => {
  let mql = new Mql();
  mql.MediaQueryListener();

  $(window).on('breakpoint-change', (e, breakpoint) => {
    if (breakpoint.search('small') >= 0) {
      $(document).ready(() => {
        $(window).width() < 1024 ? $('nav').toggle() : sticky('#footerline', $(window));
        toggleTop('btn_mobilenav', 'click');
        toggleTop('btn_mobilenav', 'touchend');
      });
      console.log('small'); // eslint-disable-line no-console
    }

    if (breakpoint.search('medium') >= 0) {
      // document.body.innerHTML = 'CSS Breakpoint screen-medium';
      // console.log('medium');
    }

    if (breakpoint.search('large') >= 0) {
      // document.body.innerHTML = 'CSS Breakpoint screen-large';
      // console.log('large');
    }
  });
})(jQuery);
