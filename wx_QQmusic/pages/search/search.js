// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: [{
      name: 'h2',
      attrs: {
        class: 'subtitle'
      },
      children: [{
        type: 'text',
        text: '热门搜索'
      }]
    }],
    hotSearch: ['aaa', 'aaaaa', 'cvxcvz'],
    special: {}
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
      url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
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
          var _data = res.data.data;
          that.setData({ 
            hotSearch: _data.hotkey,
            special: {
              key: _data.special_key,
              url: _data.special_url
            }
          });
          
        } else {
          wx.showToast({
            title: '获取热门搜索失败！'
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