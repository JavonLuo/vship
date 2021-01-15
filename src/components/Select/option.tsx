import React, { useContext } from 'react'
import classNames from 'classnames'

export interface OptionProps {
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Option: React.FC<OptionProps> = (props) => {
  const { value, disabled, className, style, children } = props
  // const context = useContext(MenuContext)
  const classes = classNames('vship-select-dropdown-menu-item', className, {
    'vship-select-dropdown-menu-item-disabled': disabled,
    // 'is-active': context.index === index && !disabled
  })
  // const handleClick = () => {
  //   if (context.onSelect && !disabled && (typeof index === 'string')) {
  //     context.onSelect(index)
  //   }
  // }
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}
Option.displayName = 'Option'

export default Option