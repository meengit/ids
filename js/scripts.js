(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _utils = require('./utils');

(function ($) {
  var mql = new _utils.Mql();
  mql.MediaQueryListener();

  $(window).on('breakpoint-change', function (e, breakpoint) {
    if (breakpoint.search('small') >= 0) {
      $(document).ready(function () {
        $(window).width() < 1024 ? $('nav').toggle() : (0, _utils.sticky)('#footerline', $(window));
        (0, _utils.toggleTop)('btn_mobilenav', 'click');
        (0, _utils.toggleTop)('btn_mobilenav', 'touchend');
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

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.sticky = sticky;
exports.toggleTop = toggleTop;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mql = exports.Mql = function () {
  function Mql() {
    _classCallCheck(this, Mql);

    this.init = function () {
      if (!this.afterElement) {
        // If the browser doesn't support window.getComputedStyle just return
        return;
      }
      this._resizeListener(); // eslint-disable-line no-underscore-dangle
    };

    this._resizeListener = function () {
      var _this = this;

      // eslint-disable-line no-underscore-dangle
      $(window).on('resize orientationchange load', function () {
        _this.currentBreakpoint = _this.afterElement.getPropertyValue('content');
        if (_this.currentBreakpoint !== _this.lastBreakpoint) {
          $(window).trigger('breakpoint-change', _this.currentBreakpoint);
          _this.lastBreakpoint = _this.currentBreakpoint;
        }
      });
    };
  }
  // end of constructor

  _createClass(Mql, [{
    key: 'MediaQueryListener',
    value: function MediaQueryListener() {
      this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
      this.currentBreakpoint = '';
      this.lastBreakpoint = '';
      this.init();
    }
  }]);

  return Mql;
}();

// element[string], target[obj]


function sticky(e, t) {
  t.bind('load', function () {
    var eHeight = 0;
    var eTop = 0;
    var $e = $(e);

    function pos() {
      eHeight = $e.height();
      eTop = t.scrollTop() + t.height() - eHeight + 'px';
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

function toggleTop(obj, evt) {
  console.log('in toggletop');
  document.getElementById(obj).addEventListener(evt, function (e) {
    e.preventDefault();
    $('nav').animate({
      height: 'toggle'
    }, 200, function () {
      $('nav').is(':visible') ? $('article').css('display', 'none') : $('article').css('display', 'block');
    });
    // end of nav.animate
  }, false);
}
// end of ids.nav

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvbWFpbi5qcyIsIl9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsQ0FBQyxVQUFDLENBQUQsRUFBTztBQUNOLE1BQUksTUFBTSxnQkFBVjtBQUNBLE1BQUksa0JBQUo7O0FBRUEsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLG1CQUFiLEVBQWtDLFVBQUMsQ0FBRCxFQUFJLFVBQUosRUFBbUI7QUFDbkQsUUFBSSxXQUFXLE1BQVgsQ0FBa0IsT0FBbEIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkMsUUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFNO0FBQ3RCLFVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsSUFBcEIsR0FBMkIsRUFBRSxLQUFGLEVBQVMsTUFBVCxFQUEzQixHQUErQyxtQkFBTyxhQUFQLEVBQXNCLEVBQUUsTUFBRixDQUF0QixDQUEvQztBQUNBLDhCQUFVLGVBQVYsRUFBMkIsT0FBM0I7QUFDQSw4QkFBVSxlQUFWLEVBQTJCLFVBQTNCO0FBQ0QsT0FKRDtBQUtBLGNBQVEsR0FBUixDQUFZLE9BQVosRUFObUMsQ0FNYjtBQUN2Qjs7QUFFRCxRQUFJLFdBQVcsTUFBWCxDQUFrQixRQUFsQixLQUErQixDQUFuQyxFQUFzQztBQUNwQztBQUNBO0FBQ0Q7O0FBRUQsUUFBSSxXQUFXLE1BQVgsQ0FBa0IsT0FBbEIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkM7QUFDQTtBQUNEO0FBQ0YsR0FuQkQ7QUFvQkQsQ0F4QkQsRUF3QkcsTUF4Qkg7Ozs7Ozs7Ozs7O1FDNkJnQixNLEdBQUEsTTtRQTZCQSxTLEdBQUEsUzs7OztJQTVESCxHLFdBQUEsRztBQUNYLGlCQUFjO0FBQUE7O0FBQ1osU0FBSyxJQUFMLEdBQVksWUFBWTtBQUN0QixVQUFJLENBQUMsS0FBSyxZQUFWLEVBQXdCO0FBQ3RCO0FBQ0E7QUFDRDtBQUNELFdBQUssZUFBTCxHQUxzQixDQUtFO0FBQ3pCLEtBTkQ7O0FBUUEsU0FBSyxlQUFMLEdBQXVCLFlBQVk7QUFBQTs7QUFBRTtBQUNuQyxRQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsK0JBQWIsRUFBOEMsWUFBTTtBQUNsRCxjQUFLLGlCQUFMLEdBQXlCLE1BQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsU0FBbkMsQ0FBekI7QUFDQSxZQUFJLE1BQUssaUJBQUwsS0FBMkIsTUFBSyxjQUFwQyxFQUFvRDtBQUNsRCxZQUFFLE1BQUYsRUFBVSxPQUFWLENBQWtCLG1CQUFsQixFQUF1QyxNQUFLLGlCQUE1QztBQUNBLGdCQUFLLGNBQUwsR0FBc0IsTUFBSyxpQkFBM0I7QUFDRDtBQUNGLE9BTkQ7QUFPRCxLQVJEO0FBU0Q7QUFDRDs7Ozt5Q0FFcUI7QUFDbkIsV0FBSyxZQUFMLEdBQW9CLE9BQU8sZ0JBQVAsR0FBMEIsT0FBTyxnQkFBUCxDQUF3QixTQUFTLElBQWpDLEVBQXVDLFFBQXZDLENBQTFCLEdBQTZFLEtBQWpHO0FBQ0EsV0FBSyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFdBQUssY0FBTCxHQUFzQixFQUF0QjtBQUNBLFdBQUssSUFBTDtBQUNEOzs7Ozs7QUFHSDs7O0FBQ08sU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCO0FBQzNCLElBQUUsSUFBRixDQUFPLE1BQVAsRUFBZSxZQUFNO0FBQ25CLFFBQUksVUFBVSxDQUFkO0FBQ0EsUUFBSSxPQUFPLENBQVg7QUFDQSxRQUFJLEtBQUssRUFBRSxDQUFGLENBQVQ7O0FBRUEsYUFBUyxHQUFULEdBQWU7QUFDYixnQkFBVSxHQUFHLE1BQUgsRUFBVjtBQUNBLGFBQU8sRUFBRSxTQUFGLEtBQWMsRUFBRSxNQUFGLEVBQWQsR0FBeUIsT0FBekIsR0FBaUMsSUFBeEM7QUFDQSxVQUFJLEVBQUUsU0FBUyxJQUFYLEVBQWlCLE1BQWpCLEtBQTRCLEVBQUUsTUFBRixFQUFoQyxFQUE0QztBQUMxQyxXQUFHLEdBQUgsQ0FBTztBQUNMLG9CQUFVO0FBREwsU0FBUCxFQUVHLE9BRkgsQ0FFVztBQUNULGVBQUs7QUFESSxTQUZYO0FBS0QsT0FORCxNQU1PO0FBQ0wsV0FBRyxHQUFILENBQU87QUFDTCxvQkFBVTtBQURMLFNBQVA7QUFHRDtBQUNGOztBQUVEO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixHQUFqQixFQUFzQixNQUF0QixDQUE2QixHQUE3QjtBQUNELEdBdkJEO0FBd0JBO0FBQ0Q7QUFDRDs7QUFFTyxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkI7QUFDbEMsVUFBUSxHQUFSLENBQVksY0FBWjtBQUNBLFdBQVMsY0FBVCxDQUF3QixHQUF4QixFQUE2QixnQkFBN0IsQ0FBOEMsR0FBOUMsRUFBbUQsVUFBQyxDQUFELEVBQU87QUFDeEQsTUFBRSxjQUFGO0FBQ0EsTUFBRSxLQUFGLEVBQVMsT0FBVCxDQUFpQjtBQUNmLGNBQVE7QUFETyxLQUFqQixFQUVHLEdBRkgsRUFFUSxZQUFNO0FBQ2IsUUFBRSxLQUFGLEVBQVMsRUFBVCxDQUFZLFVBQVosQ0FBRCxHQUE0QixFQUFFLFNBQUYsRUFBYSxHQUFiLENBQWlCLFNBQWpCLEVBQTRCLE1BQTVCLENBQTVCLEdBQWtFLEVBQUUsU0FBRixFQUFhLEdBQWIsQ0FBaUIsU0FBakIsRUFBNEIsT0FBNUIsQ0FBbEU7QUFDQyxLQUpEO0FBS0E7QUFDRCxHQVJELEVBUUcsS0FSSDtBQVNEO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTXFsLCBzdGlja3ksIHRvZ2dsZVRvcCB9IGZyb20gJy4vdXRpbHMnO1xuXG4oKCQpID0+IHtcbiAgbGV0IG1xbCA9IG5ldyBNcWwoKTtcbiAgbXFsLk1lZGlhUXVlcnlMaXN0ZW5lcigpO1xuXG4gICQod2luZG93KS5vbignYnJlYWtwb2ludC1jaGFuZ2UnLCAoZSwgYnJlYWtwb2ludCkgPT4ge1xuICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnc21hbGwnKSA+PSAwKSB7XG4gICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICQod2luZG93KS53aWR0aCgpIDwgMTAyNCA/ICQoJ25hdicpLnRvZ2dsZSgpIDogc3RpY2t5KCcjZm9vdGVybGluZScsICQod2luZG93KSk7XG4gICAgICAgIHRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsICdjbGljaycpO1xuICAgICAgICB0b2dnbGVUb3AoJ2J0bl9tb2JpbGVuYXYnLCAndG91Y2hlbmQnKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ3NtYWxsJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnbWVkaXVtJykgPj0gMCkge1xuICAgICAgLy8gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnQ1NTIEJyZWFrcG9pbnQgc2NyZWVuLW1lZGl1bSc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbWVkaXVtJyk7XG4gICAgfVxuXG4gICAgaWYgKGJyZWFrcG9pbnQuc2VhcmNoKCdsYXJnZScpID49IDApIHtcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJ0NTUyBCcmVha3BvaW50IHNjcmVlbi1sYXJnZSc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbGFyZ2UnKTtcbiAgICB9XG4gIH0pO1xufSkoalF1ZXJ5KTtcbiIsImV4cG9ydCBjbGFzcyBNcWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuYWZ0ZXJFbGVtZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBqdXN0IHJldHVyblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgfTtcblxuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBsb2FkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gdGhpcy5hZnRlckVsZW1lbnQuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QnJlYWtwb2ludCAhPT0gdGhpcy5sYXN0QnJlYWtwb2ludCkge1xuICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdicmVha3BvaW50LWNoYW5nZScsIHRoaXMuY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgIHRoaXMubGFzdEJyZWFrcG9pbnQgPSB0aGlzLmN1cnJlbnRCcmVha3BvaW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG4gIE1lZGlhUXVlcnlMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmFmdGVyRWxlbWVudCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgJzphZnRlcicpIDogZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9ICcnO1xuICAgIHRoaXMubGFzdEJyZWFrcG9pbnQgPSAnJztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuXG4vLyBlbGVtZW50W3N0cmluZ10sIHRhcmdldFtvYmpdXG5leHBvcnQgZnVuY3Rpb24gc3RpY2t5KGUsIHQpIHtcbiAgdC5iaW5kKCdsb2FkJywgKCkgPT4ge1xuICAgIGxldCBlSGVpZ2h0ID0gMDtcbiAgICBsZXQgZVRvcCA9IDA7XG4gICAgbGV0ICRlID0gJChlKTtcblxuICAgIGZ1bmN0aW9uIHBvcygpIHtcbiAgICAgIGVIZWlnaHQgPSAkZS5oZWlnaHQoKTtcbiAgICAgIGVUb3AgPSB0LnNjcm9sbFRvcCgpK3QuaGVpZ2h0KCktZUhlaWdodCsncHgnO1xuICAgICAgaWYgKCQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkgPCB0LmhlaWdodCgpKSB7XG4gICAgICAgICRlLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgdG9wOiBlVG9wXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGUuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0YXRpYydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9zKCk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChwb3MpLnJlc2l6ZShwb3MpO1xuICB9KTtcbiAgLy8gZW5kIG9mIGJpbmRcbn1cbi8vIGVuZCBvZiBpZHMuc3RpY2t5XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUb3Aob2JqLCBldnQpIHtcbiAgY29uc29sZS5sb2coJ2luIHRvZ2dsZXRvcCcpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmopLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCduYXYnKS5hbmltYXRlKHtcbiAgICAgIGhlaWdodDogJ3RvZ2dsZSdcbiAgICB9LCAyMDAsICgpID0+IHtcbiAgICAoJCgnbmF2JykuaXMoJzp2aXNpYmxlJykpID8gJCgnYXJ0aWNsZScpLmNzcygnZGlzcGxheScsICdub25lJykgOiAkKCdhcnRpY2xlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgfSk7XG4gICAgLy8gZW5kIG9mIG5hdi5hbmltYXRlXG4gIH0sIGZhbHNlKTtcbn1cbi8vIGVuZCBvZiBpZHMubmF2XG4iXX0=
