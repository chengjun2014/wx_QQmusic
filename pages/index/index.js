//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    slider: [],
    current: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeHandler: function(ev) {
    this.setData({
      current: ev.detail.current
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
      data: {
        g_tk: 5381,
        uin: 0,
        format: 'jsonp',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime(),
        jsonp: 'jsonpCallback'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({ slider: res.data.data.slider });
          wx.hideToast();
        } else {
          wx.showToast({
            title: '稍后再试！'
          });
        }
      }
    })
  }
})