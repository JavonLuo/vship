import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './index'

const CardComponent = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Card title='default' bodyStyle={{width: 200}}>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </Card>
    <Card title='default' extra='more' bodyStyle={{width: 200}}>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </Card>
    <Card title='default' hoverable bordered bodyStyle={{width: 200}}>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </Card>
    <Card title='samll' hoverable size='small' bodyStyle={{width: 200}}>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </Card>
  </div>
)
storiesOf('Card', module)
  .add('Card', CardComponent)