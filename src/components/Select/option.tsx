import React, { useContext, MouseEvent } from 'react'
import classNames from 'classnames'
import { SelectContext } from './select'
export interface OptionProps {
  value: string | number;
  disabled?: boolean;
  className?: string;
  index?: number;
  style?: React.CSSProperties;
}

const Option: React.FC<OptionProps> = (props) => {
  const { value, disabled, className, style, children, index } = props
  const context = useContext(SelectContext)
  const cnames = classNames('vship-select-option-item', className, {
    'vship-select-dropdown-item-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = (e: MouseEvent<HTMLElement>, value: any, index: any) => {
    e.stopPropagation()
    const onSelect = context.onSelect as Function
    if (!disabled) {
      onSelect(value, index)
    }
  }
  return (
    <li className={cnames} style={style} onClick={(e) => {handleClick(e, value, index)}}>
      {children}
    </li>
  )
}
Option.displayName = 'Option'

export default Option