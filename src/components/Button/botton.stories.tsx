import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'
const defaultButton = () => (
    <Button onClick={action('clicked')} style={{ marginLeft: 40}}>defalult</Button>
)
const disabledButton = () => (
    <>
    <Button disabled onClick={action('clicked')} style={{marginRight: 20, marginLeft: 40}}>disabled</Button>
    <Button disabled btnType='primary' onClick={action('clicked')} style={{marginRight: 20}}>disabled</Button>
    <Button disabled btnType='danger' onClick={action('clicked')} style={{marginRight: 20}}>disabled</Button>
    <Button disabled btnType='link' onClick={action('clicked')}>disabled</Button>
    </>
)
const buttonWithSize = () => (
    <>
    <Button size='sm' onClick={action('clicked')} style={{marginRight: 20, marginLeft: 40}}>sall</Button>
    <Button onClick={action('clicked')} style={{marginRight: 20}}>middle</Button>
    <Button size='lg' onClick={action('clicked')}>large</Button>
    </>
)
const buttonWithType = () => (
    <>
    <Button onClick={action('clicked')} style={{marginRight: 20, marginLeft: 40}}>defalult</Button>
    <Button btnType='danger' onClick={action('clicked')} style={{marginRight: 20}}>danger</Button>
    <Button btnType='primary' onClick={action('clicked')} style={{marginRight: 20}}>primary</Button>
    <Button btnType='link' onClick={action('clicked')}>link</Button>
    </>
)
storiesOf('Button', module)
    .add('default button', defaultButton)
    .add('disabled button', disabledButton)
    .add('size button', buttonWithSize)
    .add('type button', buttonWithType)