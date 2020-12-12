/**
 * author:Yunior, https://github.com/YuniorZen
 * 
 * 自定义头部导航组件，基于官方weui组件Navigation开发。
 * 
 * <navigation-bar-simple 
 *   bindgetBarInfo="getBarInfo"
 *   show="{{true}}">
 *     <view slot="left">
 *       <view class="square">左侧slot</view>
 *     </view>
 *     <view slot="center">
 *       <view class="square">中间slot</view>
 *     </view>
 * </navigation-bar-simple>
 * 
 * 组件属性列表 
 * bindgetBarInfo {eventhandler}  组件实例载入页面时触发此事件，首参为event对象，event.detail携带当前导航栏信息，如导航栏高度 event.detail.topBarHeight
 * extClass	      {string}	添加在组件上的class，可用于自定义修改组件内部的样式
 * dbclickBackTop {boolean}	是否开启双击返回顶部功能，默认true
 * show	          {boolean}	显示隐藏导航，隐藏的时候navigation的高度占位还在,默认true
 *  
 * 内部插槽名称
 * left	          导航左侧slot名称
 * center	        导航中间slot名称
 * 
*/

Component({
  options: {
    multipleSlots: true,
    addGlobalClass:true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    dbclickBackTop:{
      type:Boolean,
      value:true
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange'
    }
  },
  data: {
    displayStyle: ''
  },
  attached: function() { 
    var _this=this     
    wx.getSystemInfo({
      success: function success(res) {
        //获取菜单按钮（右上角胶囊按钮）的布局位置信息
        var rect = wx.getMenuButtonBoundingClientRect();
        console.log(rect,res)
        var statusBarHeight=res.statusBarHeight
        var gap=rect.top-statusBarHeight
        // 导航栏高度，+2的容错高度
        var innerHeight=statusBarHeight+gap*2+rect.height+2;
        _this.setData({
          // 状态栏高度
          statusBarHeight,
          // 胶囊距离状态栏
          gap,
          // 胶囊距离右侧
          menuButtonRight:res.windowWidth-rect.right,
          // 胶囊宽度
          menuButtonWidth:rect.width,
          // 导航栏右边距
          innerRight:res.windowWidth-rect.left,
          // 导航栏高度
          innerHeight
        }); 

        // 触发getBarInfo事件，告知导航栏信息
        _this.triggerEvent('getBarInfo', {height:innerHeight})
      }
    })
  },
  methods: {
    //监听导航显示隐藏
    _showChange: function _showChange(show) {           
      var displayStyle = 'opacity: ' + (show ? '1' : '0') + ';transition:opacity 0.5s;';           
      this.setData({
          displayStyle: displayStyle
      });
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