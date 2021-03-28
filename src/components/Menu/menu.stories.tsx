import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MenuItem from './menuItem'
import Menu from './index'
import SubMenu from './subMenu'

const BasicMenu = () => (
  <div style={{padding: '0px 40px'}}>
    <Menu>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        normal
      </MenuItem>
    </Menu>
    <Menu mode='vertical'>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        normal
      </MenuItem>
    </Menu>
  </div>
)
const SubMenuComponent = () => (
  <div style={{padding: '0px 40px'}}>
    <Menu onSelect={action('clicked')} defaultOpenSubMenus={['3']}>
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
    <Menu onSelect={action('clicked')} mode='vertical'>
      <MenuItem disabled>
        disabled
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
      <MenuItem>
        normal
      </MenuItem>
    </Menu>
  </div>
)

storiesOf('Menu', module)
  .add('basic menu', BasicMenu)
  .add('sub menu', SubMenuComponent)