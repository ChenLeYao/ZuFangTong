// pages/main/main.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
        canIUse: false
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {
        var that = this;
        wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.userInfo']) {
                that.setData({
                  canIUse: true  
                })
              }else{
                that.setData({
                  canIUse: false
                })
              }
            }
          })
       
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            canIUse: true
          })
        } else {
          that.setData({
            canIUse: false
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindGetUserInfo : function (e){
    console.log(e);
    if (e.detail.userInfo) {
      this.setData({
        canIUse: false 
      })
    } else {
      //用户按了拒绝按钮
    } 
  }
})