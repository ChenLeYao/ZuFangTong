// pages/houseedit/houseedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Mounths: ['1个月', '3个月', '6个月', '12个月'],
    PictureIndexSwiper : 0, 
    index: 0 ,
    ScrollData : [
      '../../img/main/banner2.jpg' ,
      '../../img/main/banner3.jpg',
      '../../img/main/example.jpg',
      '../../img/main/banner2.jpg',
      '../../img/main/banner3.jpg',
      '../../img/main/example.jpg'
    ],
    PictureIndex : 0
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

  },
  pictureChange : function (e){

  },
  pictureChange : function (e){
    
     this.setData({
       PictureIndex : e.target.dataset.index ,
       PictureIndexSwiper: e.target.dataset.index 
     });
    
  },
  UploadPicture : function (e){
   
    var i = e.target.dataset.index ,
        t = this ,
        d = this.data.ScrollData;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        d[i] = res.tempFilePaths;
        t.setData({
          ScrollData: d
        });
        setTimeout(function(){
           wx.showToast({
             title: '上传成功',
             icon : 'none'
           })
        } , 100)
      }
    })
  },
  ChangeIndex: function (e) {
    this.setData({
      PictureIndex: e.detail.current,
      PictureIndexSwiper: e.detail.current
    });
  },
  Buttonsubmit : function (){
    wx.showToast({
      title: '提交成功!',
      icon: 'none'
    })
  }
})