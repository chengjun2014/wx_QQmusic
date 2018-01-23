// pages/singerAlbum/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumPic: '',
    albumName: '',
    singerPic: '',
    singerName: '',
    posterTime: '',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'options')
    var _this = this;
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
      data: {
        albummid: options.albumId,
        g_tk:7270601,
        uin:2455221958,
        format:'json',
        inCharset:'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1
      },
      success: function(res) {
        console.log(res)
        if (res.statusCode == 200) {
          var _data = res.data.data;
          _this.setData({
            albumPic: _data.mid,
            albumName: _data.name,
            singerPic: _data.singermid,
            singerName: _data.singername,
            posterTime: _data.aDate,
            otherAlbums: _data.otherAlbums,
            list: _data.list
          })
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