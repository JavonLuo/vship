import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
const DefaultInput = () => (
  <>
  <Input
  style={{width: 340, marginLeft: 40}}
  placeholder='placeholder'
  onChange={action('changed')}
  />
  </>
)
const DisabledInput = () => (
  <Input
  style={{width: 300, marginLeft: 40}}
  placeholder='placeholder'
  disabled
  />
)
const IconInput = () => (
  <Input
  style={{width: 300, marginLeft: 40}}
  placeholder='icon input'
  icon='search'
  />
)
const SizeInput = () => (
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
const PendInput = () => (
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
  .add('default Input', DefaultInput)
  .add('disabled Input', DisabledInput)
  .add('icon Input', IconInput)
  .add('size Input', SizeInput)
  .add('pend Input', PendInput)