import React from 'react';
import './styles/index.scss';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'
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
      <Menu mode={'vertical'}>
        <MenuItem index={0} disabled>
          one
       </MenuItem>
        <MenuItem index={1}>
          two
       </MenuItem>
        <MenuItem index={2}>
          three
       </MenuItem>
      </Menu>
     </div>
    </div>
  );
}

export default App;
