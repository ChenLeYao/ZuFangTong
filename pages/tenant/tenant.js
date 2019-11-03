// pages/renter/renter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ScrollData: [
      '../../img/main/banner2.jpg',
      '../../img/main/banner3.jpg',
      '../../img/main/example.jpg',
      '../../img/main/banner2.jpg',
      '../../img/main/banner3.jpg',
      '../../img/main/example.jpg'
    ],
    contentData: [
      '上海市中心新盘首开（来电直降30万）单价3万!7',
      '上海市中心新盘首开（来电直降30万）单价3万!7',
      '上海市中心新盘首开（来电直降30万）单价3万!7',
      '上海市中心新盘首开（来电直降30万）单价3万!7',
      '上海市中心新盘首开（来电直降30万）单价3万!7'
    ],
    name: '',
    avatar:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          name: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
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