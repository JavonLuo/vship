import React from 'react'
import { storiesOf } from '@storybook/react'
import Progress from './index'

const ProgressComponent = () => (
  <div style={{padding: '0px 40px'}}>
    <Progress percent={20} theme='warning' showText={false}></Progress>
    <br/>
    <Progress percent={30} theme='success' showText={false}></Progress>
    <br/>
    <Progress percent={40} theme='primary' showText={false}></Progress>
    <br/>
    <Progress percent={50} theme='secondary' stroKeHeight={3}></Progress>
    <br/>
    <Progress percent={60} theme='light' stroKeHeight={2}></Progress>
    <br/>
    <Progress percent={70} theme='info' stroKeHeight={4}></Progress>
    <br/>
    <Progress percent={80} theme='dark'></Progress>
    <br/>
    <Progress percent={100} theme='danger'></Progress>
  </div>
)
storiesOf('Progress', module)
  .add('Progress', ProgressComponent)