// pages/singer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumInfo: {},
    singermid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this;
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
      data: {
        singermid: options.singerId,
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5page',
        needNewCode: 1,
        order: "listen",
        from: 'h5',
        num: 15,
        begin: 0
      },
      success: function (res) {
        if (res.statusCode == 200) {
          var _data = res.data.data;
          _this.setData({
            albumInfo: _data,
            singermid: "https://y.gtimg.cn/music/photo_new/T001R150x150M000" + _data.singer_mid + ".jpg?max_age=2592000"
          });
        } else {
          wx.showToast({
            title: '加载失败',
            duration: 2000
          });
          setTimeout(function () {
            wx.navigateBack();
          }, 2000);
        }
      },
      fail: function () {
        wx.showToast({
          title: '加载失败',
          duration: 2000
        });
        setTimeout(function () {
          wx.navigateBack();
        }, 2000);
      }
    });
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