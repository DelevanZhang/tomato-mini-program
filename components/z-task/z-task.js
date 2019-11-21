// components/z-task/z-task.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:String,
      value:'我是默认值'
    },
    finished:{
      type:Boolean,
      value:false
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
    clickCicle(){
      this.triggerEvent("clickCicle",{})
    },
    editContent(){
      this.triggerEvent("editContent", {})
    }
  }
})
