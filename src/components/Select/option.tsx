import React, { useContext, MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'
import { SelectContext } from './select'
export interface OptionProps {
  value: string | number;
  disabled?: boolean;
  className?: string;
  index?: number;
  children: ReactNode
  style?: React.CSSProperties;
}

const Option: React.FC<OptionProps> = (props) => {
  const { value, disabled, className, style, children, index, ...restProps } = props
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
    <li className={cnames} style={style} onClick={(e) => { handleClick(e, value, index) }} {...restProps}>
      {children}
    </li>
  )
}
Option.displayName = 'Option'

export default Option