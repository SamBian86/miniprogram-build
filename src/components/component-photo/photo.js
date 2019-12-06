// components/component-photo/photo.js
const photoBehavior = require('../../behaviors/photoBehavior')
Component({
  behaviors: [photoBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    photoType: '',
    photoIndex: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    takePhoto: function(e) {
      const photoType = this.getCurrentTarget(e, 'dataset')['photoType']
      // console.log(`photoType:${photoType}`)
      this.setData({
        photoType: photoType
      })
      const camera = this.selectComponent('#camera')
      camera.openPanel()
    },
    changePhoto: function(e) {
      const photoType = this.getCurrentTarget(e, 'dataset')['photoType']
      const photoIndex = this.getCurrentTarget(e, 'dataset')['photoIndex']
      // console.log(`photoType:${photoType} photoIndex:${photoIndex}`)
      this.setData({
        photoType: photoType,
        photoIndex: photoIndex
      })
      const camera = this.selectComponent('#camera')
      camera.openPanel()
    },
    removePhoto: function(e) {
      const photoIndex = this.getCurrentTarget(e, 'dataset')['photoIndex']
      const name = this.getCurrentTarget(e, 'dataset')['name']
      const photoName = this.getCurrentTarget(e, 'dataset')['photoName']
      const event = {
        detail: {
          tempFilePaths: '',
          target: {
            dataset: {
              name: name,
              photoName: photoName
            }
          }
        }
      }
      this.setData({
        photoType: 'remove',
        photoIndex: photoIndex
      })
      this.cameraEvent(event)
    },
    cameraEvent: function(e) {
      // console.log(e)
      const photolists = this.data.photolists
      const photoType = this.data.photoType
      const photoIndex = this.data.photoIndex
      const tempFilePaths = this.getEventDetail(e)['tempFilePaths']

      if (photoType === 'add') {
        if (photolists.length === this.data.max) {
          console.log(`最多上传${this.data.max}张`)
        } else {
          photolists.push({
            id: 10,
            url: tempFilePaths[0]
          })
        }
      }
      if (photoType === 'change') {
        photolists.splice(photoIndex, 1, {
          id: 10,
          url: tempFilePaths[0]
        })
      }
      if (photoType === 'remove') {
        photolists.splice(photoIndex, 1)
        e.photoType = 'remove'
        e.photoIndex = photoIndex
      }
      e.value = photolists

      this.setData(
        {
          photolists: photolists
        },
        () => {
          this.triggerEvent('photochange', e)
        }
      )
    }
  }
})
