
import React from 'react'
import '../src/styles/index.scss'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
const style: React.CSSProperties = {
  // padding: '20px 90px'
}

const centerDecorator = (storyFn: any) => (
  <div style={style}>
  <h3 style={{marginLeft: 40}}>组件演示</h3>
  {storyFn()}
  </div>)
addDecorator(withInfo)
addParameters({
  info: {
      inline: true,
      header: false
  }
})
addDecorator(centerDecorator)