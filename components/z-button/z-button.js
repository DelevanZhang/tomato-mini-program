// components/z-button/z-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    z_button_content:{
      type:String,
      value:"我是默认的值"
    },
    z_button_type:{
      type:String,
      value:'default'
    },
    z_button_bg:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    createTask(e){
      this.triggerEvent('createTask', {}) 
    }
  }
})
