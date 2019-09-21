
Page({
  data: {
    scrollY:false,
    direction:-1,
    lastY:null,
    list:[1,2,3,4,5,6,7,8,9,10,11,12,13], 
  },
  bindscrolltoupper(e){
    console.log('关闭向上滑动')
    this.setData({
      lastY:null,
      direction:-1,
      scrollY:false
    })
  },
  bindscrolltolower(e){
    console.log('关闭向下滑动')
    this.setData({
      lastY: null,
      direction: 1,
      scrollY: false
    })
  },
  touchstart(e){
    let clientY = e.touches[0].clientY
    this.setData({
      lastY: clientY
    })
  },
  touchmove(e){
    console.log(e, 11111111111)

    let dis=0,
    clientY=e.touches[0].clientY,
    lastY=this.data.lastY,
    direction=this.data.direction,
    scrollY=this.data.scrollY;

 
    if(!scrollY){
      if(lastY){
        dis=clientY-lastY
        console.log(dis)
        if(dis>0&&direction==1||dis<0&&direction==-1){
          console.log('开启滑动')
          scrollY=true
        }
      }

      this.setData({
        lastY:clientY,
        scrollY
      })
    }
  },
  touchend(){
    this.setData({
      lastY:null
    })
  }
});