// pages/bindPC/bindPC.js
const {http} = require("../../request/http.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:"",
    password_digest:""
  },
  /**
   * 获取账号数据
   */
  watchAccount(e){
    this.setData({ account:e.detail})
  },
  /**
   * 获取密码数据
   */
  watchPassword(e){
    this.setData({ "password_digest": e.detail })
  },
  /**
   * cilckbind
   */
  clickBind(){
    http.post('/bindings', {
      account: this.data.account,
      password_digest: this.data.password_digest
    })
      .then(response => {
        wx.setStorageSync('me', response.data.resource)
        wx.reLaunch({ url: "/pages/index/index" })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})