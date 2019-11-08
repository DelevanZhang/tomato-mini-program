// components/z-confirm/z-confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputContent:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    watchConfirm(e){
      this.triggerEvent('inputContent', this.data.inputContent) 
      this.setData({ "inputContent":""})
    },
    watchCancel(){
      this.triggerEvent('cancelConfirm', this.data.inputContent) 
      this.setData({ "inputContent": "" })
    },
    watchInput(e){
     this.data.inputContent=e.detail.value
    }
  }
})
