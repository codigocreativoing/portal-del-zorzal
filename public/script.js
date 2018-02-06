(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigationOffCanvas;
// import Hammer from 'hammerjs'

function navigationOffCanvas() {
  var d = document,
      w = window,
      panel = d.querySelector('.Panel'),
      panelBtn = d.querySelector('.Panel-button'),
      mq = w.matchMedia('(min-width: 64em)'),
      hamburger = d.querySelector('.hamburger');
  // hammerBody = new Hammer(d.body),
  // hammerPanel = new Hammer(panel)

  function closePanel(mq) {
    if (mq.matches) {
      panel.classList.remove('is-active');
      hamburger.classList.remove('is-active');
    }
  }

  function hammerTouches(e) {
    if (e.type == 'swipeleft') {
      panel.classList.remove('is-active');
      hamburger.classList.remove('is-active');
    } else if (e.type == 'swiperight') {
      panel.classList.add('is-active');
      hamburger.classList.add('is-active');
    }
  }

  panelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    panel.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
  });

  mq.addListener(closePanel);
  closePanel(mq);

  // hammerPanel.on('swipeleft  swiperight', hammerTouches)
  // hammerBody.on('swipeleft  swiperight', hammerTouches)
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transparentHeader;
function transparentHeader() {
  var d = document,
      w = window,
      header = d.querySelector('.Header'),
      firstContent = d.querySelector('.u-firstContent'),
      firstContentHeight = w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
      headerHeight = w.getComputedStyle(header, null).getPropertyValue('height').split('px')[0];

  var scrollTopLimit = firstContentHeight - headerHeight;
  //console.log(firstContentHeight, headerHeight, scrollTopLimit)

  function headerScroll() {
    var scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > scrollTopLimit) {
      //console.log('abajo', scrollTop)
      header.classList.add('is-active');
    } else {
      //console.log('arriba', scrollTop)
      header.classList.remove('is-active');
    }
  }

  d.addEventListener('DOMContentLoaded', headerScroll);
  w.addEventListener('scroll', headerScroll, false);
}

},{}],3:[function(require,module,exports){
'use strict';

var _navigation_off_canvas = require('./components/navigation_off_canvas');

var _navigation_off_canvas2 = _interopRequireDefault(_navigation_off_canvas);

var _transparent_header = require('./components/transparent_header');

var _transparent_header2 = _interopRequireDefault(_transparent_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _navigation_off_canvas2.default)();
(0, _transparent_header2.default)();

},{"./components/navigation_off_canvas":1,"./components/transparent_header":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uX29mZl9jYW52YXMuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFx0cmFuc3BhcmVudF9oZWFkZXIuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O2tCQ0V3QixtQjtBQUZ4Qjs7QUFFZSxTQUFTLG1CQUFULEdBQStCO0FBQzVDLE1BQU0sSUFBSSxRQUFWO0FBQUEsTUFDRSxJQUFJLE1BRE47QUFBQSxNQUVFLFFBQVEsRUFBRSxhQUFGLENBQWdCLFFBQWhCLENBRlY7QUFBQSxNQUdFLFdBQVcsRUFBRSxhQUFGLENBQWdCLGVBQWhCLENBSGI7QUFBQSxNQUlFLEtBQUssRUFBRSxVQUFGLENBQWEsbUJBQWIsQ0FKUDtBQUFBLE1BS0UsWUFBWSxFQUFFLGFBQUYsQ0FBZ0IsWUFBaEIsQ0FMZDtBQU1FO0FBQ0E7O0FBRUYsV0FBUyxVQUFULENBQW9CLEVBQXBCLEVBQXdCO0FBQ3RCLFFBQUksR0FBRyxPQUFQLEVBQWdCO0FBQ2QsWUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0EsZ0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixXQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBUyxhQUFULENBQXVCLENBQXZCLEVBQTBCO0FBQ3hCLFFBQUksRUFBRSxJQUFGLElBQVUsV0FBZCxFQUEyQjtBQUN6QixZQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsV0FBdkI7QUFDQSxnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0QsS0FIRCxNQUdPLElBQUksRUFBRSxJQUFGLElBQVUsWUFBZCxFQUE0QjtBQUNqQyxZQUFNLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBb0IsV0FBcEI7QUFDQSxnQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLGFBQUs7QUFDdEMsTUFBRSxjQUFGO0FBQ0EsVUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0EsY0FBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0QsR0FKRDs7QUFNQSxLQUFHLFdBQUgsQ0FBZSxVQUFmO0FBQ0EsYUFBVyxFQUFYOztBQUVBO0FBQ0E7QUFDRDs7Ozs7Ozs7a0JDeEN1QixpQjtBQUFULFNBQVMsaUJBQVQsR0FBNkI7QUFDMUMsTUFBTSxJQUFJLFFBQVY7QUFBQSxNQUNFLElBQUksTUFETjtBQUFBLE1BRUUsU0FBUyxFQUFFLGFBQUYsQ0FBZ0IsU0FBaEIsQ0FGWDtBQUFBLE1BR0UsZUFBZSxFQUFFLGFBQUYsQ0FBZ0IsaUJBQWhCLENBSGpCO0FBQUEsTUFJRSxxQkFBcUIsRUFBRSxnQkFBRixDQUFtQixZQUFuQixFQUFpQyxJQUFqQyxFQUF1QyxnQkFBdkMsQ0FBd0QsUUFBeEQsRUFBa0UsS0FBbEUsQ0FBd0UsSUFBeEUsRUFBOEUsQ0FBOUUsQ0FKdkI7QUFBQSxNQUtFLGVBQWUsRUFBRSxnQkFBRixDQUFtQixNQUFuQixFQUEyQixJQUEzQixFQUFpQyxnQkFBakMsQ0FBa0QsUUFBbEQsRUFBNEQsS0FBNUQsQ0FBa0UsSUFBbEUsRUFBd0UsQ0FBeEUsQ0FMakI7O0FBT0EsTUFBSSxpQkFBaUIscUJBQXFCLFlBQTFDO0FBQ0E7O0FBRUEsV0FBUyxZQUFULEdBQXdCO0FBQ3RCLFFBQUksWUFBWSxFQUFFLFdBQUYsSUFBaUIsRUFBRSxlQUFGLENBQWtCLFNBQW5EOztBQUVBLFFBQUksWUFBWSxjQUFoQixFQUFnQztBQUM5QjtBQUNBLGFBQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQixXQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMO0FBQ0EsYUFBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFdBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxJQUFFLGdCQUFGLENBQW1CLGtCQUFuQixFQUF1QyxZQUF2QztBQUNBLElBQUUsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsWUFBN0IsRUFBMkMsS0FBM0M7QUFDRDs7Ozs7QUN6QkQ7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZpZ2F0aW9uT2ZmQ2FudmFzKCkge1xuICBjb25zdCBkID0gZG9jdW1lbnQsXG4gICAgdyA9IHdpbmRvdyxcbiAgICBwYW5lbCA9IGQucXVlcnlTZWxlY3RvcignLlBhbmVsJyksXG4gICAgcGFuZWxCdG4gPSBkLnF1ZXJ5U2VsZWN0b3IoJy5QYW5lbC1idXR0b24nKSxcbiAgICBtcSA9IHcubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNjRlbSknKSxcbiAgICBoYW1idXJnZXIgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxuICAgIC8vIGhhbW1lckJvZHkgPSBuZXcgSGFtbWVyKGQuYm9keSksXG4gICAgLy8gaGFtbWVyUGFuZWwgPSBuZXcgSGFtbWVyKHBhbmVsKVxuXG4gIGZ1bmN0aW9uIGNsb3NlUGFuZWwobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbW1lclRvdWNoZXMoZSkge1xuICAgIGlmIChlLnR5cGUgPT0gJ3N3aXBlbGVmdCcpIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PSAnc3dpcGVyaWdodCcpIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG4gICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBwYW5lbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gIH0pXG5cbiAgbXEuYWRkTGlzdGVuZXIoY2xvc2VQYW5lbClcbiAgY2xvc2VQYW5lbChtcSlcblxuICAvLyBoYW1tZXJQYW5lbC5vbignc3dpcGVsZWZ0ICBzd2lwZXJpZ2h0JywgaGFtbWVyVG91Y2hlcylcbiAgLy8gaGFtbWVyQm9keS5vbignc3dpcGVsZWZ0ICBzd2lwZXJpZ2h0JywgaGFtbWVyVG91Y2hlcylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zcGFyZW50SGVhZGVyKCkge1xuICBjb25zdCBkID0gZG9jdW1lbnQsXG4gICAgdyA9IHdpbmRvdyxcbiAgICBoZWFkZXIgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5IZWFkZXInKSxcbiAgICBmaXJzdENvbnRlbnQgPSBkLnF1ZXJ5U2VsZWN0b3IoJy51LWZpcnN0Q29udGVudCcpLFxuICAgIGZpcnN0Q29udGVudEhlaWdodCA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShmaXJzdENvbnRlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNwbGl0KCdweCcpWzBdLFxuICAgIGhlYWRlckhlaWdodCA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkZXIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNwbGl0KCdweCcpWzBdXG5cbiAgbGV0IHNjcm9sbFRvcExpbWl0ID0gZmlyc3RDb250ZW50SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gIC8vY29uc29sZS5sb2coZmlyc3RDb250ZW50SGVpZ2h0LCBoZWFkZXJIZWlnaHQsIHNjcm9sbFRvcExpbWl0KVxuXG4gIGZ1bmN0aW9uIGhlYWRlclNjcm9sbCgpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdy5wYWdlWU9mZnNldCB8fCBkLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcblxuICAgIGlmIChzY3JvbGxUb3AgPiBzY3JvbGxUb3BMaW1pdCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnYWJham8nLCBzY3JvbGxUb3ApXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICB9IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmxvZygnYXJyaWJhJywgc2Nyb2xsVG9wKVxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgZC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGVhZGVyU2Nyb2xsKVxuICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhlYWRlclNjcm9sbCwgZmFsc2UpXG59XG4iLCJpbXBvcnQgbmF2aWdhdGlvbk9mZkNhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbl9vZmZfY2FudmFzJ1xuaW1wb3J0IHRyYW5zcGFyZW50SGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy90cmFuc3BhcmVudF9oZWFkZXInXG5cbm5hdmlnYXRpb25PZmZDYW52YXMoKVxudHJhbnNwYXJlbnRIZWFkZXIoKVxuIl19
