import React from 'react';
import './styles/index.scss';
import Button from './components/Button'
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
    </div>
  );
}

export default App;
