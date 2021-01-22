import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'

type spinSize = 'small' | 'default' | 'large'
export interface SpinProps {
  spinning?: boolean
  size?: spinSize
  tip?: string
  wrapperClassName?: string
}

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
