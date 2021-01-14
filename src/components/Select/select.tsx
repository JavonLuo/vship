import React from 'react'
import Icon from '../Icon/icon'
export interface SelectProps {
  defaultValue?: string
}

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className='vship-select' >
      <div className='vship-select-selection vship-select-selection--single'>
        <div className='vship-select-selection__rendered'>Jack</div>
        <span className='vship-select-arrow'>
          <Icon icon='angle-down' />
        </span>
      </div>
    </div>
  )
}

export default Select;
