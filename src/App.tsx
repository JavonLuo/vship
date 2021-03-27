import React from 'react';
import './styles/index.scss';
// import Input from './components/Input/input'
import Alert from './components/Alert'
import AutoComplete from './components/AutoComplete/autoComplete'
function App() {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  return (
    <div className="App" style={{ width: 500, margin: 50 }}>

      {/* <Input size='large' />
      <Input size='small' />
      <Input size='middle' />
      <Input disabled />
      <Input icon='search' />
      <Input prepend='https://' />
      <Input append='.com' /> */}
      {/* <AutoComplete
      fetchSuggestions={handleFetch}
      >
      </AutoComplete> */}
      <Alert message="1111" type='warning' showIcon description='dfdfsfds'>
      </Alert>

    </div>
  );
}

export default App;
