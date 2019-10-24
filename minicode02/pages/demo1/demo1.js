
Page({
  data: {
    title:'自定义导航标题',
    topBarHeight:0,
  },
  onLoad(){

  },
  getBarInfo(e){
    this.setData({topBarHeight:e.detail.topBarHeight})
  }  
})