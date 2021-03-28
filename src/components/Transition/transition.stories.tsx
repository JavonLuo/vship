import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Transition from './index'
import Button from '../Button'

const TransitionComponent = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
  <div style={{ padding: '0px 40px' }}>
  <Button onClick={() => setOpen(!open)} btnType='primary'>点击展示</Button>
    <Transition
    animation='zoom-in-top'
    in={open}
    timeout={500}
    >
      <div>
        这是一段文本。。。
        <br/>
        这是一段文本。。。
        <br/>
        这是一段文本。。。
        <br/>
        这是一段文本。。。
      </div>
  </Transition>
  </div>
)}
storiesOf('Transition', module)
  .add('Transition', TransitionComponent)