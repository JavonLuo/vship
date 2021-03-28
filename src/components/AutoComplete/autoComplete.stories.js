import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoComplete from './index'

const suggestions = [
  { value: '111' },
  { value: '222' },
  { value: '34564' },
  { value: '6565' },
  { value: '54645' },
  { value: '44' },
  { value: '15411' },
  { value: '000' },
  { value: '5454' },
  { value: '989' },
  { value: '1025' },
  { value: '74' },
  { value: '788' },
]
const suggestion = (query) => {
  return suggestions.filter(item => item.value.includes(query))
}
const handleFetch = (query) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item) => ({ value: item.login, ...item }))
    })
}
const asyncAutoComplete = () => (
  <div style={{padding: '0px 40px'}}>
    <AutoComplete
      fetchSuggestions={handleFetch}
    ></AutoComplete>
  </div>
)
const syncAutoComplete = () => (
  <div  style={{padding: '0px 40px'}}>
    <AutoComplete
      fetchSuggestions={suggestion}
    ></AutoComplete>
  </div>
)
storiesOf('AutoComplete', module)
  .add('async autoComplete', asyncAutoComplete)
  .add('sync autoComplete', syncAutoComplete)