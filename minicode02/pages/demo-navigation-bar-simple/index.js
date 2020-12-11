
Page({
  data: {
 
    topBarHeight:0,
   
    homeImage:'/static/icon/icon_home.png',

   
    show: true
  },
  //获取导航栏高度
  getBarInfo(e){
    this.setData({topBarHeight:e.detail.height})
  },

  //显示/隐藏导航
  changeShow(){
    this.setData({show:!this.data.show})
  },
  


})