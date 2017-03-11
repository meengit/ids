export class Mql {
  constructor() {
    this.init = function () {
      if (!this.afterElement) {
        // If the browser doesn't support window.getComputedStyle just return
        return;
      }
      this._resizeListener(); // eslint-disable-line no-underscore-dangle
    };

    this._resizeListener = function () { // eslint-disable-line no-underscore-dangle
      $(window).on('resize orientationchange load', () => {
        this.currentBreakpoint = this.afterElement.getPropertyValue('content');
        if (this.currentBreakpoint !== this.lastBreakpoint) {
          $(window).trigger('breakpoint-change', this.currentBreakpoint);
          this.lastBreakpoint = this.currentBreakpoint;
        }
      });
    };
  }
  // end of constructor

  MediaQueryListener() {
    this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
    this.currentBreakpoint = '';
    this.lastBreakpoint = '';
    this.init();
  }
}

// element[string], target[obj]
export function sticky(e, t) {
  t.bind('load', () => {
    let eHeight = 0;
    let eTop = 0;
    let $e = $(e);

    function pos() {
      eHeight = $e.height();
      eTop = t.scrollTop()+t.height()-eHeight+'px';
      if ($(document.body).height() < t.height()) {
        $e.css({
          position: 'absolute'
        }).animate({
          top: eTop
        });
      } else {
        $e.css({
          position: 'static'
        });
      }
    }

    pos();
    $(window).scroll(pos).resize(pos);
  });
    // end of bind
}
  // end of ids.sticky
