// components/z-confirm/z-confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholderText:{
      type:String,
      value:""
    },
    oldContent:{
      type: String,
      value: ""
    }
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
      this.triggerEvent('watchConfirm', this.data.inputContent) 
      this.setData({ "inputContent":""})
    },
    watchCancel(){
      this.triggerEvent('watchcancel', this.data.inputContent) 
      this.setData({ "inputContent": "" })
    },
    watchInput(e){
     this.data.inputContent=e.detail.value
      this.triggerEvent('watchInput', this.data.inputContent) 
    }
  }
})
