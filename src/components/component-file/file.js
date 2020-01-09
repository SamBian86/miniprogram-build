// components/component-file/file.js
const fileBehavior = require('../../behaviors/fileBehavior')
Component({
  behaviors: [fileBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
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
      const actionIndex = this.getCurrentTarget(e, 'dataset')['actionIndex']
      const name = this.getCurrentTarget(e, 'dataset')['name']
      const fileName = this.getCurrentTarget(e, 'dataset')['fileName']
      const event = {
        detail: {
          tempFilePaths: '',
          target: {
            dataset: {
              name: name,
              fileName: fileName
            }
          }
        }
      }
      this.setData({
        actionType: 'remove',
        actionIndex: actionIndex
      })
      this.fileTypeEvent(event)
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
        }
      }
      if (actionType === 'change') {
        filelists.splice(actionIndex, 1, {
          fileType,
          url: tempFilePaths
        })
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
