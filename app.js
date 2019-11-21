//app.js
App({
  onLaunch: function () {
    let Xtoken = wx.getStorageSync("X-token")
    if(!Xtoken){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  }
  },
  globalData: {
      host: 'https://gp-server.hunger-valley.com',
      app_id: "wx3132a0b5dd292d78",
      app_secret: "99bec67173df661ca04f6f8591222913",
      t_app_id: "7vUypZ615Y3BAeXy6xMxbvCA",
      t_app_secret: "CLu8NKMcVWbVhRvGYdDtMsgP"
  }
})