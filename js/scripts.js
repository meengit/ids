(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOCATION = exports.LOCATION = window.location;
var IMG_DIR = exports.IMG_DIR = '/img';
var MOBILE = exports.MOBILE = '/mobile';
var DESK = exports.DESK = '/desktop';

var LOGOBAR = exports.LOGOBAR = '/logobar';
var GHB_LINK = exports.GHB_LINK = 'https://github.com/meengit/ids';
var GHB_LOGO = exports.GHB_LOGO = '/github.png';
var GFZ_LINK = exports.GFZ_LINK = 'http://gfz.ch';
var GFZ_LOGO = exports.GFZ_LOGO = '/gfz.png';
var MFF_LINK = exports.MFF_LINK = 'http://www.medienformfarbe.ch/';
var MFF_LOGO = exports.MFF_LOGO = '/mff.png';

},{}],2:[function(require,module,exports){
'use strict';

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function ($) {
  var mql = new _utils.Mql();
  mql.MediaQueryListener();
  function logobar(obj, media) {
    var links = $(obj).find('a');
    var imgs = $(obj).find('img');
    var logos = [config.GHB_LOGO, config.GFZ_LOGO, config.MFF_LOGO];
    var urls = [config.GHB_LINK, config.GFZ_LINK, config.MFF_LINK];
    var logoBasePath = config.LOCATION.origin + config.IMG_DIR + config.LOGOBAR;

    function setAttr(elements, values, attribute) {
      $(elements).each(function (index, element) {
        $(element).attr(attribute, values[index]);
      });
    }

    var setLogoUrl = function setLogoUrl(device) {
      for (var i = 0; i < logos.length; i = i + 1) {
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
    $(window).on('breakpoint-change', function (e, breakpoint) {
      if (breakpoint.search('mini') >= 0) {
        logobar('#logobar', 'm');
        $('nav').toggle();
        (0, _utils.toggleTop)('btn_mobilenav', 'click');
        (0, _utils.toggleTop)('btn_mobilenav', 'touchend');
        console.log('mini', breakpoint.length); // eslint-disable-line no-console
      }

      if (breakpoint.search('small') >= 0) {
        logobar('#logobar', 'm');
        $('nav').toggle();
        (0, _utils.toggleTop)('btn_mobilenav', 'click');
        (0, _utils.toggleTop)('btn_mobilenav', 'touchend');
        console.log('small'); // eslint-disable-line no-console
      }

      if (breakpoint.search('medium') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        (0, _utils.removeEvtListener)($('#btn_mobilenav'));
        console.log('medium'); // eslint-disable-line no-console
      }

      if (breakpoint.search('large') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        (0, _utils.removeEvtListener)($('#btn_mobilenav'));
        console.log('large'); // eslint-disable-line no-console
      }
    });
    // end of window breakpoint-change
  });
  // end of document ready by jQuery
})(jQuery);

},{"./config":1,"./utils":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.removeEvtListener = removeEvtListener;
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

function removeEvtListener(element) {
  var elClone = element.clone(true);
  element.replaceWith(elClone);
}

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
  document.getElementById(obj).addEventListener(evt, function (e) {
    e.preventDefault();
    $('nav').animate({
      height: 'toggle'
    }, 200, function () {
      $('nav').is(':visible') ? $('body').addClass('no-scroll') : $('body').removeClass('no-scroll');
    });
    // end of nav.animate
  }, false);
}
// end of ids.nav

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvY29uZmlnLmpzIiwiX2pzL21haW4uanMiLCJfanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQU0sOEJBQVcsT0FBTyxRQUF4QjtBQUNBLElBQU0sNEJBQVUsTUFBaEI7QUFDQSxJQUFNLDBCQUFTLFNBQWY7QUFDQSxJQUFNLHNCQUFPLFVBQWI7O0FBRUEsSUFBTSw0QkFBVSxVQUFoQjtBQUNBLElBQU0sOEJBQVcsZ0NBQWpCO0FBQ0EsSUFBTSw4QkFBVyxhQUFqQjtBQUNBLElBQU0sOEJBQVcsZUFBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCO0FBQ0EsSUFBTSw4QkFBVyxnQ0FBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCOzs7OztBQ1hQOztJQUFZLE07O0FBQ1o7Ozs7QUFFQSxDQUFDLFVBQUMsQ0FBRCxFQUFPO0FBQ04sTUFBSSxNQUFNLGdCQUFWO0FBQ0EsTUFBSSxrQkFBSjtBQUNBLFdBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQixLQUF0QixFQUE2QjtBQUMzQixRQUFJLFFBQVEsRUFBRSxHQUFGLEVBQU8sSUFBUCxDQUFZLEdBQVosQ0FBWjtBQUNBLFFBQUksT0FBTyxFQUFFLEdBQUYsRUFBTyxJQUFQLENBQVksS0FBWixDQUFYO0FBQ0EsUUFBSSxRQUFRLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFaO0FBQ0EsUUFBSSxPQUFPLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFYO0FBQ0EsUUFBSSxlQUFlLE9BQU8sUUFBUCxDQUFnQixNQUFoQixHQUF5QixPQUFPLE9BQWhDLEdBQTBDLE9BQU8sT0FBcEU7O0FBRUEsYUFBUyxPQUFULENBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLEVBQW1DLFNBQW5DLEVBQThDO0FBQzVDLFFB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VTtBQURMLFNBQVAsRUFFRyxPQUZILENBRVc7QUFDVCxlQUFLO0FBREksU0FGWDtBQUtELE9BTkQsTUFNTztBQUNMLFdBQUcsR0FBSCxDQUFPO0FBQ0wsb0JBQVU7QUFETCxTQUFQO0FBR0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsR0FBakIsRUFBc0IsTUFBdEIsQ0FBNkIsR0FBN0I7QUFDRCxHQXZCRDtBQXdCQTtBQUNEO0FBQ0Q7O0FBRU8sU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCO0FBQ2xDLFdBQVMsY0FBVCxDQUF3QixHQUF4QixFQUE2QixnQkFBN0IsQ0FBOEMsR0FBOUMsRUFBbUQsVUFBQyxDQUFELEVBQU87QUFDeEQsTUFBRSxjQUFGO0FBQ0EsTUFBRSxLQUFGLEVBQVMsT0FBVCxDQUFpQjtBQUNmLGNBQVE7QUFETyxLQUFqQixFQUVHLEdBRkgsRUFFUSxZQUFNO0FBQ2IsUUFBRSxLQUFGLEVBQVMsRUFBVCxDQUFZLFVBQVosQ0FBRCxHQUE0QixFQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLFdBQW5CLENBQTVCLEdBQThELEVBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsV0FBdEIsQ0FBOUQ7QUFDQyxLQUpEO0FBS0E7QUFDRCxHQVJELEVBUUcsS0FSSDtBQVNEO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNvbnN0IExPQ0FUSU9OID0gd2luZG93LmxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IElNR19ESVIgPSAnL2ltZyc7XG5leHBvcnQgY29uc3QgTU9CSUxFID0gJy9tb2JpbGUnO1xuZXhwb3J0IGNvbnN0IERFU0sgPSAnL2Rlc2t0b3AnO1xuXG5leHBvcnQgY29uc3QgTE9HT0JBUiA9ICcvbG9nb2Jhcic7XG5leHBvcnQgY29uc3QgR0hCX0xJTksgPSAnaHR0cHM6Ly9naXRodWIuY29tL21lZW5naXQvaWRzJztcbmV4cG9ydCBjb25zdCBHSEJfTE9HTyA9ICcvZ2l0aHViLnBuZyc7XG5leHBvcnQgY29uc3QgR0ZaX0xJTksgPSAnaHR0cDovL2dmei5jaCc7XG5leHBvcnQgY29uc3QgR0ZaX0xPR08gPSAnL2dmei5wbmcnO1xuZXhwb3J0IGNvbnN0IE1GRl9MSU5LID0gJ2h0dHA6Ly93d3cubWVkaWVuZm9ybWZhcmJlLmNoLyc7XG5leHBvcnQgY29uc3QgTUZGX0xPR08gPSAnL21mZi5wbmcnO1xuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE1xbCwgcmVtb3ZlRXZ0TGlzdGVuZXIsIHRvZ2dsZVRvcCB9IGZyb20gJy4vdXRpbHMnO1xuXG4oKCQpID0+IHtcbiAgbGV0IG1xbCA9IG5ldyBNcWwoKTtcbiAgbXFsLk1lZGlhUXVlcnlMaXN0ZW5lcigpO1xuICBmdW5jdGlvbiBsb2dvYmFyKG9iaiwgbWVkaWEpIHtcbiAgICBsZXQgbGlua3MgPSAkKG9iaikuZmluZCgnYScpO1xuICAgIGxldCBpbWdzID0gJChvYmopLmZpbmQoJ2ltZycpO1xuICAgIGxldCBsb2dvcyA9IFsgY29uZmlnLkdIQl9MT0dPLCBjb25maWcuR0ZaX0xPR08sIGNvbmZpZy5NRkZfTE9HTyBdO1xuICAgIGxldCB1cmxzID0gWyBjb25maWcuR0hCX0xJTkssIGNvbmZpZy5HRlpfTElOSywgY29uZmlnLk1GRl9MSU5LIF07XG4gICAgbGV0IGxvZ29CYXNlUGF0aCA9IGNvbmZpZy5MT0NBVElPTi5vcmlnaW4gKyBjb25maWcuSU1HX0RJUiArIGNvbmZpZy5MT0dPQkFSO1xuXG4gICAgZnVuY3Rpb24gc2V0QXR0cihlbGVtZW50cywgdmFsdWVzLCBhdHRyaWJ1dGUpIHtcbiAgICAgICQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICQoZWxlbWVudCkuYXR0cihhdHRyaWJ1dGUsIHZhbHVlc1tpbmRleF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHNldExvZ29VcmwgPSAoZGV2aWNlKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIGxvZ29zW2ldID0gbG9nb0Jhc2VQYXRoICsgZGV2aWNlICsgbG9nb3NbaV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbG9nb3M7XG4gICAgfTtcblxuICAgIGlmIChtZWRpYSA9PT0gJ20nKSB7XG4gICAgICBzZXRBdHRyKGxpbmtzLCB1cmxzLCAnaHJlZicpO1xuICAgICAgc2V0QXR0cihpbWdzLCBzZXRMb2dvVXJsKGNvbmZpZy5NT0JJTEUpLCAnc3JjJyk7XG4gICAgfVxuXG4gICAgaWYgKG1lZGlhID09PSAnZCcpIHtcbiAgICAgIHNldEF0dHIobGlua3MsIHVybHMsICdocmVmJyk7XG4gICAgICBzZXRBdHRyKGltZ3MsIHNldExvZ29VcmwoY29uZmlnLkRFU0spLCAnc3JjJyk7XG4gICAgfVxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQod2luZG93KS5vbignYnJlYWtwb2ludC1jaGFuZ2UnLCAoZSwgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgaWYgKGJyZWFrcG9pbnQuc2VhcmNoKCdtaW5pJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdtJyk7XG4gICAgICAgICQoJ25hdicpLnRvZ2dsZSgpO1xuICAgICAgICB0b2dnbGVUb3AoJ2J0bl9tb2JpbGVuYXYnLCAnY2xpY2snKTtcbiAgICAgICAgdG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywgJ3RvdWNoZW5kJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtaW5pJywgYnJlYWtwb2ludC5sZW5ndGgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cblxuICAgICAgaWYgKGJyZWFrcG9pbnQuc2VhcmNoKCdzbWFsbCcpID49IDApIHtcbiAgICAgICAgbG9nb2JhcignI2xvZ29iYXInLCAnbScpO1xuICAgICAgICAkKCduYXYnKS50b2dnbGUoKTtcbiAgICAgICAgdG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywgJ2NsaWNrJyk7XG4gICAgICAgIHRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsICd0b3VjaGVuZCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnc21hbGwnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnbWVkaXVtJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdkJyk7XG4gICAgICAgICQoJ25hdicpLnNob3coKTtcbiAgICAgICAgcmVtb3ZlRXZ0TGlzdGVuZXIoJCgnI2J0bl9tb2JpbGVuYXYnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpdW0nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnbGFyZ2UnKSA+PSAwKSB7XG4gICAgICAgIGxvZ29iYXIoJyNsb2dvYmFyJywgJ2QnKTtcbiAgICAgICAgJCgnbmF2Jykuc2hvdygpO1xuICAgICAgICByZW1vdmVFdnRMaXN0ZW5lcigkKCcjYnRuX21vYmlsZW5hdicpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhcmdlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGVuZCBvZiB3aW5kb3cgYnJlYWtwb2ludC1jaGFuZ2VcbiAgfSk7XG4gIC8vIGVuZCBvZiBkb2N1bWVudCByZWFkeSBieSBqUXVlcnlcbn0pKGpRdWVyeSk7XG4iLCJleHBvcnQgY2xhc3MgTXFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmFmdGVyRWxlbWVudCkge1xuICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgd2luZG93LmdldENvbXB1dGVkU3R5bGUganVzdCByZXR1cm5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIH07XG5cbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgbG9hZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9IHRoaXMuYWZ0ZXJFbGVtZW50LmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJyZWFrcG9pbnQgIT09IHRoaXMubGFzdEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignYnJlYWtwb2ludC1jaGFuZ2UnLCB0aGlzLmN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICB0aGlzLmxhc3RCcmVha3BvaW50ID0gdGhpcy5jdXJyZW50QnJlYWtwb2ludDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuICBNZWRpYVF1ZXJ5TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5hZnRlckVsZW1lbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksICc6YWZ0ZXInKSA6IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSAnJztcbiAgICB0aGlzLmxhc3RCcmVha3BvaW50ID0gJyc7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2dExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGVsQ2xvbmUgPSBlbGVtZW50LmNsb25lKHRydWUpO1xuICBlbGVtZW50LnJlcGxhY2VXaXRoKGVsQ2xvbmUpO1xufVxuXG4vLyBlbGVtZW50W3N0cmluZ10sIHRhcmdldFtvYmpdXG5leHBvcnQgZnVuY3Rpb24gc3RpY2t5KGUsIHQpIHtcbiAgdC5iaW5kKCdsb2FkJywgKCkgPT4ge1xuICAgIGxldCBlSGVpZ2h0ID0gMDtcbiAgICBsZXQgZVRvcCA9IDA7XG4gICAgbGV0ICRlID0gJChlKTtcblxuICAgIGZ1bmN0aW9uIHBvcygpIHtcbiAgICAgIGVIZWlnaHQgPSAkZS5oZWlnaHQoKTtcbiAgICAgIGVUb3AgPSB0LnNjcm9sbFRvcCgpK3QuaGVpZ2h0KCktZUhlaWdodCsncHgnO1xuICAgICAgaWYgKCQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkgPCB0LmhlaWdodCgpKSB7XG4gICAgICAgICRlLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgdG9wOiBlVG9wXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGUuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0YXRpYydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9zKCk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChwb3MpLnJlc2l6ZShwb3MpO1xuICB9KTtcbiAgLy8gZW5kIG9mIGJpbmRcbn1cbi8vIGVuZCBvZiBpZHMuc3RpY2t5XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUb3Aob2JqLCBldnQpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnbmF2JykuYW5pbWF0ZSh7XG4gICAgICBoZWlnaHQ6ICd0b2dnbGUnXG4gICAgfSwgMjAwLCAoKSA9PiB7XG4gICAgKCQoJ25hdicpLmlzKCc6dmlzaWJsZScpKSA/ICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJykgOiAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgIH0pO1xuICAgIC8vIGVuZCBvZiBuYXYuYW5pbWF0ZVxuICB9LCBmYWxzZSk7XG59XG4vLyBlbmQgb2YgaWRzLm5hdlxuIl19
