import React from 'react'
import { storiesOf } from '@storybook/react'
import Spin from './index'

const SpinComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around'}}>
    <Spin spinning size='small' />
    <Spin spinning tip='加载中...' />
    <Spin spinning size='large' />
  </div>
)
storiesOf('Spin', module)
  .add('Spin', SpinComponent)