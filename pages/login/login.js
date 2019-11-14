const {http} = require('../../request/http.js')
const { app_id, app_secret} = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 登陆按钮登陆
   */
  login(e){
    let iv = e.detail.iv
    let encrypted_data = e.detail.encryptedData
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          let code = res.code
          let data = {
            code,
            iv,
            encrypted_data,
            app_id,
            app_secret
          }
          http.post("/sign_in/mini_program_user", data)
          .then((res)=>{
            console.log(res)
            wx.setStorageSync("me", res.data.resouce)
            wx.setStorageSync("X-token", res.header['X-token'])
            wx.reLaunch({
              url: '/pages/index/index',
            })
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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