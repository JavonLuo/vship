import React from 'react'
import { storiesOf } from '@storybook/react'
import Empty from './index'

const emptyComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Empty description='default' style={{ width: 200 }}>
    </Empty>
    <Empty description='small' size='small' style={{ width: 200 }}>
    </Empty>
  </div>
)
storiesOf('Empty', module)
  .add('Empty', emptyComponent)