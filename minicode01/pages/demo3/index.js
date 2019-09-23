
Page({
  data: {
    //scroll-view的纵向是否滚动
    scrollY:false,
    //1：滚动到底部，-1：滚动到顶部，默认-1
    direction:-1,
    //记录上一次滚动的位置
    lastY:null,
    //滚动内容数组
    list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 
  },
  //滚动到顶部处理函数
  bindscrolltoupper(e){
    console.log('关闭继续向上滑动')
    this.setData({
      lastY:null,
      direction:-1,
      scrollY:false
    })
  },
  //滚动到底部处理函数
  bindscrolltolower(e){
    console.log('关闭继续向下滑动')
    this.setData({
      lastY: null,
      direction: 1,
      scrollY: false
    })
  },
  //滑动开始记录开始位置
  touchstart(e){
    let clientY = e.touches[0].clientY
    this.setData({
      lastY: clientY
    })
  },
  //关闭页面滚动时 处理再次开启滚动
  touchmove(e){
    let dis=0,
    clientY=e.touches[0].clientY,
    lastY=this.data.lastY,
    direction=this.data.direction,
    scrollY=this.data.scrollY;
 
    if(!scrollY){     
      dis=clientY-lastY
      /*
        1. 如果当前滚动到底部且计算手指滑动是向下，则开启向上滚动
        2. 如果当前滚动到顶部且计算手指滑动是向上，则开启向下滚动
      */
      if(dis>0&&direction==1||dis<0&&direction==-1){
        console.log('开启滑动')
        scrollY=true
      }    

      this.setData({
        lastY:clientY,
        scrollY:scrollY
      })
    }
  }
});