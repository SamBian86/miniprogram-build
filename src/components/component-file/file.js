// components/component-file/file.js
const fileBehavior = require('../../behaviors/fileBehavior')
const commonBehavior = require('../../behaviors/commonBehavior')
Component({
  behaviors: [commonBehavior, fileBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    filelists: [],
    actionType: '',
    actionIndex: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    takeFile: function(e) {
      const actionType = this.getCurrentTarget(e, 'dataset')['actionType']
      // console.log(`photoType:${photoType}`)
      this.setData({
        actionType: actionType
      })
      const type = this.selectComponent('#type')
      type.openPanel()
    },
    changeFile: function(e) {
      const actionType = this.getCurrentTarget(e, 'dataset')['actionType']
      const actionIndex = this.getCurrentTarget(e, 'dataset')['actionIndex']
      // console.log(`actionType:${actionType} actionIndex:${actionIndex}`)
      this.setData({
        actionType: actionType,
        actionIndex: actionIndex
      })
      const type = this.selectComponent('#type')
      type.openPanel()
    },
    removeFile: function(e) {
      const that = this
      this.showModal({
        content: '确定要删除?'
      }).then(res => {
        if (!res.confirm) {
          return false
        }
        const actionIndex = that.getCurrentTarget(e, 'dataset')['actionIndex']
        const name = that.getCurrentTarget(e, 'dataset')['name']
        const fileName = that.getCurrentTarget(e, 'dataset')['fileName']
        const currentFileType = that.getCurrentTarget(e, 'dataset')[
          'currentFileType'
        ]
        const event = {
          detail: {
            tempFilePaths: '',
            currentFileType,
            target: {
              dataset: {
                name: name,
                fileName: fileName
              }
            }
          }
        }
        that.setData({
          actionType: 'remove',
          actionIndex: actionIndex
        })
        that.fileTypeEvent(event)
      })
    },
    fileTypeEvent: function(e) {
      const fileType = this.getEventDetail(e)['currentFileType']
      const filelists = this.data.filelists
      const actionType = this.data.actionType
      const actionIndex = this.data.actionIndex

      let tempFilePaths = ''

      if (fileType === 1) {
        tempFilePaths = this.getEventDetail(e)['tempFilePaths'][0]
      }

      if (fileType === 2) {
        tempFilePaths = this.getEventDetail(e)['tempFilePath']
      }
      if (actionType === 'add') {
        if (filelists.length === this.data.max) {
          console.log(`最多上传${this.data.max}张`)
        } else {
          filelists.push({
            fileType,
            url: tempFilePaths
          })
          e.actionType = 'add'
        }
      }
      if (actionType === 'change') {
        filelists.splice(actionIndex, 1, {
          fileType,
          url: tempFilePaths
        })
        e.actionType = 'change'
        e.actionIndex = actionIndex
      }
      if (actionType === 'remove') {
        filelists.splice(actionIndex, 1)
        e.actionType = 'remove'
        e.actionIndex = actionIndex
      }
      e.value = filelists
      e.fileType = fileType
      this.setData(
        {
          filelists: filelists
        },
        () => {
          this.triggerEvent('filechange', e)
        }
      )
    },
    countMedia() {
      const type = this.selectComponent('#type')
      type.countMedia()
    }
  }
})
