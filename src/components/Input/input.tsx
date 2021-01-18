import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'large' | 'middle' | 'small'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** 是否禁用 */
  disabled?: boolean;
  /** 设置Input的大小 */
  size?: InputSize;
  /** 添加图标 */
  icon?: IconProp;
  /** 添加前缀 */
  prepend?: string | ReactElement;
  /** 添加后缀 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input 输入框 通过鼠标或者键盘输入内容，是最基础的表单域的包装。
 * 
 * ~~~js
 * import { Input } from 'vship';
 * ~~~
 * 支持HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  const cnames = classNames('vship-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className='vship-input-group-prepend'>{prepend}</div>}
      {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
      className='vship-input-inner'
      disabled={disabled}
      {...restProps}
      />
      {append && <div className='vship-input-group-append'>{append}</div>}
    </div>
  )
}

Input.defaultProps = {
  size: 'small'
}

export default Input;
