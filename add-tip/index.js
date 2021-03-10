// components/add-tip/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化关注提示
    initTip() {
      let showTip = wx.getStorageSync('showTip')
      this.setData({
        showTip: typeof showTip=='boolean'?showTip:true
      })
    },
    // 关闭提示
    closeTip() {
      console.log('1')
      wx.setStorageSync('showTip', false)
      this.setData({
        showTip: false
      })
    },
  },
  lifetimes:{
    attached:function(){
      this.initTip()
    }
  }
})
