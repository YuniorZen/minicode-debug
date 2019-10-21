/**
 * 自定义头部导航组件，基于官方导航组件Navigation开发。
 * 
 * 组件传参
 * <navigation-bar title="我的优惠券" bindgetBarInfo="getBarInfo"></navigation-bar>
 * 
 * 
 * 
*/

module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var app = getApp();

Component({
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        background: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: ''
        },
        loading: {
            type: Boolean,
            value: false
        },
        animated: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: true,
            observer: '_showChange'
        },
        delta: {
            type: Number,
            value: 1
        },
        border: {
          type: Boolean,
          value: false         
        },
    },
    data: {
        displayStyle: '',
        showBack:false
    },
    attached: function attached() {
        var _this = this;
        
        //动态计算导航栏尺寸
        var isSupport = !!wx.getMenuButtonBoundingClientRect;
        var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        wx.getSystemInfo({
            success: function success(res) {
              var ios = !!(res.system.toLowerCase().search('ios') + 1);
              var statusBarHeight=res.statusBarHeight;
              var topBarHeight=ios ? (44 + statusBarHeight) : (48 + statusBarHeight);

              _this.setData({
                  ios: ios,
                  topBarHeight:topBarHeight,
                  statusBarHeight:statusBarHeight,
                  innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
                  innerPaddingRight: isSupport ? 'padding-right:' + (res.windowWidth - rect.left) + 'px' : '',
                  leftWidth: isSupport ? 'width:' + (res.windowWidth - rect.left) + 'px' : ''
              }); 

              _this.triggerEvent('getBarInfo', {topBarHeight,statusBarHeight}); 
              console.log({ statusBarHeight, topBarHeight}, '================')                     
            }
        });

        //返回箭头处理
        var pages=getCurrentPages()      
        if(pages.length>1){
          this.setData({showBack:true})
        }
    },

    methods: {
        _showChange: function _showChange(show) {
            var animated = this.data.animated;
            var displayStyle = '';
            if (animated) {
                displayStyle = 'opacity: ' + (show ? '1' : '0') + ';-webkit-transition:opacity 0.5s;transition:opacity 0.5s;';
            } else {
                displayStyle = 'display: ' + (show ? '' : 'none');
            }
            this.setData({
                displayStyle: displayStyle
            });
        },
        goBack: function () {
          var data = this.data;
          wx.navigateBack({
              delta: data.delta
          });
          this.triggerEvent('back', { delta: data.delta }, {});
        },
        goHome:function(){
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
    }
});

/***/ })
/******/ ]);