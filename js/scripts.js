(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _utils = require('./utils');

console.log('in main');

/*
const idsJsModule = (($, ids) => {
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
  let mql = new Mql();
  mql.MediaQueryListener();

  $(document).ready(() => {
    ($(window).width() < 1024) ? $('nav').toggle() : sticky('#footerline',$(window));
    idsJsModule.toggleTop('btn_mobilenav','click');
    idsJsModule.toggleTop('btn_mobilenav','touchend');
  });
})(jQuery, idsJsModule);

console.log(window);
*/

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.sticky = sticky;

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvbWFpbi5qcyIsIl9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBR0EsUUFBUSxHQUFSLENBQVksU0FBWjs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ3dCZ0IsTSxHQUFBLE07Ozs7SUEvQkgsRyxXQUFBLEc7QUFDWCxpQkFBYztBQUFBOztBQUNaLFNBQUssSUFBTCxHQUFZLFlBQVk7QUFDdEIsVUFBSSxDQUFDLEtBQUssWUFBVixFQUF3QjtBQUN0QjtBQUNBO0FBQ0Q7QUFDRCxXQUFLLGVBQUwsR0FMc0IsQ0FLRTtBQUN6QixLQU5EOztBQVFBLFNBQUssZUFBTCxHQUF1QixZQUFZO0FBQUE7O0FBQUU7QUFDbkMsUUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLCtCQUFiLEVBQThDLFlBQU07QUFDbEQsY0FBSyxpQkFBTCxHQUF5QixNQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLFNBQW5DLENBQXpCO0FBQ0EsWUFBSSxNQUFLLGlCQUFMLEtBQTJCLE1BQUssY0FBcEMsRUFBb0Q7QUFDbEQsWUFBRSxNQUFGLEVBQVUsT0FBVixDQUFrQixtQkFBbEIsRUFBdUMsTUFBSyxpQkFBNUM7QUFDQSxnQkFBSyxjQUFMLEdBQXNCLE1BQUssaUJBQTNCO0FBQ0Q7QUFDRixPQU5EO0FBT0QsS0FSRDtBQVNEO0FBQ0Q7Ozs7eUNBRXFCO0FBQ25CLFdBQUssWUFBTCxHQUFvQixPQUFPLGdCQUFQLEdBQTBCLE9BQU8sZ0JBQVAsQ0FBd0IsU0FBUyxJQUFqQyxFQUF1QyxRQUF2QyxDQUExQixHQUE2RSxLQUFqRztBQUNBLFdBQUssaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxXQUFLLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxXQUFLLElBQUw7QUFDRDs7Ozs7O0FBR0g7OztBQUNPLFNBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQjtBQUMzQixJQUFFLElBQUYsQ0FBTyxNQUFQLEVBQWUsWUFBTTtBQUNuQixRQUFJLFVBQVUsQ0FBZDtBQUNBLFFBQUksT0FBTyxDQUFYO0FBQ0EsUUFBSSxLQUFLLEVBQUUsQ0FBRixDQUFUOztBQUVBLGFBQVMsR0FBVCxHQUFlO0FBQ2IsZ0JBQVUsR0FBRyxNQUFILEVBQVY7QUFDQSxhQUFPLEVBQUUsU0FBRixLQUFjLEVBQUUsTUFBRixFQUFkLEdBQXlCLE9BQXpCLEdBQWlDLElBQXhDO0FBQ0EsVUFBSSxFQUFFLFNBQVMsSUFBWCxFQUFpQixNQUFqQixLQUE0QixFQUFFLE1BQUYsRUFBaEMsRUFBNEM7QUFDMUMsV0FBRyxHQUFILENBQU87QUFDTCxvQkFBVTtBQURMLFNBQVAsRUFFRyxPQUZILENBRVc7QUFDVCxlQUFLO0FBREksU0FGWDtBQUtELE9BTkQsTUFNTztBQUNMLFdBQUcsR0FBSCxDQUFPO0FBQ0wsb0JBQVU7QUFETCxTQUFQO0FBR0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsR0FBakIsRUFBc0IsTUFBdEIsQ0FBNkIsR0FBN0I7QUFDRCxHQXZCRDtBQXdCRTtBQUNIO0FBQ0MiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTXFsLCBzdGlja3kgfSBmcm9tICcuL3V0aWxzJztcblxuXG5jb25zb2xlLmxvZygnaW4gbWFpbicpO1xuXG5cblxuLypcbmNvbnN0IGlkc0pzTW9kdWxlID0gKCgkLCBpZHMpID0+IHtcbiAgaWRzLnN0aWNreSA9IChlLCB0KSA9PiB7IC8vIGVsZW1lbnRbc3RyaW5nXSwgdGFyZ2V0W29ial1cbiAgICB0LmJpbmQoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBsZXQgZUhlaWdodCA9IDAsIFxuICAgICAgICAgIGVUb3AgPSAwLCBcbiAgICAgICAgICAkZSA9ICQoZSk7XG4gICAgXG4gICAgICBwb3MoKTtcbiAgICBcbiAgICAgIGZ1bmN0aW9uIHBvcygpIHtcbiAgICAgICAgZUhlaWdodCA9ICRlLmhlaWdodCgpO1xuICAgICAgICBlVG9wID0gKHQuc2Nyb2xsVG9wKCkrdC5oZWlnaHQoKS1lSGVpZ2h0KSsncHgnO1xuICAgICAgICBpZiAoICgkKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpKSA8IHQuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAkZS5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICB0b3A6IGVUb3BcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZS5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBlbmQgb2YgaWYgZWxzZVxuICAgICAgfSAvLyBlbmQgb2YgZm4gcG9zXG4gICAgICBcbiAgICAgICQod2luZG93KS5zY3JvbGwocG9zKS5yZXNpemUocG9zKTtcbiAgICAgIFxuICAgIH0pOyAvLyBlbmQgb2YgYmluZFxuICB9IC8vIGVuZCBvZiBpZHMuc3RpY2t5XG4gIFxuICBpZHMudG9nZ2xlVG9wID0gKG9iaiwgZXZ0KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJ25hdicpLmFuaW1hdGUoe1xuICAgICAgICAgIGhlaWdodDogJ3RvZ2dsZSdcbiAgICAgICAgfSwgMjAwLCAoKSA9PiB7XG4gICAgICAgICgkKCduYXYnKS5pcygnOnZpc2libGUnKSkgPyAkKCdhcnRpY2xlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpIDogJCgnYXJ0aWNsZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICB9KTsgLy8gZW5kIG9mIG5hdi5hbmltYXRlXG4gICAgfSwgZmFsc2UpO1xuICB9IC8vIGVuZCBvZiBpZHMubmF2XG4gIHJldHVybiBpZHM7XG59KShqUXVlcnksIGlkc0pzTW9kdWxlIHx8IHt9KTtcblxuKCgkLCBpZHNKc01vZHVsZSkgPT4ge1xuICBsZXQgbXFsID0gbmV3IE1xbCgpO1xuICBtcWwuTWVkaWFRdWVyeUxpc3RlbmVyKCk7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQpID8gJCgnbmF2JykudG9nZ2xlKCkgOiBzdGlja3koJyNmb290ZXJsaW5lJywkKHdpbmRvdykpO1xuICAgIGlkc0pzTW9kdWxlLnRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsJ2NsaWNrJyk7XG4gICAgaWRzSnNNb2R1bGUudG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywndG91Y2hlbmQnKTtcbiAgfSk7XG59KShqUXVlcnksIGlkc0pzTW9kdWxlKTtcblxuY29uc29sZS5sb2cod2luZG93KTtcbiovXG4iLCJleHBvcnQgY2xhc3MgTXFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmFmdGVyRWxlbWVudCkge1xuICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgd2luZG93LmdldENvbXB1dGVkU3R5bGUganVzdCByZXR1cm5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIH07XG5cbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgbG9hZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9IHRoaXMuYWZ0ZXJFbGVtZW50LmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJyZWFrcG9pbnQgIT09IHRoaXMubGFzdEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignYnJlYWtwb2ludC1jaGFuZ2UnLCB0aGlzLmN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICB0aGlzLmxhc3RCcmVha3BvaW50ID0gdGhpcy5jdXJyZW50QnJlYWtwb2ludDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuICBNZWRpYVF1ZXJ5TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5hZnRlckVsZW1lbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksICc6YWZ0ZXInKSA6IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSAnJztcbiAgICB0aGlzLmxhc3RCcmVha3BvaW50ID0gJyc7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbn1cblxuLy8gZWxlbWVudFtzdHJpbmddLCB0YXJnZXRbb2JqXVxuZXhwb3J0IGZ1bmN0aW9uIHN0aWNreShlLCB0KSB7XG4gIHQuYmluZCgnbG9hZCcsICgpID0+IHtcbiAgICBsZXQgZUhlaWdodCA9IDA7XG4gICAgbGV0IGVUb3AgPSAwO1xuICAgIGxldCAkZSA9ICQoZSk7XG5cbiAgICBmdW5jdGlvbiBwb3MoKSB7XG4gICAgICBlSGVpZ2h0ID0gJGUuaGVpZ2h0KCk7XG4gICAgICBlVG9wID0gdC5zY3JvbGxUb3AoKSt0LmhlaWdodCgpLWVIZWlnaHQrJ3B4JztcbiAgICAgIGlmICgkKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpIDwgdC5oZWlnaHQoKSkge1xuICAgICAgICAkZS5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgIHRvcDogZVRvcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdzdGF0aWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvcygpO1xuICAgICQod2luZG93KS5zY3JvbGwocG9zKS5yZXNpemUocG9zKTtcbiAgfSk7XG4gICAgLy8gZW5kIG9mIGJpbmRcbn1cbiAgLy8gZW5kIG9mIGlkcy5zdGlja3lcbiJdfQ==
