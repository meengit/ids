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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvY29uZmlnLmpzIiwiX2pzL21haW4uanMiLCJfanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQU0sOEJBQVcsT0FBTyxRQUF4QjtBQUNBLElBQU0sNEJBQVUsTUFBaEI7QUFDQSxJQUFNLDBCQUFTLFNBQWY7QUFDQSxJQUFNLHNCQUFPLFVBQWI7O0FBRUEsSUFBTSw0QkFBVSxVQUFoQjtBQUNBLElBQU0sOEJBQVcsZ0NBQWpCO0FBQ0EsSUFBTSw4QkFBVyxhQUFqQjtBQUNBLElBQU0sOEJBQVcsZUFBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCO0FBQ0EsSUFBTSw4QkFBVyxnQ0FBakI7QUFDQSxJQUFNLDhCQUFXLFVBQWpCOzs7OztBQ1hQOztJQUFZLE07O0FBQ1o7Ozs7QUFFQSxDQUFDLFVBQUMsQ0FBRCxFQUFPO0FBQ04sTUFBSSxNQUFNLGdCQUFWO0FBQ0EsTUFBSSxrQkFBSjtBQUNBLFdBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQixLQUF0QixFQUE2QjtBQUMzQixRQUFJLFFBQVEsRUFBRSxHQUFGLEVBQU8sSUFBUCxDQUFZLEdBQVosQ0FBWjtBQUNBLFFBQUksT0FBTyxFQUFFLEdBQUYsRUFBTyxJQUFQLENBQVksS0FBWixDQUFYO0FBQ0EsUUFBSSxRQUFRLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFaO0FBQ0EsUUFBSSxPQUFPLENBQUUsT0FBTyxRQUFULEVBQW1CLE9BQU8sUUFBMUIsRUFBb0MsT0FBTyxRQUEzQyxDQUFYO0FBQ0EsUUFBSSxlQUFlLEVBQW5COztBQUVBLFFBQUksT0FBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLENBQThCLFdBQTlCLENBQUosRUFBZ0Q7QUFDOUMscUJBQWUsMEJBQTBCLE9BQU8sT0FBakMsR0FBMkMsT0FBTyxPQUFqRTtB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RUFBVjtBQUNBLGFBQU8sRUFBRSxTQUFGLEtBQWMsRUFBRSxNQUFGLEVBQWQsR0FBeUIsT0FBekIsR0FBaUMsSUFBeEM7QUFDQSxVQUFJLEVBQUUsU0FBUyxJQUFYLEVBQWlCLE1BQWpCLEtBQTRCLEVBQUUsTUFBRixFQUFoQyxFQUE0QztBQUMxQyxXQUFHLEdBQUgsQ0FBTztBQUNMLG9CQUFVO0FBREwsU0FBUCxFQUVHLE9BRkgsQ0FFVztBQUNULGVBQUs7QUFESSxTQUZYO0FBS0QsT0FORCxNQU1PO0FBQ0wsV0FBRyxHQUFILENBQU87QUFDTCxvQkFBVTtBQURMLFNBQVA7QUFHRDtBQUNGOztBQUVEO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixHQUFqQixFQUFzQixNQUF0QixDQUE2QixHQUE3QjtBQUNELEdBdkJEO0FBd0JBO0FBQ0Q7QUFDRDs7QUFFTyxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkI7QUFDbEMsV0FBUyxjQUFULENBQXdCLEdBQXhCLEVBQTZCLGdCQUE3QixDQUE4QyxHQUE5QyxFQUFtRCxVQUFDLENBQUQsRUFBTztBQUN4RCxNQUFFLGNBQUY7QUFDQSxNQUFFLEtBQUYsRUFBUyxPQUFULENBQWlCO0FBQ2YsY0FBUTtBQURPLEtBQWpCLEVBRUcsR0FGSCxFQUVRLFlBQU07QUFDYixRQUFFLEtBQUYsRUFBUyxFQUFULENBQVksVUFBWixDQUFELEdBQTRCLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsV0FBbkIsQ0FBNUIsR0FBOEQsRUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixXQUF0QixDQUE5RDtBQUNDLEtBSkQ7QUFLQTtBQUNELEdBUkQsRUFRRyxLQVJIO0FBU0Q7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY29uc3QgTE9DQVRJT04gPSB3aW5kb3cubG9jYXRpb247XG5leHBvcnQgY29uc3QgSU1HX0RJUiA9ICcvaW1nJztcbmV4cG9ydCBjb25zdCBNT0JJTEUgPSAnL21vYmlsZSc7XG5leHBvcnQgY29uc3QgREVTSyA9ICcvZGVza3RvcCc7XG5cbmV4cG9ydCBjb25zdCBMT0dPQkFSID0gJy9sb2dvYmFyJztcbmV4cG9ydCBjb25zdCBHSEJfTElOSyA9ICdodHRwczovL2dpdGh1Yi5jb20vbWVlbmdpdC9pZHMnO1xuZXhwb3J0IGNvbnN0IEdIQl9MT0dPID0gJy9naXRodWIucG5nJztcbmV4cG9ydCBjb25zdCBHRlpfTElOSyA9ICdodHRwOi8vZ2Z6LmNoJztcbmV4cG9ydCBjb25zdCBHRlpfTE9HTyA9ICcvZ2Z6LnBuZyc7XG5leHBvcnQgY29uc3QgTUZGX0xJTksgPSAnaHR0cDovL3d3dy5tZWRpZW5mb3JtZmFyYmUuY2gvJztcbmV4cG9ydCBjb25zdCBNRkZfTE9HTyA9ICcvbWZmLnBuZyc7XG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgTXFsLCByZW1vdmVFdnRMaXN0ZW5lciwgdG9nZ2xlVG9wIH0gZnJvbSAnLi91dGlscyc7XG5cbigoJCkgPT4ge1xuICBsZXQgbXFsID0gbmV3IE1xbCgpO1xuICBtcWwuTWVkaWFRdWVyeUxpc3RlbmVyKCk7XG4gIGZ1bmN0aW9uIGxvZ29iYXIob2JqLCBtZWRpYSkge1xuICAgIGxldCBsaW5rcyA9ICQob2JqKS5maW5kKCdhJyk7XG4gICAgbGV0IGltZ3MgPSAkKG9iaikuZmluZCgnaW1nJyk7XG4gICAgbGV0IGxvZ29zID0gWyBjb25maWcuR0hCX0xPR08sIGNvbmZpZy5HRlpfTE9HTywgY29uZmlnLk1GRl9MT0dPIF07XG4gICAgbGV0IHVybHMgPSBbIGNvbmZpZy5HSEJfTElOSywgY29uZmlnLkdGWl9MSU5LLCBjb25maWcuTUZGX0xJTksgXTtcbiAgICBsZXQgbG9nb0Jhc2VQYXRoID0gJyc7XG5cbiAgICBpZiAoY29uZmlnLkxPQ0FUSU9OLm9yaWdpbi5zZWFyY2goJ2xvY2FsaG9zdCcpKSB7XG4gICAgICBsb2dvQmFzZVBhdGggPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyArIGNvbmZpZy5JTUdfRElSICsgY29uZmlnLkxPR09CQVI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ29CYXNlUGF0aCA9IGNvbmZpZy5MT0NBVElPTi5vcmlnaW4gKyAnL2lkcycgKyBjb25maWcuSU1HX0RJUiArIGNvbmZpZy5MT0dPQkFSO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEF0dHIoZWxlbWVudHMsIHZhbHVlcywgYXR0cmlidXRlKSB7XG4gICAgICAkKGVsZW1lbnRzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAkKGVsZW1lbnQpLmF0dHIoYXR0cmlidXRlLCB2YWx1ZXNbaW5kZXhdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBzZXRMb2dvVXJsID0gKGRldmljZSkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2dvcy5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICBsb2dvc1tpXSA9IGxvZ29CYXNlUGF0aCArIGRldmljZSArIGxvZ29zW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvZ29zO1xuICAgIH07XG5cbiAgICBpZiAobWVkaWEgPT09ICdtJykge1xuICAgICAgc2V0QXR0cihsaW5rcywgdXJscywgJ2hyZWYnKTtcbiAgICAgIHNldEF0dHIoaW1ncywgc2V0TG9nb1VybChjb25maWcuTU9CSUxFKSwgJ3NyYycpO1xuICAgIH1cblxuICAgIGlmIChtZWRpYSA9PT0gJ2QnKSB7XG4gICAgICBzZXRBdHRyKGxpbmtzLCB1cmxzLCAnaHJlZicpO1xuICAgICAgc2V0QXR0cihpbWdzLCBzZXRMb2dvVXJsKGNvbmZpZy5ERVNLKSwgJ3NyYycpO1xuICAgIH1cbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKHdpbmRvdykub24oJ2JyZWFrcG9pbnQtY2hhbmdlJywgKGUsIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnbWluaScpID49IDApIHtcbiAgICAgICAgbG9nb2JhcignI2xvZ29iYXInLCAnbScpO1xuICAgICAgICAkKCduYXYnKS50b2dnbGUoKTtcbiAgICAgICAgdG9nZ2xlVG9wKCdidG5fbW9iaWxlbmF2JywgJ2NsaWNrJyk7XG4gICAgICAgIHRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsICd0b3VjaGVuZCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWluaScsIGJyZWFrcG9pbnQubGVuZ3RoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIGlmIChicmVha3BvaW50LnNlYXJjaCgnc21hbGwnKSA+PSAwKSB7XG4gICAgICAgIGxvZ29iYXIoJyNsb2dvYmFyJywgJ20nKTtcbiAgICAgICAgJCgnbmF2JykudG9nZ2xlKCk7XG4gICAgICAgIHRvZ2dsZVRvcCgnYnRuX21vYmlsZW5hdicsICdjbGljaycpO1xuICAgICAgICB0b2dnbGVUb3AoJ2J0bl9tb2JpbGVuYXYnLCAndG91Y2hlbmQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NtYWxsJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICBpZiAoYnJlYWtwb2ludC5zZWFyY2goJ21lZGl1bScpID49IDApIHtcbiAgICAgICAgbG9nb2JhcignI2xvZ29iYXInLCAnZCcpO1xuICAgICAgICAkKCduYXYnKS5zaG93KCk7XG4gICAgICAgIHJlbW92ZUV2dExpc3RlbmVyKCQoJyNidG5fbW9iaWxlbmF2JykpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaXVtJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICBpZiAoYnJlYWtwb2ludC5zZWFyY2goJ2xhcmdlJykgPj0gMCkge1xuICAgICAgICBsb2dvYmFyKCcjbG9nb2JhcicsICdkJyk7XG4gICAgICAgICQoJ25hdicpLnNob3coKTtcbiAgICAgICAgcmVtb3ZlRXZ0TGlzdGVuZXIoJCgnI2J0bl9tb2JpbGVuYXYnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXJnZScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlbmQgb2Ygd2luZG93IGJyZWFrcG9pbnQtY2hhbmdlXG4gIH0pO1xuICAvLyBlbmQgb2YgZG9jdW1lbnQgcmVhZHkgYnkgalF1ZXJ5XG59KShqUXVlcnkpO1xuIiwiZXhwb3J0IGNsYXNzIE1xbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5hZnRlckVsZW1lbnQpIHtcbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlIGp1c3QgcmV0dXJuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICB9O1xuXG4gICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIGxvYWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB0aGlzLmFmdGVyRWxlbWVudC5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCcmVha3BvaW50ICE9PSB0aGlzLmxhc3RCcmVha3BvaW50KSB7XG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2JyZWFrcG9pbnQtY2hhbmdlJywgdGhpcy5jdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgdGhpcy5sYXN0QnJlYWtwb2ludCA9IHRoaXMuY3VycmVudEJyZWFrcG9pbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cbiAgTWVkaWFRdWVyeUxpc3RlbmVyKCkge1xuICAgIHRoaXMuYWZ0ZXJFbGVtZW50ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCAnOmFmdGVyJykgOiBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gJyc7XG4gICAgdGhpcy5sYXN0QnJlYWtwb2ludCA9ICcnO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdnRMaXN0ZW5lcihlbGVtZW50KSB7XG4gIGxldCBlbENsb25lID0gZWxlbWVudC5jbG9uZSh0cnVlKTtcbiAgZWxlbWVudC5yZXBsYWNlV2l0aChlbENsb25lKTtcbn1cblxuLy8gZWxlbWVudFtzdHJpbmddLCB0YXJnZXRbb2JqXVxuZXhwb3J0IGZ1bmN0aW9uIHN0aWNreShlLCB0KSB7XG4gIHQuYmluZCgnbG9hZCcsICgpID0+IHtcbiAgICBsZXQgZUhlaWdodCA9IDA7XG4gICAgbGV0IGVUb3AgPSAwO1xuICAgIGxldCAkZSA9ICQoZSk7XG5cbiAgICBmdW5jdGlvbiBwb3MoKSB7XG4gICAgICBlSGVpZ2h0ID0gJGUuaGVpZ2h0KCk7XG4gICAgICBlVG9wID0gdC5zY3JvbGxUb3AoKSt0LmhlaWdodCgpLWVIZWlnaHQrJ3B4JztcbiAgICAgIGlmICgkKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpIDwgdC5oZWlnaHQoKSkge1xuICAgICAgICAkZS5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgIHRvcDogZVRvcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdzdGF0aWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvcygpO1xuICAgICQod2luZG93KS5zY3JvbGwocG9zKS5yZXNpemUocG9zKTtcbiAgfSk7XG4gIC8vIGVuZCBvZiBiaW5kXG59XG4vLyBlbmQgb2YgaWRzLnN0aWNreVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVG9wKG9iaiwgZXZ0KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iaikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ25hdicpLmFuaW1hdGUoe1xuICAgICAgaGVpZ2h0OiAndG9nZ2xlJ1xuICAgIH0sIDIwMCwgKCkgPT4ge1xuICAgICgkKCduYXYnKS5pcygnOnZpc2libGUnKSkgPyAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpIDogJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICB9KTtcbiAgICAvLyBlbmQgb2YgbmF2LmFuaW1hdGVcbiAgfSwgZmFsc2UpO1xufVxuLy8gZW5kIG9mIGlkcy5uYXZcbiJdfQ==
