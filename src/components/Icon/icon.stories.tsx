import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './index'

const IconComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Icon icon='info-circle' theme='danger' />
    <Icon icon='check-circle' theme='dark' />
    <Icon icon='exclamation-circle' theme='info' />
    <Icon icon='times-circle' theme='light' />
    <Icon icon='kidneys' theme='primary' />
    <Icon icon='leaf' theme='secondary' />
    <Icon icon='less' theme='success' />
    <Icon icon='keyboard' theme='warning' />
  </div>
)
storiesOf('Icon', module)
  .add('Icon', IconComponent)