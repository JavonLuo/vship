import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'

type spinSize = 'small' | 'default' | 'large'
export interface SpinProps {
  /**
    * 是否加载中
  */
  spinning?: boolean
  /**
    * 尺寸
    * 
  */
  size?: spinSize
  /**
    * 显示提示信息
  */
  tip?: string
  /**
    * 外层的class
  */
  wrapperClassName?: string
}
/**
* ### Spin 加载中
* 用于页面和区块的加载中状态。
* ### 引用方法
* 
* ~~~js
* import { Spin } from 'vship';
* ~~~
*/
export const Spin: React.FC<SpinProps> = (props) => {
  const {
    spinning,
    size,
    tip,
    children,
    wrapperClassName,
    ...restProps
  } = props
  const getSize = (size: string) => {
    switch (size) {
      case 'small':
        return '1x'
      case 'default':
        return '2x'
      case 'large':
        return '3x'
      default:
        return '2x'
    }
  }
  const cnames = classNames('vship-spin', {
    'vship-spin-spinning': spinning,
    'vship-spin-show-text': tip,
    [`vship-spin-size-${size}`]: size
  })
  const _size = size as string
  return (
    <div className='vship-spin-nested-loading' {...restProps}>
      <div>
        <div className={cnames}>
          <span className='vship-spin-icon'><Icon icon='spinner' spin theme='primary' size={getSize(_size)} /></span>
          {tip ? <div className='vship-spin-text'>{tip}</div> : null}
        </div>
      </div>
      <div className={spinning ? 'vship-spin-container vship-spin-blur' : ''}>
        {children}
      </div>
    </div>
  )
}
Spin.defaultProps = {
  size: 'default',
  spinning: true
}

export default Spin;
