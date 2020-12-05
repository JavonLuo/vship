import React from 'react';
import './styles/index.scss';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <Button btnType='danger'>
        hello
     </Button>
      <Button btnType='primary'>
        hello
     </Button>
      <Button btnType='link'>
        hello
     </Button>
      <Button btnType='link' disabled>
        hello
     </Button>
     <div style={{width:500}}>
      <Menu mode={'horizontal'}>
        <MenuItem disabled>
          one
       </MenuItem>
        <MenuItem>
          two
       </MenuItem>
        <MenuItem>
          three
       </MenuItem>
       <SubMenu title='download'>
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
     </div>
    </div>
  );
}

export default App;
