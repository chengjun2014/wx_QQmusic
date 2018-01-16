// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topList: []
  },

  toAlbum: function(event) {
    var _id = event.currentTarget.dataset.id;
    
    wx.navigateTo({
      url: '/pages/album/index?id=' + _id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
      data: {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime(),
        jsonp: 'MusicJsonCallback'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          var _data = res.data.data;
          that.setData({
            topList: _data.topList
          });

        } else {
          wx.showToast({
            title: '获取排行榜失败！'
          });
        }
      }
    })
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