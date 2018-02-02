// pages/MV/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvId: '',
    info: {},
    showDesc: false
  },

  showDesc: function() {
    this.setData({
      showDesc: !this.data.showDesc
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'mv options');
    var _this = this;
    this.setData({
      mvId: options.mvId
    });

    wx.request({
      url: "https://c.y.qq.com/mv/fcgi-bin/fcg_get_mvinfo.fcg",
      data: {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        vid: options.mvId,
        smvnum:3,
        recnum: 3,
        othernum: 3,
        cid: 205361939,
        _: 1516933251844
      },
      success: function(res) {
        var _info = res.data.data;
        console.log(_info, 'res success')
        _this.setData({
          info: _info
        })
      }
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