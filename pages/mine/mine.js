// pages/mine/mine.js
const {http} = require("../../request/http.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHistoryTab: true,
    tomatoDatas:{},
    todosDatas:{},
    me: {}
  },
  /**
   * 点击切换Tab
   */
  changeHistoryTab(e) {
    this.setData({
      isHistoryTab: true
    })
  },
  changeDoneTab(e) {
    this.setData({
      isHistoryTab: false
    })
  },
  /**
   * 进入页面获取历史和完成任务的数据
   */
  getTodosData(){
    http.get("/todos",{
      is_group: "yes"
    })
    .then(res=>{
      console.log(res)
      this.setData({ todosDatas:res.data.resources})
    })
  },
  /**
   * 进入页面获取历史和完成任务的数据
   */
  getTomatoData(){
    http.get("/tomatoes",{
      is_group: "yes"
    })
    .then(res=>{
      console.log("-----")
      console.log(res)
      this.setData({ tomatoDatas:res.data.resources})
    })
  },
  /**
   * 绑定PC账号
   */
  clickBindPC(){
    wx.reLaunch({
      url: '/pages/bindPC/bindPC',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getTomatoData()
    this.getTodosData()
    this.setData({ me: wx.getStorageSync('me') })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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