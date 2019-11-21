const {
  http
} = require("../../request/http.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmisVisible: true,
    lists: [], //todoList数据
    oldContent: "", //修改内容oldContent
    newContent: '',
    id:"",
    index:''
  },

  /**
   * 通过z-confirm组件获取数据
   */
  confirmYes(e) {
    console.log("__________")
    console.log(e)
    let description = e.detail
    this.setData({
      "confirmisVisible": true
    })
    //创建一条todo
    if (description && this.data.oldContent.length === 0) {
      http.post("/todos", {
          description
        })
        .then(res => {
          let content = [res.data.resource]
          let newLists = content.concat(this.data.lists)
          this.setData({
            "lists": newLists
          })
        })
    } else if (this.data.oldContent.length !== 0) {
      let id = this.data.id
      let index = this.data.index
      let newContent = this.data.newContent
      console.log(id)
      console.log(newContent)
      http.put(`/todos/${id}`, {
          completed: false,
          description: newContent
        })
        .then(res => {
          let todo = res.data.resource
          this.data.lists[index] = todo
          this.setData({lists:this.data.lists})
        })
    }

  },

  /**
   * 点击todolist删除对应项
   */
  deleteTodo(e) {

  },
  /**
   * confirm取消按钮
   */
  confirmNo() {
    this.setData({
      "confirmisVisible": true,
      oldContent: ""
    })
  },
  /**
   * 创建任务
   */
  hiddenTask(e) {
    this.setData({
      "confirmisVisible": false,
       oldContent: ""
    })

  },
  /**
   * 手动点击圆圈完成任务
   */
  clickCompleteTask(e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    this.setData({id:id})
    let _this = this
    wx.showModal({
      content: '完成任务',
      success(res) {
        if (res.confirm) {
          http.put(`/todos/${id}`, {
              completed: true
            })
            .then(res => {
              let todo = res.data.resource
              _this.data.lists[index] = todo
              _this.setData({
                lists: _this.data.lists
              })
            })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 点击重新编辑内容
   */
  editContent(e) {
    //打开编辑框
    this.hiddenTask()
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let oldContent = this.data.lists[index].description
    this.setData({
      oldContent: oldContent,
      id,
      index
    })
  },
  /**
   * 监听textarea输入的内容
   */
  watchInput(e) {
    let newContent = e.detail
    this.setData({
      newContent
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
    //显示todo里面的数据
    http.get("/todos?completed=false")
      .then(res => {
        this.setData({
          lists: res.data.resources
        })
      })
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