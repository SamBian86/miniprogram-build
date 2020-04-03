module.exports = {
  // 页面的初始数据
  data: {
    // lists: [],
    lists: [],
    listQuery: {
      page: 1,
      limit: 8
    },
    pullStatus: {
      init: false, // 是否获取过数据
      loading: false, // 正在获取数据
      finish: false, // 加载完所有数据
      empty: false // 没有数据
    }
  },
  onLoad: function() {},
  init() {
    this.pullDownEvent()
  },
  // ajax获取数据抽象方法
  afterGetList: function() {},
  getList: function() {},
  formatData: function(lists) {
    return lists
  },
  searchTimer: null,
  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {
    const loading = this.data.pullStatus.loading
    if (!loading) {
      console.log('下拉刷新触发')
      this.setData(
        {
          'pullStatus.init': false,
          'pullStatus.loading': true,
          'pullStatus.finish': false,
          'pullStatus.empty': false
        },
        () => {
          this.pullDownEvent()
        }
      )
    }
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function() {
    const loading = this.data.pullStatus.loading
    const finish = this.data.pullStatus.finish
    if (!loading && !finish) {
      console.log('上拉加载触发')
      this.setData(
        {
          'pullStatus.loading': true
        },
        () => {
          this.pullUpEvent()
        }
      )
    }
  },
  // 下拉刷新方法
  pullDownEvent: function() {
    // console.log('下拉刷新')
    const limit = this.data.listQuery.limit

    this.setData(
      {
        'listQuery.page': 1
      },
      () => {
        // console.log('page:' + this.data.listQuery.page)
        this.getList(this.data.listQuery)
          .then(res => {
            console.log('下拉刷新获取数据成功')
            let finish = false,
              empty = false
            res.data.results.list = this.formatData(res.data.results.list)
            if (res.data.results.list.length === 0) {
              empty = true
              finish = true
            }
            if (
              res.data.results.list.length !== 0 &&
              res.data.results.list.length < limit
            ) {
              empty = false
              finish = true
            }
            if (
              res.data.results.list.length !== 0 &&
              res.data.results.list.length === limit
            ) {
              empty = false
              finish = false
            }
            this.setData(
              {
                lists: res.data.results.list,
                'pullStatus.init': true,
                'pullStatus.loading': false,
                'pullStatus.finish': finish,
                'pullStatus.empty': empty
              },
              () => {
                this.afterGetList(res.data.results)
                this.stopPullDownRefresh()
                this.pageScrollTo({
                  scrollTop: 0,
                  duration: 0
                })
              }
            )
          })
          .catch(() => {
            // this.showToast({
            //   title: res.data.msg,
            //   icon: 'none',
            //   duration: 1000
            // })
            // this.makeOpenIdExpire()
          })
      }
    )
  },
  // 上拉加载方法
  pullUpEvent: function() {
    const page = this.data.listQuery.page
    const lists = this.data.lists
    if (this.data.pullStatus.finish) {
      return false
    }

    this.setData(
      {
        'listQuery.page': page + 1
      },
      () => {
        console.log('page:' + this.data.listQuery.page)
        this.getList(this.data.listQuery)
          .then(res => {
            console.log('上拉加载获取数据成功')
            res.data.results.list = this.formatData(res.data.results.list)
            if (res.data.results.list.length === 0) {
              this.setData(
                {
                  'pullStatus.loading': false,
                  'pullStatus.finish': true
                },
                () => {
                  this.afterGetList(res.data.results)
                }
              )
            } else {
              this.setData(
                {
                  lists: [...lists, ...res.data.results.list],
                  'pullStatus.loading': false,
                  'pullStatus.finish': false
                },
                () => {
                  this.afterGetList(res.data.results)
                }
              )
            }
          })
          .catch(() => {
            // this.showToast({
            //   title: res.data.msg,
            //   icon: 'none',
            //   duration: 1000
            // })
            // this.makeOpenIdExpire()
          })
      }
    )
  }
}
