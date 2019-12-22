/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/iconfont.css */ \"./src/fonts/iconfont.css\");\n/* harmony import */ var _fonts_iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\nvar audio = __webpack_require__(/*! ./js/audio.js */ \"./src/js/audio.js\");\n\n__webpack_require__(/*! ./css/audio.css */ \"./src/css/audio.css\");\n\n__webpack_require__(/*! ./stylus/audio.styl */ \"./src/stylus/audio.styl\");\n\n__webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n\n\nconsole.log(audio + '1');\n\n//# sourceURL=webpack:///./src/bundle.js?");

/***/ }),

/***/ "./src/css/audio.css":
/*!***************************!*\
  !*** ./src/css/audio.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/audio.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/reset.css?");

/***/ }),

/***/ "./src/fonts/iconfont.css":
/*!********************************!*\
  !*** ./src/fonts/iconfont.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/fonts/iconfont.css?");

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, module) {function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*created by wangqiaoqiao \n* Datetime: 2019/5/2 \n*/\n(function () {\n  var root = (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) == 'object' && self.self == self && self || (typeof global === \"undefined\" ? \"undefined\" : _typeof(global)) == 'object' && global.global == global && global || this || {};\n  var util = {\n    extend: function extend(target) {\n      for (var i = 1, len = arguments.length; i < len; i++) {\n        for (var prop in arguments[i]) {\n          if (arguments[i].hasOwnProperty(prop)) {\n            target[prop] = arguments[i][prop];\n          }\n        }\n      }\n\n      return target;\n    },\n    indexOf: function indexOf(array, item) {\n      if (array.indexOf) {\n        return array.indexOf(item);\n      } else {\n        var result = -1;\n\n        for (var i = 0, len = array.length; i < len; i++) {\n          if (array[i] === item) {\n            result = i;\n            break;\n          }\n        }\n\n        return result;\n      }\n    },\n    addEvent: function addEvent(element, type, fn) {\n      if (document.addEventListener || Window.addEventlistener) {\n        element.addEventListener(type, fn, false);\n        return fn;\n      } else if (document.attachEvent || Window.attachEvent) {\n        var bound = function bound() {\n          return fn.apply(element, arguments);\n        };\n\n        element.attachEvent('on' + type, bound);\n        return bound;\n      }\n    },\n    addClass: function addClass(element, className) {\n      var elementName = typeof element === \"string\" ? document.querySelector(element) : element;\n      var classNames = elementName.className.split(/\\s+/);\n\n      if (util.indexOf(classNames, className) == -1) {\n        classNames.push(className);\n      }\n\n      elementName.className = classNames.join('');\n    },\n    removeClass: function removeClass(element, className) {\n      var elementName = typeof element === \"string\" ? document.querySelector(element) : element;\n      var classNames = elementName.className.split(/\\s+/);\n      var index = util.indexOf(classNames, className);\n\n      if (index !== -1) {\n        classNames.splice(index, 1);\n      }\n\n      elementName.className = classNames.join('');\n    },\n    typeofqs: function typeofqs(element) {\n      return typeof element === \"string\" ? document.querySelector(element) : element;\n    },\n    contextmenushow: function contextmenushow(clientRect, x, y) {\n      // 让右键点击屏幕的菜单展示到鼠标所指的位置\n      var cRect = clientRect.getBoundingClientRect();\n    }\n  };\n\n  function Videoplayer(btn, videoplay, videopause, choicefs, fullscreen, fsicon, exitfsicon, timebeat, timetotal, pipbtn, speedbtn, speedlist, slistclassopen, slistclassshut, slistone, slisttwo, slistthree, slistfour, volumebtn, volumemouse, vmuteclass, vmediumclass, vbigclass, vcontrols, volumehead, vprogress, apcontrols, audiohead, audioprogress, aloadprogress, mousevolumedistance, mouseaprogressdistance, audioloadingselect, loadinghideclass, rightclickmenu) {\n    this.btn = btn; //绑定播放按钮\n\n    this.videoplay = videoplay; //提供开始播放类名的属性\n\n    this.videopause = videopause; //提供暂停播放类名的属性\n\n    this.choicefs = choicefs; //提供全屏的类名属性\n\n    this.fullscreen = fullscreen; //提供点击按钮会全屏属性\n\n    this.fsicon = fsicon;\n    this.exitfsicon = exitfsicon;\n    this.timebeat = timebeat; //提供时间的类名属性\n\n    this.timetotal = timetotal;\n    this.pipbtn = pipbtn; //提供画中画的类名属性\n\n    this.speedbtn = speedbtn; //提供点击倍速按钮并显示倍速列表的类名属性\n\n    this.speedlist = speedlist;\n    this.slistclassopen = slistclassopen;\n    this.slistclassshut = slistclassshut;\n    this.slistone = slistone;\n    this.slisttwo = slisttwo;\n    this.slistthree = slistthree;\n    this.slistfour = slistfour;\n    this.volumebtn = volumebtn;\n    this.volumemouse = volumemouse;\n    this.vmuteclass = vmuteclass;\n    this.vmediumclass = vmediumclass;\n    this.vbigclass = vbigclass;\n    this.vcontrols = vcontrols;\n    this.volumehead = volumehead;\n    this.apcontrols = apcontrols;\n    this.vprogress = vprogress;\n    this.audiohead = audiohead;\n    this.audioprogress = audioprogress;\n    this.aloadprogress = aloadprogress;\n    this.mousevolumedistance = mousevolumedistance;\n    this.mouseaprogressdistance = mouseaprogressdistance;\n    this.audioloadingselect = audioloadingselect;\n    this.loadinghideclass = loadinghideclass;\n    this.rightclickmenu = rightclickmenu;\n  }\n\n  Video.defaultOptions = {\n    //提供参数的地方\n    btn: this.btn,\n    //利用对象字面量的形式（this.btn其实就等于this.options.btn）\n    videoplay: this.videoplay,\n    videopause: this.videopause,\n    fullscreen: this.fullscreen,\n    choicefs: this.choicefs,\n    fsicon: this.fsicon,\n    exitfsicon: this.exitfsicon,\n    timebeat: this.timebeat,\n    timetotal: this.timetotal,\n    //提供获取视频总时间的属性\n    pipbtn: this.pipbtn,\n    speedbtn: this.speedbtn,\n    speedlist: this.speedlist,\n    slistclassopen: this.slistclassopen,\n    slistclasshut: this.slistclasshut,\n    slistone: this.slistone,\n    slisttwo: this.slisttwo,\n    slistthree: this.slistthree,\n    slistfour: this.slistfour,\n    volumebtn: this.volumebtn,\n    volumemouse: this.volumemouse,\n    vmuteclass: this.vmuteclass,\n    vmediumclass: this.vmediumclass,\n    vbigclass: this.vbigclass,\n    vcontrols: this.vcontrols,\n    volumehead: this.volumehead,\n    vprogress: this.vprogress,\n    apcontrols: this.apcontrols,\n    audiohead: this.audiohead,\n    audioprogress: this.audioprogress,\n    aloadprogress: this.aloadprogress,\n    mousevolumedistance: this.mousevolumedistance,\n    mouseaprogressdistance: this.mouseaprogressdistance,\n    audioloadingselect: this.audioloadingselect,\n    loadinghideclass: this.loadinghideclass //这里的this指向为Video\n\n  };\n\n  function Video(name, options) {\n    Videoplayer.call(arguments);\n    this.name = typeof name === \"string\" ? document.querySelector(name) : name;\n    this.options = util.extend({}, this.constructor.defaultOptions, options);\n    /**\n     * 接着引用拷贝函数以拷贝的形式复制父类并使用属性\n     * 接着call方法让Video类继承Videoplayer类\n     * 通过继承的属性储存在了子类型中\n     * 接着创建一个共有属性让它等于拷贝函数(this.options = util.extend({}, \n     * this.constructor.defaultOptions, options))\n     * 接着声明一个变量并实例化让Video类的prototype属性实例化Videoplayer类\n     * 接着在修复Video类让声明的的那个变量的constructor属性指向Video类\n     */\n\n    this.init();\n  }\n\n  var proto = Video.prototype = new Videoplayer();\n  proto.constructor = Video;\n  proto.version = '%c2.0.0';\n  proto.buildtime = '%c2019-12-20T14:25Z';\n\n  proto.init = function () {\n    this.bindclick();\n    this.bindfscreen();\n    this.bindbtn();\n    this.exitfscreen();\n    this.onoff_fsbtn();\n    this.bindVideotime();\n    this.bindpinpicture();\n    this.bindspeed();\n    this.bindvolume();\n    this.bindVideotime();\n    this.bindaudiocontrols();\n    this.bindloadingpic(); // this.bindrightmenu();\n    // 创建init函数为共有方法\n\n    var _totalsone$totalstwo = {\n      totalsone: \"color: #fff; background: #606060; font-size: 11px; padding: 0px 6px 0px 6px; border-radius: 3px 0px 0px 3px;\",\n      totalstwo: \"background: #1475b2;color: #fff;font-size: 11px; padding: 0px 6px 0px 6px; border-radius: 0 3px 3px 0;\"\n    },\n        totalsone = _totalsone$totalstwo.totalsone,\n        totalstwo = _totalsone$totalstwo.totalstwo;\n    console.log(\"\" + \"%cVeision\" + proto.version + \"\", totalsone, totalstwo);\n    console.log(\"\" + \"%cbuildtime\" + proto.buildtime + \"\", totalsone, totalstwo);\n  };\n\n  proto.bindclick = function () {\n    var audio = this.name; //let videobtn = this.btn;\n\n    var videoplay = this.options.videoplay;\n    var videopause = this.options.videopause;\n    var selectorvbtn = util.typeofqs(this.options.btn);\n    util.addEvent(audio, \"click\", function () {\n      //主屏幕点击触发\n      if (audio.paused) {\n        audio.play(); //video.addClass()\n\n        selectorvbtn.className = videopause + \"\";\n      } else if (audio.played) {\n        audio.pause(); //video.removeClass();\n\n        selectorvbtn.className = videoplay + \"\";\n      }\n    });\n  };\n\n  proto.bindbtn = function () {\n    var audio = this.name;\n    var selectorvbtn = util.typeofqs(this.options.btn);\n    var videoplay = this.options.videoplay;\n    var videopause = this.options.videopause;\n    util.addEvent(selectorvbtn, \"click\", function () {\n      //视频控制播放暂停的点击事件触发\n      if (audio.paused) {\n        audio.play();\n        console.log(selectorvbtn);\n        selectorvbtn.className = videopause + \"\";\n      } else if (audio.played) {\n        audio.pause();\n        selectorvbtn.className = videoplay + \"\";\n      }\n    });\n  };\n\n  proto.bindfscreen = function () {\n    var selectfs = util.typeofqs(this.options.fullscreen);\n    var selectfsbtn = util.typeofqs(this.options.choicefs);\n    var ele = document.documentElement || document || window || document.body;\n    util.addEvent(selectfsbtn, \"click\", function () {\n      if (ele.requestFullscreen) {\n        selectfs.requestFullscreen();\n      } else if (ele.msRequestFullScreen) {\n        selectfs.msRequestFullScreen();\n      } else if (ele.mozRequestFullScreen) {\n        selectfs.mozRequestFullScreen();\n      } else if (ele.webkitRequestFullScreen) {\n        selectfs.webkitRequestFullScreen();\n      } else if (ele.oRequestFullScreen) {\n        selectfs.oRequestFullScreen();\n      }\n    });\n  };\n\n  proto.exitfscreen = function () {\n    var selectfsbtn = util.typeofqs(this.options.choicefs);\n    var ele = document || document.body || window; //获取退出时的文档\n\n    util.addEvent(selectfsbtn, \"click\", function () {\n      if (ele.exitFullScreen) {\n        ele.exitFullscreen();\n      } else if (ele.msCancelFullScreen) {\n        ele.msCancelFullScreen();\n      } else if (ele.mozCancelFullScreen) {\n        ele.mozCancelFullScreen();\n      } else if (ele.webkitCancelFullScreen) {\n        ele.webkitCancelFullScreen();\n      } else if (ele.oCancelFullScreen) {\n        ele.oCancelFullScreen();\n      }\n    });\n  };\n\n  proto.onoff_fsbtn = function () {\n    //这是点击全屏按钮时的图标切换模块\n    //let fsbtn = this.choicefs;//获取将要点击的视屏类名id\n    var selectfsbtn = util.typeofqs(this.options.choicefs);\n    var onoff = true;\n    var fsicon = this.options.fsicon;\n    var efsbtn = this.options.exitfsicon;\n    util.addEvent(selectfsbtn, \"click\", function () {\n      if (onoff == true) {\n        selectfsbtn.className = efsbtn + \"\";\n        onoff = false;\n      } else {\n        selectfsbtn.className = fsicon + \"\";\n        onoff = true;\n      }\n    });\n  };\n\n  proto.bindpinpicture = function () {\n    var audio = this.name; //let pip = this.pipbtn;\n\n    var pipbtn = util.typeofqs(this.options.pipbtn);\n    var ele = document || document.body || window;\n    util.addEvent(pipbtn, \"click\", function () {\n      if (audio !== document.pictureInPictureElement) {\n        audio.requestPictureInPicture();\n      } else {\n        ele.exitPictureInPicture();\n      }\n    });\n  };\n\n  proto.bindVideotime = function () {\n    var audio = this.name;\n    var mapdistance = this.options.mouseaprogressdistance;\n    var changetime = util.typeofqs(this.options.timebeat);\n    var aheadselect = util.typeofqs(this.options.audiohead);\n    var alpselect = util.typeofqs(this.options.aloadprogress);\n    var apselect = util.typeofqs(this.options.audioprogress);\n    var apcselect = util.typeofqs(this.options.apcontrols);\n    var ttselect = util.typeofqs(this.options.timetotal);\n    util.addEvent(audio, \"canplay\", function () {\n      audio.canplay = true; //开启canplyaudio属性的作用\n    });\n    util.addEvent(audio, \"timeupdate\", function () {\n      var buff_pro = parseInt(buffered / duration * 100);\n      var cur = parseInt(audio.currentTime); //用变量来接收一个音频的秒数并取整(228秒)\n\n      var temp = cur;\n      var minute = parseInt(temp / 60); //转换成分钟为后面的程序做准备\n\n      var clock = parseInt(temp / 3600);\n\n      if (audio.canplay) {\n        var currentTime = audio.currentTime;\n        var buffered = audio.buffered.end(0);\n        var duration = audio.duration;\n\n        for (var i = 0; i < audio.buffered.length; i++) {\n          if (currentTime < audio.buffered.end(i)) {\n            buffered = audio.buffered.end(i);\n            break;\n          }\n        }\n\n        var buff_pro = parseInt(buffered / duration * 100);\n        var buffwow = currentTime / duration * 100;\n        var total = buffwow - mapdistance * 0.1;\n        apselect.style.width = buffwow + \"%\";\n        aheadselect.style.left = total + \"%\";\n        alpselect.style.width = buff_pro + \"%\";\n      }\n\n      if (cur % 60 < 10) {\n        //在cur变量模余60小于10的时候的时候试一下作用\n        changetime.innerHTML = \"\" + minute + \":0\" + cur % 60 + \"\";\n      } else if (minute < 10) {\n        changetime.innerHTML = \"\" + minute + \":\" + cur % 60 + \"\";\n      } else if (minute > 10 && minute < 60) {\n        changetime.innerHTML = \"\" + minute + \":\" + cur % 60 + \"\";\n      } else if (clock < 10 || minute < 10 || cur % 60 < 10) {\n        changetime.innerHTML = \"\" + clock + \":0\" + minute + \":0\" + cur % 60 + \"\";\n      } else if (clock < 10 || minute < 10 || cur % 60 > 10) {\n        changetime.innerHTML = \"\" + clock + \":0\" + minute + \":\" + cur % 60 + \"\";\n      } else {\n        changetime.innerHTML = \"\" + clock + \":\" + minute + \":\" + cur % 60 + \"\";\n      }\n    });\n    util.addEvent(audio, \"loadedmetadata\", function () {\n      //当音频成功获取资源是运行以下程序\n      var cur = parseInt(audio.duration);\n      var temp = cur; //用变量来接收一个音频的秒数并取整(228秒)\n\n      var minute = parseInt(temp / 60); //转换成分钟为后面的程序做准备\n\n      var clock = parseInt(temp / 3600);\n      ttselect.innerHTML = \"\" + minute + \":\" + temp % 60 + \"\";\n    });\n  };\n\n  proto.bindspeed = function () {\n    var audio = this.name;\n    var slistclassopen = this.options.slistclassopen;\n    var slistclassshut = this.options.slistclassshut;\n    var speedselect = util.typeofqs(this.options.speedbtn);\n    var slselect = util.typeofqs(this.options.speedlist);\n    var slschildren = slselect.childNodes.item(1).children;\n    var sloneselect = util.typeofqs(this.options.slistone);\n    var sltwoselect = util.typeofqs(this.options.slisttwo);\n    var slthreeselect = util.typeofqs(this.options.slistthree);\n    var slfourselect = util.typeofqs(this.options.slistfour);\n    var onoff = true;\n    Videoplayer.call(arguments);\n    util.addEvent(speedselect, \"click\", function () {\n      if (onoff == true) {\n        slselect.className = slistclassopen + \"\";\n        onoff = false;\n      } else {\n        slselect.className = slistclassshut + \"\";\n        onoff = true;\n      }\n    });\n\n    if (sloneselect && sltwoselect && slthreeselect && slfourselect === 'undefined') {\n      alert(视频播放速率属性未定义);\n    } else {\n      (function () {\n        var speedarr = [\"0.5\", \"1.0\", \"1.5\", \"2.0\"];\n\n        var _loop = function _loop(i) {\n          slschildren[i].onclick = function () {\n            audio.playbackRate = speedarr[i];\n\n            if (audio.playbackRate === 1.0) {\n              speedselect.innerHTML = \"正常\";\n            } else {\n              speedselect.innerHTML = audio.playbackRate + \"x\";\n            }\n          };\n        };\n\n        for (var i = 0; i < slschildren.length; i++) {\n          _loop(i);\n        }\n      })();\n    }\n    /**\n     * 视频源的playbackRate属性是显示视频源的播放速度\n     */\n\n  };\n\n  proto.bindvolume = function () {\n    var audio = this.name;\n    var vmediumclass = this.options.vmediumclass;\n    var vmuteclass = this.options.vmuteclass;\n    var vbigclass = this.options.vbigclass;\n    var onoff = true;\n    var mapdistance = this.options.mouseaprogressdistance;\n    var vbselect = util.typeofqs(this.options.volumebtn);\n    var vmselect = util.typeofqs(this.options.volumemouse);\n    var vcselect = util.typeofqs(this.options.vcontrols);\n    var vpselect = util.typeofqs(this.options.vprogress);\n    var vhselect = util.typeofqs(this.options.volumehead);\n    util.addEvent(vbselect, \"mouseover\", function () {\n      vmselect.style = \"display: block\";\n    });\n    util.addEvent(vbselect, \"click\", function () {\n      if (onoff == true) {\n        audio.volume = 0;\n        vmselect.style = \"display: none\";\n        vbselect.className = vmuteclass + \"\";\n        onoff = false;\n      } else {\n        audio.volume = 0.5;\n        vmselect.style = \"display: block\";\n        vbselect.className = vmediumclass + \"\";\n        onoff = true;\n      }\n    });\n    util.addEvent(vcselect, \"click\", function (e) {\n      var position = 1 - e.offsetY / vcselect.offsetHeight;\n      var pero = 1 - e.offsetY / vcselect.offsetHeight;\n      var percentage = Math.floor(position * vcselect.offsetHeight);\n      var total = percentage - mapdistance;\n\n      if (percentage < 0) {\n        percentage = 0;\n      }\n\n      audio.volume = parseFloat(percentage / 100) * 1;\n      vhselect.style.bottom = \"\" + total + \"px\";\n      vpselect.style.height = \"\" + (1 - audio.volume) * 100 + \"%\";\n\n      if (percentage <= 0) {\n        vbselect.className = vmuteclass + \"\";\n      } else if (audio.volume <= 0.5) {\n        vbselect.className = vmediumclass + \"\";\n      } else if (audio.volume >= 0.5) {\n        vbselect.className = vbigclass + \"\";\n      }\n    });\n    util.addEvent(vmselect, \"mouseover\", function () {\n      this.style = \"display: block\";\n    });\n    util.addEvent(vmselect, \"mouseout\", function () {\n      this.style = \"display: none\";\n    });\n  };\n\n  proto.bindaudiocontrols = function () {\n    var audio = this.name;\n    var mapdistance = this.options.mouseaprogressdistance;\n    var aheadselect = util.typeofqs(this.options.audiohead);\n    var apselect = util.typeofqs(this.options.audioprogress);\n    var apcselect = util.typeofqs(this.options.apcontrols);\n    util.addEvent(apcselect, \"click\", function (e) {\n      var offsetx = e.offsetX;\n      var lenth = audio.duration;\n      var position = Math.floor(offsetx - mapdistance);\n      audio.currentTime = \"\" + parseInt(offsetx * lenth / apcselect.offsetWidth) + \"\";\n      aheadselect.style.left = position + \"px\";\n      apselect.style.width = offsetx + \"px\";\n      audio.play();\n    });\n  };\n\n  proto.bindloadingpic = function () {\n    var audio = this.name;\n    var loadinghide = this.options.loadinghideclass; //let audioloading = this.audioloadingselect;\n\n    var loadingselect = util.typeofqs(this.options.audioloadingselect);\n    util.addEvent(audio, \"waiting\", function () {\n      //删除待加载的图标组件\n      util.removeClass(loadingselect, loadinghide);\n    });\n    util.addEvent(audio, \"playing\", function () {\n      //添加待加载的图标组件\n      util.addClass(loadingselect, loadinghide);\n    });\n    util.addEvent(audio, \"loadstart\", function () {\n      //客户端正在请求数据时删除待加载的图标组件\n      util.removeClass(loadingselect, loadinghide);\n    });\n  };\n  /**\n   * 屏幕上右键点击出现信息菜单\n   * @privatemethod bindrightmenu\n   * @author wangqiaoqiaogithub\n   * */\n\n\n  proto.bindrightmenu = function () {\n    var audio = this.name;\n    var rclickmenu = this.util.typeofqs(this.options.rightclickmenu);\n    var onoff = true;\n    util.addEvent(audio, \"contextmenu\", function (e) {\n      var event = e || window.event; // let clientRect = audio.getBoundingClientRect();\n\n      event.preventDefult(); //阻止事件默认\n      // \b监听点击右键事件\n\n      if (onoff == true) {\n        console.log(1);\n        rclickmenu.style = \"display:block\";\n        onoff = false;\n      } else {\n        console.log(2);\n        rclickmenu.style = \"display:none\";\n        onoff = true;\n      }\n    });\n  };\n  /**\n   * 镜像画面效果（屏幕反转）\n   * @privatemethod mrotate\n   * @autor wangqiaoqiaogithub\n   */\n\n\n  proto.bindmrotate = function () {\n    var audio = this.name;\n    var rotatebtn = ss;\n    var onoff = true;\n    util.addEvent(rotatebtn, \"click\", function () {\n      if (onoff == true) {\n        audio.style = 'transform: rotateY(180deg)';\n        onoff = false;\n      } else {\n        audio.style = null;\n        onoff = true;\n      }\n    });\n  };\n  /** \n   * 视频思路:\n   * 获取到this.name（视屏来源）,给this.btn添加点击事件(作用点)\n   * 对this.btn做出判断\n  */\n\n\n  if ( true && !exports.nodeType) {\n    if ( true && !module.nodeType && module.exports) {\n      exports = module.exports = Video;\n    }\n\n    exports.Video = Video;\n  } else {\n    root.Video = Video;\n  }\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/js/audio.js?");

/***/ }),

/***/ "./src/stylus/audio.styl":
/*!*******************************!*\
  !*** ./src/stylus/audio.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/stylus/audio.styl?");

/***/ })

/******/ });