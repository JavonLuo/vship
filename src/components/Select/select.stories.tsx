import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './index'
import { action } from '@storybook/addon-actions'
const { Option } = Select;

const BasicSelect = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 40px' }}>
    <Select onChange={action('change')}>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy' disabled>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
    <Select disabled style={{ margin: '0px 20px 30px'}} placeholder='请选择'>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy' disabled>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
    <Select search defaultValue='Jeck' onSelect={action('select')}>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy'>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
  </div>
)
const SizeSelect = () => (
  <div style={{padding: '0px 40px'}}>
    <Select size='small' onChange={action('change')}>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy' disabled>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
    <Select disabled placeholder='请选择'>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy' disabled>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
    <Select search defaultValue='Jeck' size='large' onSelect={action('select')}>
      <Option value='Lucy' key='Lucy'>Lucy</Option>
      <Option value='Lucy' key='Lucy'>Jeck</Option>
      <Option value='Jery' key='Jery'>Jery</Option>
    </Select>
  </div>
)
storiesOf('Select', module)
  .add('basic Select', BasicSelect)
  .add('size Select', SizeSelect)