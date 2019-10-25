/**
 * 自定义头部导航组件，基于官方组件Navigation开发。
 * 
 * <navigation-bar title="会员中心" bindgetBarInfo="getBarInfo"></navigation-bar>
 * 
 * 组件属性列表 
 * bindgetBarInfo {eventhandler}  组件实例载入页面时触发此事件，首参为event对象，event.detail携带当前导航栏信息，如导航栏高度 event.detail.topBarHeight
 * backImage      {string}  back按钮的图标地址
 * homeImage      {string}  home按钮的图标地址
 * bindback	      {eventhandler}	点击back按钮触发此事件响应函数
 * ext-class	    {string}	添加在组件内部结构的class，可用于修改组件内部的样式
 * title	        {string}	导航标题，如果不提供为空
 * background	    {string}	导航背景色，默认#ffffff
 * color	        {string}	导航字体颜色
 * dbclickBackTop {boolean}	是否开启双击返回顶部功能，默认true
 * border         {boolean}	是否显示顶部边框，默认false
 * loading	      {boolean}	是否显示标题左侧的loading，默认false
 * show	          {boolean}	显示隐藏导航，隐藏的时候navigation的高度占位还在,默认true
 * left	          {boolean}	左侧区域是否使用slot内容，默认false
 * center	        {boolean}	中间区域是否使用slot内容，默认false
 *  
 * Slot Name
 * left	          左侧slot，在back按钮位置显示，当left属性为true的时候有效
 * center	        标题slot，在标题位置显示，当center属性为true的时候有效
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
    backImage: {
      type: String,
      value: '/static/icon/icon_back.svg'
    },
    homeImage: {
      type: String,
      value: '/static/icon/icon_home.png'
    },
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
      value: '#ffffff'
    },
    color: {
      type: String,
      value: '#000000'
    },
    dbclickBackTop:{
      type:Boolean,
      value:true
    },
    border: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange'
    },  
    left: {
      type: Boolean,
      value: false
    },
    center: {
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
        }
    });

    //back箭头处理的显示
    var pages=getCurrentPages()      
    if(pages.length>1){
      this.setData({showBack:true})
    }
  },
  methods: {
    _showChange: function _showChange(show) {           
      var displayStyle = 'opacity: ' + (show ? '1' : '0') + ';-webkit-transition:opacity 0.5s;transition:opacity 0.5s;';           
      this.setData({
          displayStyle: displayStyle
      });
    },
    //点击back事件处理
    goBack: function () {
      wx.navigateBack();
      this.triggerEvent('back');
    },
    //返回首页
    goHome:function(){
      wx.reLaunch({
        url: '/pages/index/index'
      })
    },
    //双击返回顶部
    doubleClick(e) {
      if (!this.data.dbclickBackTop){return}
      if (this.timeStamp && (e.timeStamp - this.timeStamp < 300)) {
        this.timeStamp = 0
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
      } else {
        this.timeStamp = e.timeStamp
      }
    }
  }
});

/***/ })
/******/ ]);