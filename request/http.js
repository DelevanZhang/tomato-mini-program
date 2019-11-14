const { host, t_app_id, t_app_secret} = getApp().globalData
const _http = (method,url, data,)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:`${host}${url}`,
      data,
      method,
      dataType:"json",
      header: {
        Authorization:`Bearer ${wx.getStorageSync(`X-token`)}`,
        "t-app-id":t_app_id,
        "t-app-secret":t_app_secret
      },
      success(res) {
        resolve(res)
      },
      fail(err){
        console.log(err)
      }
    })
  })
}
const http = {
  get:(url,params)=>_http("GET",url,params),
  post:(url,data)=>_http("POST",url,data),
  put: (url, data)=>_http("PUT",url,data),
  delete:(url,data)=>_http("DELETE",url,data),
}

module.exports = {
  http
}