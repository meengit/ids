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
    var logoBasePath = '';

    if (config.LOCATION.origin.search('localhost')) {
      logoBasePath = 'http://localhost:3000' + config.IMG_DIR + config.LOGOBAR;
    } else {
      logoBasePath = config.LOCATION.origin + '/ids' + config.IMG_DIR + config.LOGOBAR;
    }

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
        $('nav').show().find('a[href="' + config.LOCATION.pathname + '"]').addClass('active');
        (0, _utils.removeEvtListener)($('#btn_mobilenav'));
        console.log('medium'); // eslint-disable-line no-console
      }

      if (breakpoint.search('large') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        $('nav').find('a[href="' + config.LOCATION.pathname + '"]').addClass('active');
        (0, _utils.removeEvtListener)($('#btn_mobilenav'));
        console.log('large'); // eslint-disable-line no-console
      }

      if (breakpoint.search('extra') >= 0) {
        logobar('#logobar', 'd');
        $('nav').show();
        $('nav').find('a[href="' + config.LOCATION.pathname + '"]').addClass('active');
        (0, _utils.removeEvtListener)($('#btn_mobilenav'));
        (0, _utils.resizeToViewportHeight)($('article'));
        console.log('extra'); // eslint-disable-line no-console
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

exports.resizeToViewportHeight = resizeToViewportHeight;
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

function resizeToViewportHeight(element) {
  var eleH = element.height();
  var winH = $(window).height();
  var heaH = $('header').height();
  var fotH = $('footer').height();

  if (winH - heaH - fotH > eleH + heaH + fotH) {
    element.css('height', winH - heaH - fotH + 'px');
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvY29uZmlnLmpzIiwiX2pzL21haW4uanMiLCJfanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQU0sOEJBQVcsT0FBTyxRQUF4QjtBQUNBLElBQU0sNEJBQVUsTUFBaEI7QUFDQSxJQUFNLDBCQUFTLFNBQWY7QUFDQSxJQUFNLHNCQUFPLFVBQWI7O0FBRUEsSUFBTSw0QkFBVSxVQUFoQjtBQUNBLElBQU0sOEJBQVcsZ0NBQWpCO0FBQ0EsSUFBTSw4QkFBVyxhQUFqQjtBQUNBLElBQU0sOEJBQVcsZUFBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCO0FBQ0EsSUFBTSw4QkFBVyxnQ0FBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCOzs7OztBQ1hQOztJQUFZLE07O0FBQ1o7Ozs7QUFFQSxDQUFDLFVBQUMsQ0FBRCxFQUFPO0FBQ04sTUFBSSxNQUFNLGdCQUFWO0FBQ0EsTUFBSSxrQkFBSjtBQUNBLFdBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQixLQUF0QixFQUE2QjtBQUMzQixRQUFJLFFBQVEsRUFBRSxHQUFGLEVBQU8sSUFBUCxDQUFZLEdBQVosQ0FBWjtBQUNBLFFBQUksT0FBTyxFQUFFLEdBQUYsRUFBTyxJQUFQLENBQVksS0FBWixDQUFYO0FBQ0EsUUFBSSxRQUFRLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFaO0FBQ0EsUUFBSSxPQUFPLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFYO0FBQ0EsUUFBSSxlQUFlLEVBQW5COztBQUVBLFFBQUksT0FBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLENBQThCLFdBQTlCLENBQUosRUFBZ0Q7QUFDOUMscUJBQWUsMEJBQTBCLE9BQU8sT0FBakMsR0FBMkMsT0FBTyxPQUFqRTtB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LElBQVgsRUFBaUIsTUFBakIsS0FBNEIsRUFBRSxNQUFGLEVBQWhDLEVBQTRDO0FBQzFDLFdBQUcsR0FBSCxDQUFPO0FBQ0wsb0JBQVU7QUFETCxTQUFQLEVBRUcsT0FGSCxDQUVXO0FBQ1QsZUFBSztBQURJLFNBRlg7QUFLRCxPQU5ELE1BTU87QUFDTCxXQUFHLEdBQUgsQ0FBTztBQUNMLG9CQUFVO0FBREwsU0FBUDtBQUdEO0FBQ0Y7O0FBRUQ7QUFDQSxNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLEdBQWpCLEVBQXNCLE1BQXRCLENBQTZCLEdBQTdCO0FBQ0QsR0F2QkQ7QUF3QkE7QUFDRDtBQUNEOztBQUVPLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QjtBQUNsQyxXQUFTLGNBQVQsQ0FBd0IsR0FBeEIsRUFBNkIsZ0JBQTdCLENBQThDLEdBQTlDLEVBQW1ELFVBQUMsQ0FBRCxFQUFPO0FBQ3hELE1BQUUsY0FBRjtBQUNBLE1BQUUsS0FBRixFQUFTLE9BQVQsQ0FBaUI7QUFDZixjQUFRO0FBRE8sS0FBakIsRUFFRyxHQUZILEVBRVEsWUFBTTtBQUNiLFFBQUUsS0FBRixFQUFTLEVBQVQsQ0FBWSxVQUFaLENBQUQsR0FBNEIsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixXQUFuQixDQUE1QixHQUE4RCxFQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFdBQXRCLENBQTlEO0FBQ0MsS0FKRDtBQUtBO0FBQ0QsR0FSRCxFQVFHLEtBUkg7QUFTRDtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjb25zdCBMT0NBVElPTiA9IHdpbmRvdy5sb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBJTUdfRElSID0gJy9pbWcnO1xuZXhwb3J0IGNvbnN0IE1PQklMRSA9ICcvbW9iaWxlJztcbmV4cG9ydCBjb25zdCBERVNLID0gJy9kZXNrdG9wJztcblxuZXhwb3J0IGNvbnN0IExPR09CQVIgPSAnL2xvZ29iYXInO1xuZXhwb3J0IGNvbnN0IEdIQl9MSU5LID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZWVuZ2l0L2lkcyc7XG5leHBvcnQgY29uc3QgR0hCX0xPR08gPSAnL2dpdGh1Yi5wbmcnO1xuZXhwb3J0IGNvbnN0IEdGWl9MSU5LID0gJ2h0dHA6Ly9nZnouY2gnO1xuZXhwb3J0IGNvbnN0IEdGWl9MT0dPID0gJy9nZnoucG5nJztcbmV4cG9ydCBjb25zdCBNRkZfTElOSyA9ICdodHRwOi8vd3d3Lm1lZGllbmZvcm1mYXJiZS5jaC8nO1xuZXhwb3J0IGNvbnN0IE1GRl9MT0dPID0gJy9tZmYucG5nJztcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBNcWwsIHJlbW92ZUV2dExpc3RlbmVyLCByZXNpemVUb1ZpZXdwb3J0SGVpZ2h0LCB0b2dnbGVUb3AgfSBmcm9tICcuL3V0aWxzJztcblxuKCgkKSA9PiB7XG4gIGxldCBtcWwgPSBuZXcgTXFsKCk7XG4gIG1xbC5NZWRpYVF1ZXJ5TGlzdGVuZXIoKTtcbiAgZnVuY3Rpb24gbG9nb2JhcihvYmosIG1lZGlhKSB7XG4gICAgbGV0IGxpbmtzID0gJChvYmopLmZpbmQoJ2EnKTtcbiAgICBsZXQgaW1ncyA9ICQob2JqKS5maW5kKCdpbWcnKTtcbiAgICBsZXQgbG9nb3MgPSBbIGNvbmZpZy5HSEJfTE9HTywgY29uZmlnLkdGWl9MT0dPLCBjb25maWcuTUZGX0xPR08gXTtcbiAgICBsZXQgdXJscyA9IFsgY29uZmlnLkdIQl9MSU5LLCBjb25maWcuR0ZaX0xJTkssIGNvbmZpZy5NRkZfTElOSyBdO1xuICAgIGxldCBsb2dvQmFzZVBhdGggPSAnJztcblxuICAgIGlmIChjb25maWcuTE9DQVRJT04ub3JpZ2luLnNlYXJjaCgnbG9jYWxob3N0JykpIHtcbiAgICAgIGxvZ29CYXNlUGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnICsgY29uZmlnLklNR19ESVIgKyBjb25maWcuTE9HT0JBUjtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nb0Jhc2VQYXRoID0gY29uZmlnLkxPQ0FUSU9OLm9yaWdpbiArICcvaWRzJyArIGNvbmZpZy5JTUdfRElSICsgY29uZmlnLkxPR09CQVI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QXR0cihlbGVtZW50cywgdmFsdWVzLCBhdHRyaWJ1dGUpIHtcbiAgICAgICQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICQoZWxlbWVudCkuYXR0cihhdHRyaWJ1dGUsIHZhbHVlc1tpbmRleF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHNldExvZ29VcmwgPSAoZGV2aWNlKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIGxvZ29zW2ldID0gbG9nb0Jhc2VQYXRoICsgZGV2aWNlICsgbG9nb3NbaV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbG9nb3M7XG4gICAgfTtcblxuICAgIGlmIChtZWRpYSA9PT0gJ20nKSB7XG4gICAgICBzZXRBdHRyKGxpbmtzLCB1cmxzLCAnaHJlZicpO1xuICAgICAgc2V0QXR0cihpbWdzLCBzZXRMb2dvVXJsKGNvbmZpZy5NT0JJTEUpLCAnc3JjJyk7XG4gICAgfVxuXG4gICAgaWYgKG1lZGlhID09PSAnZCcpIHtcbiAgICAgIHNldEF0dHIobGlua3MsIHVybHMsICdocmVmJyk7XG4gICAgICBzZXRBdHRyKGltZ3MsIHNldExvZ29VcmwoY29uZmlnLkRFU0spLCAnc3JjJyk7XG4gICAgfVxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQod2luZG93KS5vbignYnJlYWtwb2ludC1jaGFuZ2UnLCAoZSwgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgaWYgKGJyZWFrcG9pbnQuc2VhcmNoKCdtaW5pJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdtJyk7XG4gICAgICAgICQoJ25hdicpLnRvZ2dsZSgpO1xuICAgICAgICB0b2dnbGVUb3AoJ2J0bl9tb2JpbGVuYXYnLCAnY2xpY2snKTtcbiAgICAgICAgdG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywgJ3RvdWNoZW5kJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtaW5pJywgYnJlYWtwb2ludC5sZW5ndGgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cblxuICAgICAgaWYgKGJyZWFrcG9pbnQuc2VhcmNoKCdzbWFsbCcpID49IDApIHtcbiAgICAgICAgbG9nb2JhcignI2xvZ29iYXInLCAnbScpO1xuICAgICAgICAkKCduYXYnKS50b2dnbGUoKTtcbiAgICAgICAgdG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywgJ2NsaWNrJyk7XG4gICAgICAgIHRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsICd0b3VjaGVuZCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnc21hbGwnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnbWVkaXVtJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdkJyk7XG4gICAgICAgICQoJ25hdicpLnNob3coKS5maW5kKCdhW2hyZWY9XCInKyBjb25maWcuTE9DQVRJT04ucGF0aG5hbWUgKydcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHJlbW92ZUV2dExpc3RlbmVyKCQoJyNidG5fbW9iaWxlbmF2JykpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaXVtJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICBpZiAoYnJlYWtwb2ludC5zZWFyY2goJ2xhcmdlJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdkJyk7XG4gICAgICAgICQoJ25hdicpLnNob3coKTtcbiAgICAgICAgJCgnbmF2JykuZmluZCgnYVtocmVmPVwiJysgY29uZmlnLkxPQ0FUSU9OLnBhdGhuYW1lICsnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICByZW1vdmVFdnRMaXN0ZW5lcigkKCcjYnRuX21vYmlsZW5hdicpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhcmdlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICBpZiAoYnJlYWtwb2ludC5zZWFyY2goJ2V4dHJhJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdkJyk7XG4gICAgICAgICQoJ25hdicpLnNob3coKTtcbiAgICAgICAgJCgnbmF2JykuZmluZCgnYVtocmVmPVwiJysgY29uZmlnLkxPQ0FUSU9OLnBhdGhuYW1lICsnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICByZW1vdmVFdnRMaXN0ZW5lcigkKCcjYnRuX21vYmlsZW5hdicpKTtcbiAgICAgICAgcmVzaXplVG9WaWV3cG9ydEhlaWdodCgkKCdhcnRpY2xlJykpO1xuICAgICAgICBjb25zb2xlLmxvZygnZXh0cmEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZW5kIG9mIHdpbmRvdyBicmVha3BvaW50LWNoYW5nZVxuICB9KTtcbiAgLy8gZW5kIG9mIGRvY3VtZW50IHJlYWR5IGJ5IGpRdWVyeVxufSkoalF1ZXJ5KTtcbiIsImV4cG9ydCBjbGFzcyBNcWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuYWZ0ZXJFbGVtZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSBqdXN0IHJldHVyblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgfTtcblxuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBsb2FkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gdGhpcy5hZnRlckVsZW1lbnQuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QnJlYWtwb2ludCAhPT0gdGhpcy5sYXN0QnJlYWtwb2ludCkge1xuICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdicmVha3BvaW50LWNoYW5nZScsIHRoaXMuY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgIHRoaXMubGFzdEJyZWFrcG9pbnQgPSB0aGlzLmN1cnJlbnRCcmVha3BvaW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG4gIE1lZGlhUXVlcnlMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmFmdGVyRWxlbWVudCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgJzphZnRlcicpIDogZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9ICcnO1xuICAgIHRoaXMubGFzdEJyZWFrcG9pbnQgPSAnJztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplVG9WaWV3cG9ydEhlaWdodChlbGVtZW50KSB7XG4gIGxldCBlbGVIID0gZWxlbWVudC5oZWlnaHQoKTtcbiAgbGV0IHdpbkggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gIGxldCBoZWFIID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XG4gIGxldCBmb3RIID0gJCgnZm9vdGVyJykuaGVpZ2h0KCk7XG5cbiAgaWYgKHdpbkggLSBoZWFIIC0gZm90SCA+IGVsZUggKyBoZWFIICsgZm90SCkge1xuICAgIGVsZW1lbnQuY3NzKCdoZWlnaHQnLCAod2luSCAtIGhlYUggLSBmb3RIKSArICdweCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdnRMaXN0ZW5lcihlbGVtZW50KSB7XG4gIGxldCBlbENsb25lID0gZWxlbWVudC5jbG9uZSh0cnVlKTtcbiAgZWxlbWVudC5yZXBsYWNlV2l0aChlbENsb25lKTtcbn1cblxuLy8gZWxlbWVudFtzdHJpbmddLCB0YXJnZXRbb2JqXVxuZXhwb3J0IGZ1bmN0aW9uIHN0aWNreShlLCB0KSB7XG4gIHQuYmluZCgnbG9hZCcsICgpID0+IHtcbiAgICBsZXQgZUhlaWdodCA9IDA7XG4gICAgbGV0IGVUb3AgPSAwO1xuICAgIGxldCAkZSA9ICQoZSk7XG5cbiAgICBmdW5jdGlvbiBwb3MoKSB7XG4gICAgICBlSGVpZ2h0ID0gJGUuaGVpZ2h0KCk7XG4gICAgICBlVG9wID0gdC5zY3JvbGxUb3AoKSt0LmhlaWdodCgpLWVIZWlnaHQrJ3B4JztcbiAgICAgIGlmICgkKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpIDwgdC5oZWlnaHQoKSkge1xuICAgICAgICAkZS5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgIHRvcDogZVRvcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdzdGF0aWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvcygpO1xuICAgICQod2luZG93KS5zY3JvbGwocG9zKS5yZXNpemUocG9zKTtcbiAgfSk7XG4gIC8vIGVuZCBvZiBiaW5kXG59XG4vLyBlbmQgb2YgaWRzLnN0aWNreVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVG9wKG9iaiwgZXZ0KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iaikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ25hdicpLmFuaW1hdGUoe1xuICAgICAgaGVpZ2h0OiAndG9nZ2xlJ1xuICAgIH0sIDIwMCwgKCkgPT4ge1xuICAgICgkKCduYXYnKS5pcygnOnZpc2libGUnKSkgPyAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpIDogJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICB9KTtcbiAgICAvLyBlbmQgb2YgbmF2LmFuaW1hdGVcbiAgfSwgZmFsc2UpO1xufVxuLy8gZW5kIG9mIGlkcy5uYXZcbiJdfQ==
