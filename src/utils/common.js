module.exports = {
  getCurrentTarget: function(e, type) {
    return type ? e['currentTarget'][type] : e['currentTarget']
  },
  getTarget: function(e, type) {
    return type ? e['target'][type] : e['target']
  },
  getEventDetail: function(e, type) {
    return type ? e['detail'][type] : e['detail']
  },
  navigateTo: function(obj) {
    return wx.p.navigateTo(obj)
  },
  navigateBack: function(obj) {
    return wx.p.navigateBack(obj)
  },
  switchTab: function(obj) {
    return wx.p.switchTab(obj)
  }
}
