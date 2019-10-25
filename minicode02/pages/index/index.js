
Page({
  data: {
    title:'自定义导航标题',
 
    topBarHeight:0,
    
    background:'#ffffff',

    color:'#000000',   

    homeImage:'/static/icon/icon_home.png',

    border: true,

    loading: false,

    show: true,

    left:false,

    center:false
  },
  //获取导航栏高度
  getBarInfo(e){
    this.setData({topBarHeight:e.detail.topBarHeight})
  },
  //改变导航栏背景色
  changeBGColor(){
    let background = "#" + (Math.random() * 0x1000000 | 0).toString(16)
    this.setData({ background: background})
  },
  //改变标题字体颜色
  changeColor() {
    let color = "#" + (Math.random() * 0x1000000 | 0).toString(16)
    this.setData({ color: color })
  },
  //改变home图标
  changeHomeImage(){
    let homeImage=this.data.homeImage
    if (homeImage =='/static/icon/icon_home.png'){
      homeImage = '/static/icon/icon_home1.png'
    }else{
      homeImage = '/static/icon/icon_home.png'
    }
    this.setData({homeImage:homeImage})
  },
  //显示/隐藏导航
  changeShow(){
    this.setData({show:!this.data.show})
  },
  //显示/隐藏导航
  changeLoading() {
    this.setData({ loading: !this.data.loading })
  },
  //显示/隐藏导航
  changeBorder() {
    this.setData({ border: !this.data.border })
  },
  //左侧自定义slot
  showLeftSlot(){
    this.setData({ left: !this.data.left })
  },
  //中间自定义slot
  showCenterSlot() {
    this.setData({ center: !this.data.center })
  }

})