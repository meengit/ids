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

export function resizeToViewportHeight(element) {
  let eleH = element.height();
  let winH = $(window).height();
  let heaH = $('header').height();
  let fotH = $('footer').height();

  if (winH - heaH - fotH > eleH + heaH + fotH) {
    element.css('height', (winH - heaH - fotH) + 'px');
  }
}

export function removeEvtListener(element) {
  let elClone = element.clone(true);
  element.replaceWith(elClone);
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

export function toggleTop(obj, evt) {
  document.getElementById(obj).addEventListener(evt, (e) => {
    e.preventDefault();
    $('nav').animate({
      height: 'toggle'
    }, 200, () => {
    ($('nav').is(':visible')) ? $('body').addClass('no-scroll') : $('body').removeClass('no-scroll');
    });
    // end of nav.animate
  }, false);
}
// end of ids.nav
