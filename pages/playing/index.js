// pages/playing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    name: '红昭愿',
    author: '不知道',
    poster: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _app = getApp();
    console.log(_app.globalData ,options, 'option')
    this.setData({
      src: 'http://isure.stream.qqmusic.qq.com/C100' + options.songId + '.m4a?fromtag=32',
      poster: 'http://imgcache.qq.com/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg'
    })
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