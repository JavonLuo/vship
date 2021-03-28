import React from 'react'
import { storiesOf } from '@storybook/react'
import Upload from './index'
import Button from '../Button'
import Icon from '../Icon'
import { action } from '@storybook/addon-actions'

const defaultFileList = [
  {
    uid: '1',
    name: 'xxx.png',
    size: 100
  },
  {
    uid: '2',
    name: 'yyy.png',
    size: 120
  },
  {
    uid: '3',
    name: 'zzz.png',
    size: 150
  },
]

const UploadComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Upload
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      onChange={action('changed')}
      onRemove={action('removed')}
    >
      <Button>
        <Icon icon="upload" size="1x" theme="secondary" style={{ marginRight: 5 }} />
        点击上传
      </Button>
    </Upload>
    <Upload
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      onChange={action('changed')}
      onRemove={action('removed')}
      defaultFileList={defaultFileList}
    >
      <Button>
        <Icon icon="upload" size="1x" theme="secondary" style={{ marginRight: 5 }} />
        点击上传
      </Button>
    </Upload>
  </div >
)
const DraggerUpload = () => (
  <div style={{ padding: '0px 40px' }}>
    <div style={{ width: 500, height: 200, border: '2px dotted black', textAlign: 'center' }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="fileName"
        multiple
        drag
        style={{marginTop: '38px'}}
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
    </div>
  </div>
)
storiesOf('Upload', module)
  .add('Upload', UploadComponent)
  .add('Dragger Upload', DraggerUpload)