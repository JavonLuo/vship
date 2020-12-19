import React, { useState } from 'react';
import './styles/index.scss';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Transition from './components/Transition/transition'
function App() {
  const [show, setShow] = useState(false)
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
      <div style={{ width: 500 }}>
        <Menu mode='horizontal' onSelect={(e) => { alert(e) }} defaultOpenSubMenus={['3']}>
          <MenuItem>
            one
       </MenuItem>
          <MenuItem disabled>
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
      <Button btnType='primary' size='lg' onClick={() => { setShow(!show) }}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-top'
      >
        <div>
          <p>dsadsadsad</p>
          <p>dsadsadsad</p>
          <p>dsadsadsad</p>
          <p>dsadsadsad</p>
          <p>dsadsadsad</p>
        </div>
      </Transition>
      <Transition
      in={show}
      timeout={300}
      animation='zoom-in-top'
      wrapper
      >
        <Button size='lg' btnType='danger'>As Button </Button>
      </Transition>
    </div>
  );
}

export default App;
