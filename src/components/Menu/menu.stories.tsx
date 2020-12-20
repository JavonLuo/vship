import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MenuItem from './menuItem'
import Menu from './index'
import SubMenu from './subMenu'

const horizontalMenu = () => (
  <Menu onSelect={action('clicked')} defaultOpenSubMenus={['3']} style={{ marginLeft: 40 }}>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <MenuItem>
      normal
    </MenuItem>
    <SubMenu title='subMenu'>
      <MenuItem disabled>
        download1
       </MenuItem>
      <MenuItem>
        download2
       </MenuItem>
      <MenuItem>
        download3
       </MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu', module)
  .add('default menu', horizontalMenu)