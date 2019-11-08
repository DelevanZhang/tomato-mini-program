Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmisVisible: {
      type: Boolean,
      value: true
    },
    lists: [
      { "id": 1, content: "君不见，黄河之水天上来，奔流到海不复回。", "finished": true },
      { "id": 2, "content": "君不见，黄河之水天上来，奔流到海不复回。", "finished": true },
      { "id": 3, "content": "君不见，高堂明镜悲白发，朝如青丝暮成雪。高堂明镜悲白发，朝如青丝暮成雪。", "finished": false },
      { "id": 4, "content": "君不见，黄河之水天上来，奔流到海不复回。", "finished": true },
      { "id": 5, "content": "君不见，黄河之水天上来，奔流到海不复回。", "finished": false },
      { "id": 6, "content": "君不见，黄河之水天上来，奔流到海不复回。", "finished": true }
    ]
  },
  /**
   * 通过z-confirm组件获取数据
   */
  getContent(e) {
    this.setData({
      "confirmisVisible": true
    })
    console.log(e)
    let content = [{id:this.data.lists.length+1,content:e.detail,finished:false}]
    let newLists = this.data.lists.concat(content)
    this.setData({ "lists": newLists})
},
/**
 * confirm取消按钮
 */
  cancelConfirm(){
    this.setData({
      "confirmisVisible": true
    })
  },
  /**
   * 创建任务
   */
  hiddenTask(e) {
    this.setData({
      "confirmisVisible": false
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