import React, { createContext } from 'react'
import Icon from '../Icon/icon'
import { OptionProps } from './option'
export interface SelectProps {
  defaultValue?: string
}

// export const MenuContext = createContext<SelectProps>()
export const Select: React.FC<SelectProps> = (props) => {
  const { children } = props
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<OptionProps>
      const { displayName } = childElement.type
      if (displayName === 'Option') {
        return React.cloneElement(childElement, {
          // index: index.toString()
        })
      } else {
        console.error('warning: Select has a child which is not a Option component')
      }
    })
  }
  return (
    <div className='vship-select'>
      <div className='vship-select-selection vship-select-selection--single'>
        <div className='vship-select-selection__rendered'>Jack</div>
        <span className='vship-select-arrow'>
          <Icon icon='angle-down' />
        </span>
      </div>
      <div className='vship-select-dropdown'>
        <ul className='vship-select-dropdown-menu'>
          {renderChildren()}
        </ul>
      </div>
    </div>
  )
}

export default Select;
