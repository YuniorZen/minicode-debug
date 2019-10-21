"use strict";
Page({
  data: {
    scrollX:false,
    timeListScroll: '0',
    tileList: [
      '01', '02', '03', '04', '05', '06',
      '01', '02', '03', '04', '05', '06', // 长度为 6 时不会
      '07', '08', '09', '10', '11', '12' // 长度为 12 时会
    ],
    countDownMinute: 59,
    countDownSecond: 59,

    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'test',
      
    }]
  },
  slideButtonTap(e){
    console.log(e)
  },
  onReachBottom(e){
    console.log(22222)
  }
});