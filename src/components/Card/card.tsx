import React, { ReactNode } from 'react'
import classNames from 'classnames'

type CardSize = 'default' | 'small'
export interface CardProps {
  size?: CardSize
  title?: string | ReactNode
  headStyle?: Object
  bodyStyle?: Object
  bordered?: boolean
  hoverable?: boolean
  extra?: string | ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    size,
    title,
    headStyle,
    bodyStyle,
    bordered,
    extra,
    hoverable,
    children,
    ...restProps
  } = props
  const cnames = classNames('vship-card', {
    'vship-card-bordered': bordered,
    'vship-card-small': size === 'small',
    'vship-card-hoverable': hoverable
  })
  return (
    <div className={cnames} {...restProps}>
      {(title || extra) ? <div className='vship-card-head' style={headStyle}>
        <div className='vship-card-head-wrapper'>
          {title ? <div className='vship-card-head-title'>
            {title}
          </div> : null}
          {extra ? <div className='vship-card-head-extra'>
            {extra}
          </div> : null}
        </div>
      </div> : null}
      <div className='vship-card-body' style={bodyStyle}>{children}</div>
    </div>
  )
}

Card.defaultProps = {
  size: 'default',
  bordered: true
}

export default Card;
