// pages/album/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [],
    topInfo: {},
    updateTime: '',
    color: ''
  },

  transColor: function(colorStr) {
    var t = colorStr,
      computedColor;

    function n(t) {
      return t > 16 ? t.toString(16) : "0" + t.toString(16);
    }
    if (t) {
      var o = (16711680 & t) >> 16,
        a = (65280 & t) >> 8,
        i = 255 & t;

      var s = n(o) + n(a) + n(i);
      computedColor = '#' + s;
    } else {
      computedColor = '#000';
    }
    return computedColor;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _app = getApp();
    var _this = this;

    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
      data: {
        g_tk: 5381,
        uin: 0,
        format: 'jsonp',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        page: 'detail',
        type: 'top',
        topid: options.id
      },
      success: function(res) {
        var _data = res.data;
        _this.setData({
          songList: _data.songlist,
          topInfo: _data.topinfo,
          updateTime: _data.update_time,
          color: _this.transColor(_data.color)
        });
        // 设置全局播放列表
        if (_app.globalData.playingList.length == 0) {
          _app.globalData.playingList = _data.songlist;
        }
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