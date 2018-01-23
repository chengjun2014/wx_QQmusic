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
    key: '',
    hotSearch: [],
    special: {},
    showResult: false,
    searchResult: [],
    searchPageNo: 1,
    searchPageSize: 30,
    focus: false, // 控制取消按钮
    focus2: false, // 控制清空按钮，输入框聚焦切非空
    finish: false,
    zhida: {}, // type 0: 单曲 2：歌手 3：专辑
    isShown: false, // 提示暂无更多弹窗只显示一次
    hisArray: [],
    showHisory: false
  },

  search: function(ev) {
    // input点击完成按钮时触发搜索，event.detail = { value: value }
    // 快捷操作点击推荐热搜词时 触发搜索 ev.target.dataset
    // this.data.key 滚动时触发搜索使用这个
    var key = (ev.detail.value || ev.target.dataset.key || this.data.key).trim();
    var that = this;
    if (key === '') {
      return;
    }

    if (key != this.data.key) { // 执行一次新的搜索
      this.setData({
        finish: false,
        isShown: false,
        searchPageNo: 1,
        zhida: {},
        searchResult: []
      });
      // push to history array
      var _index = this.data.hisArray.indexOf(key);
      if (_index > -1) {
        this.data.hisArray.splice(_index, 1);
      }
      this.setData({
        hisArray: [key, ...this.data.hisArray]
      });
      
      var _app = getApp();
      _app.globalData.hisArray = this.data.hisArray;
    }

    if (this.data.finish) {
      if (!this.data.isShown) {
        this.setData({
          isShown: true
        });
        wx.showToast({
          title: '暂无更多！'
        });
      }
      return;
    } else {
      wx.showLoading({
        title: '加载中...'
      });
    }

    wx.request({
      url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
      data: {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        w: key,
        zhidaqu: 1,
        catZhida: 1,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        n: this.data.searchPageSize,
        p: this.data.searchPageNo
      },
      success: function(res) {
        if (res.statusCode == 200) {
          var _data = res.data.data;
          wx.hideLoading();

          if (that.data.searchPageNo * that.data.searchPageSize < _data.song.totalnum) {
            that.setData({
              searchPageNo: ++that.data.searchPageNo
            });
          } else {
            that.setData({
              finish: true
            });
          }
          if (_data.zhida.type) {
            that.setData({
              zhida: _data.zhida
            });
          }
          that.setData({
            searchResult: [...that.data.searchResult, ..._data.song.list]
          });

        } else {
          wx.showToast({
            title: '获取'+key+'搜索失败！'
          });
        }
      }
    })
    
    this.setData({
      key: key,
      showResult: true
    })
  },

  input: function(ev) {
    var _key = ev.detail.value.trim();
    this.setData({
      isShown: false,
      key: _key,
      focus2: _key !== '' ? true : false
    });
  },

  focusFn: function() {
    this.setData({
      focus: true,
      focus2: this.data.key !== '' ? true : false
    });

    var _app = getApp();
    if (_app.globalData.hisArray.length) {
      this.setData({
        showResult: false,
        showHistory: true
      });
    }
  },
  blurFn: function () {
    var that = this;
    setTimeout(function() {
      that.setData({
        focus: false,
        focus2: false
      });
    }, 200);
  },

  cancel: function() {
    this.setData({
      key: '',
      showResult: false,
      showHistory: false
    })
  },

  clear: function() {
    this.setData({
      key: '',
      showResult: false
    });
  },
  clearHis: function() {
    var _app = getApp();
    _app.globalData.hisArray = [];
    this.setData({
      hisArray: [],
      showHistory: false,
      key: ''
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _app = getApp();
    this.setData({
      hisArray: _app.globalData.hisArray
    });
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