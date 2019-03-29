// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameFocus: false,
    passFocus: false,
    inputName: '',
    inputPassword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  inputNameHandler(e) {
    this.setData({ inputName: e.detail.value })
  },
  inputPwdHandler(e) {
    this.setData({ inputPassword: e.detail.value })
  },
  login() {
    let aName = this.data.inputName.replace(/\s/gi, '');
    let aPass = this.data.inputPassword.replace(/\s/gi, '');
    if (!aName) {
      wx.showToast({ title: '请输入用户名', icon: 'none', duration: 2000 });
      this.setData({ nameFocus: true, passFocus: false });
      return;
    }
    if (!aPass) {
      wx.showToast({ title: '请输入密码', icon: 'none', duration: 2000 });
      this.setData({ nameFocus: false, passFocus: true });
      return;
    }
    wx.showLoading({ title: '登录中...', mask: true }); 
    wx.navigateTo({
      url: '../index/index'
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