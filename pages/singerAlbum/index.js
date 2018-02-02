// pages/singerAlbum/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumInfo: '',
    albumId: '',
    commentTotal: 0,
    commentList: [],
    mid: ''
  },
  format: function(num) {
    return new Date(num * 1000).toLocaleDateString();
  },
  getComment: function() {
    var _this = this;
    wx.request({
      url: 'https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg',
      data: {
        g_tk: 7270601,
        uin: 2455221958,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        cid: 205360772,
        reqtype: 1,
        cmd: 6,
        needmusiccrit: 0,
        pagesize: 10,
        lasthotcommentid: 0,
        qq: 2455221958,
        pagenum: 0,
        biztype: 2,
        topid: _this.data.albumId,
        ct: 999,
        _: 1516773960049
      },
      success: function(res) {
        if (res.statusCode == 200) {
          var _data = res.data;

          for (var i = 0; i < _data.comment.commenttotal; i++) {
            _data.comment.commentlist[i].formmattedTime = _this.format(_data.comment.commentlist[i].time);
          }
          
          _this.setData({
            commentTotal: _data.comment.commenttotal,
            commentList: _data.comment.commentlist
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        needNewCode: 1,
        _: 1517216136574
      },
      success: function(res) {
        if (res.statusCode == 200) {
          var _data = res.data.data;
          _this.setData({
            albumInfo: _data,
            albumId: _data.id,
            mid: "https://y.gtimg.cn/music/photo_new/T002R150x150M000"+_data.mid+".jpg?max_age=2592001",
            singermid: "https://y.gtimg.cn/music/photo_new/T001R150x150M000" + _data.singermid+".jpg?max_age=2592002"
          });
          // 获取专辑评论
          _this.getComment();
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
      fail: function() {
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
    // wx.request({
    //   url: 'https://cnodejs.org/api/v1/topics',
    //   success: function(res) {
    //     console.log(res, 'https://cnodejs.org/api/v1/topics');
    //   }
    // })
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