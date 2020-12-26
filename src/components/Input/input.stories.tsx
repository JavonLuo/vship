import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
const defaultInput = () => (
  <>
  <Input
  style={{width: 340, marginLeft: 40}}
  placeholder='placeholder'
  onChange={action('changed')}
  />
  </>
)
const disabledInput = () => (
  <Input
  style={{width: 300, marginLeft: 40}}
  placeholder='placeholder'
  disabled
  />
)
const iconInput = () => (
  <Input
  style={{width: 300, marginLeft: 40}}
  placeholder='placeholder'
  icon='search'
  />
)
const sizeInput = () => (
  <>
  <Input
  style={{width: 300, marginLeft: 40}}
  defaultValue='small size'
  size='small'
  />
  <Input
  style={{width: 300, marginLeft: 40}}
  defaultValue='middle size'
  size='middle'
  />
  <Input
  style={{width: 300, marginLeft: 40}}
  defaultValue='large size'
  size='large'
  />
  </>
)
const pendInput = () => (
  <>
  <Input
  style={{width: 300, marginLeft: 40}}
  defaultValue='prepend text'
  prepend='http://'
  />
  <Input
  style={{width: 300, marginLeft: 40}}
  defaultValue='append'
  append='.com'
  />
  </>
)

storiesOf('Input', module)
  .add('default Input', defaultInput)
  .add('disabled Input', disabledInput)
  .add('icon Input', iconInput)
  .add('size Input', sizeInput)
  .add('pend Input', pendInput)