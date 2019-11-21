// pages/tomato/tomato.js
const {http} = require("../../request/http.js")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    defaultTime: 5,
    time: '',
    timer: null,
    isStop:true,
    stopOrstart:"",//显示开始还是暂停
    showConfirm:false ,//点击放弃显示确认弹窗
    isShowAgain: false,  //是否显示再来一组
    tomato:{},//tomato对象
    content:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.tomatoTimeDown()
    //判断开始按钮是否为暂停开始
    this.isStopOrStart()
  },
  /**
   * 番茄时间显示
   */
  tomatoTimeShow() {
    let m = Math.floor(this.data.defaultTime / 60)
    let s = Math.floor(this.data.defaultTime % 60)
    if ((m + '').length === 1) {
      m = "0" + m
    }
    if ((s + '').length === 1) {
      s = "0" + s
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  /**
   * 番茄倒计时
   */
  tomatoTimeDown() {
    //倒计时
    this.tomatoTimeShow()

    this.data.timer = setInterval(() => {
      this.data.defaultTime -= 1
      this.tomatoTimeShow()
      if (this.data.defaultTime <= 0) {
        this.setData({
          isShowAgain:true,
          time:"已完成"
        })
        clearInterval(this.data.timer)
      }
    }, 1000)

  },
  /**
   * 点击放弃按钮
   */
  giveUpTomato(){
    this.setData({
      showConfirm:true
    })
  },
  /**
   * 点击confirm的确定按钮
   */
  confrimYes(e){
    let content = e.detail
    this.setData({ content})
    this.updateTomato()
    wx.navigateBack({
      to:-1
    })
  },
  /**
   * 点击confirm的取消按钮
   */
  confrimNo(e){
    this.setData({
      showConfirm:false
    })
  },

  /**
   * 点击暂停按钮暂停番茄计时器
   */
  stopTomatoTime() {
    if(this.data.isStopOrStart==='暂停'){
      clearInterval(this.data.timer)
      this.setData({
        isStopOrStart: '开始'
      })
    }else{
      this.tomatoTimeDown()
      this.setData({
        isStopOrStart: '暂停'
      })
    }
    
    
  },

  /**
   * 按钮是否是开始还是暂停
   */
    isStopOrStart(){
      this.setData({
        isStopOrStart: this.data.isStop===true?"暂停":'开始'
      })
    },
  /**
   * 更新番茄
   */
   updateTomato(){
     http.put(`/tomatoes/${this.data.tomato.id}`, {
       description: this.data.content,
       aborted: true
     })
       .then(res => {
         console.log(res)
       })
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    http.post("/tomatoes")
    .then(res=>{
      console.log("创建tomaoto")
      console.log(res)
      this.setData({tomato:res.data.resource})
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.updateTomato()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})