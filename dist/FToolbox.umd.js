(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.FToolbox = factory());
}(this, (function () { 'use strict';

    function lazyLoad(__setting) {
      var imgList = document.querySelectorAll("img[data-origin]"); // 节流函数

      function throttle(func, timeout) {
        var flag = 1;
        return function () {
          if (flag) {
            flag = 0;
            setTimeout(function () {
              func();
              flag = 1;
            }, timeout);
          }
        };
      }

      var checkInView = function checkInView() {
        for (var i = 0; i < imgList.length; i++) {
          var elem = imgList[i];
          var Y = elem.offsetTop;
          var limit = document.documentElement.scrollTop + document.documentElement.clientHeight;
          var url = elem.getAttribute('data-origin');

          if (Y < limit) {
            elem.src = url;
          }
        }
      };

      checkInView = throttle(checkInView, __setting.timeout);
      window.addEventListener('scroll', function () {
        lazyLoad();
      });
    }

    function throttle(__setting) {
      var flag = 1;
      return function () {
        var argList = [].slice.call(arguments);

        if (flag) {
          flag = 0;
          setTimeout(function () {
            __setting.func.apply(__setting.context, argList);
          }, __setting.timeout);
        }
      };
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function deepcopy(obj) {
      var result = {};

      for (var item in obj) {
        if (obj[item] instanceof Array) {
          result[item] = [].slice.call(obj[item]);
        } else if (typeof obj[item] === 'function') {
          result[item] = obj[item].bind(result);
        } else if (_typeof(obj[item]) === 'object') {
          result[item] = deepcopy(obj[item]);
        } else {
          result[item] = obj[item];
        }
      }

      return result;
    }

    function debounce(__setting) {
      var timer = null;
      return function () {
        var argList = [].slice.call(arguments);

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {
          __setting.func.apply(__setting.context, argList);
        }, __setting.timeout);
      };
    }

    function f() {}

    f.lazyload = lazyLoad;
    f.throttle = throttle;
    f.debounce = debounce;
    f.deepcopy = deepcopy;

    return f;

})));
//# sourceMappingURL=FToolbox.umd.js.map
