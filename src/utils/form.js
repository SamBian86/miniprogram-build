module.exports = {
  // 父组件初始化数据
  initData: function(data) {
    // console.log('initData')
    const key = 'form.' + this.getEventDetail(data)['key']
    const value = this.getEventDetail(data)['value']
    this.setData({
      [key]: value
    })
  },
  getValueByType: function(type, value) {
    switch (type) {
      case 'String':
        value = value ? value : ''
        break
      case 'Array':
        value = value ? JSON.parse(value) : []
        break
      case 'Number':
        value = value ? parseInt(value) : 0
        break
      case 'Boolean':
        value = value ? JSON.parse(value) : JSON.parse(value)
        break
      default:
        value = ''
        break
    }
    return value
  },
  // 父组件input事件接收数据
  keyInput: function(e) {
    // console.log('keyInput')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const key = 'form.' + name
    this.setData(
      {
        [key]: value
      },
      () => {
        if (this.afterKeyInput) {
          this.afterKeyInput({
            key: name,
            value: value
          })
        }
      }
    )
  },
  // 父组件input-number事件接收数据
  keyInputNumber: function(e) {
    // console.log('keyInputNumber')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const min = this.getTarget(this.getEventDetail(e), 'dataset')['min']
    const max = this.getTarget(this.getEventDetail(e), 'dataset')['max']
    const key = 'form.' + name
    let _value
    if (value === 0) {
      _value = ''
    } else {
      if (value >= max) {
        _value = max
      } else if (value <= min) {
        _value = min
      } else {
        _value = value
      }
    }
    this.setData({
      [key]: _value
    })
  },
  // 父附件picker事件接收数据
  pickerChange: function(e) {
    // console.log('pickerChange')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const key = 'form.' + name

    this.setData({
      [key]: value
    })
  },
  // 父组件自定义类型picker事件接收数据
  pickerSelectorChange: function(e) {
    console.log('pickerSelectorChange')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const range = this.getCurrentTarget(this.getEventDetail(e), 'dataset')[
      'range'
    ]
    const pickItem = range.filter((item, index) => {
      return index.toString() === value
    })
    const valueKey = this.getCurrentTarget(this.getEventDetail(e), 'dataset')[
      'valueKey'
    ]
    const key = 'form.' + name
    const keyIndex = 'form.' + name + 'Index'
    // debugger
    if (pickItem.length === 1) {
      this.setData(
        {
          [key]: pickItem[0][valueKey], // picker选中修改form对应的值
          [keyIndex]: value // picker选中的index
        },
        () => {
          if (this.afterPickerSelectorChange) {
            this.afterPickerSelectorChange({
              key: name,
              selected: pickItem[0]
            })
          }
        }
      )
    }
  },
  // 父组件change事件接收数据
  radioChange: function(e) {
    // console.log('radioChange')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const key = 'form.' + name

    this.setData({
      [key]: value
    })
  },
  switchChange: function(e) {
    // console.log('switchChange')
    const name = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getEventDetail(this.getEventDetail(e))['value']
    )
    const key = 'form.' + name
    this.setData({
      [key]: value
    })
  },
  photoChange: function(e) {
    const photoType = this.getEventDetail(e, 'photoType')
    let name, type, value, photoName, key

    if (photoType === 'remove') {
      name = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['name'].split('_')[0]
      type = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['name'].split('_')[1]
      value = this.getValueByType(
        type,
        JSON.stringify(this.getEventDetail(e, 'value'))
      )
      photoName = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['photoName']
    } else {
      name = this.getTarget(this.getEventDetail(e), 'dataset')['name'].split(
        '_'
      )[0]
      type = this.getTarget(this.getEventDetail(e), 'dataset')['name'].split(
        '_'
      )[1]
      value = this.getValueByType(
        type,
        JSON.stringify(this.getEventDetail(e, 'value'))
      )
      photoName = this.getTarget(this.getEventDetail(e), 'dataset')['photoName']
    }

    key = 'form.' + name
    this.setData({
      [key]: value,
      [photoName]: JSON.stringify(value)
    })
  },
  fileChange: function(e) {
    const actionType = this.getEventDetail(e, 'actionType')
    let name, type, value, fileName, key
    if (actionType === 'remove') {
      name = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['name'].split('_')[0]
      type = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['name'].split('_')[1]
      value = this.getValueByType(
        type,
        JSON.stringify(this.getEventDetail(e, 'value'))
      )
      fileName = this.getTarget(
        this.getEventDetail(this.getEventDetail(e)),
        'dataset'
      )['fileName']
    } else {
      name = this.getTarget(this.getEventDetail(e), 'dataset')['name'].split(
        '_'
      )[0]
      type = this.getTarget(this.getEventDetail(e), 'dataset')['name'].split(
        '_'
      )[1]
      value = this.getValueByType(
        type,
        JSON.stringify(this.getEventDetail(e, 'value'))
      )
      fileName = this.getTarget(this.getEventDetail(e), 'dataset')['fileName']
    }

    key = 'form.' + name
    this.setData({
      [key]: value,
      [fileName]: JSON.stringify(value)
    })
  },
  // 打分控件
  scoreChange: function(e) {
    // console.log('radioChange')
    const name = this.getCurrentTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[0]
    const type = this.getCurrentTarget(this.getEventDetail(e), 'dataset')[
      'name'
    ].split('_')[1]
    const value = this.getValueByType(
      type,
      this.getCurrentTarget(this.getEventDetail(e), 'dataset')['idx'] + 1
    )
    const key = 'form.' + name

    this.setData({
      [key]: value
    })
  }
}
