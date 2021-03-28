import React, { ReactNode } from 'react'
import classNames from 'classnames'

type CardSize = 'default' | 'small'
export interface CardProps {
  /**
    * 大小
  */
  size?: CardSize
  /**
    * 标题
  */
  title?: string | ReactNode
  /**
    * 自定义标题区域样式
  */
  headStyle?: Object
  /**
    * 内容区域自定义样式
  */
  bodyStyle?: Object
  /**
    * 是否显示边框
  */
  bordered?: boolean
  /**
    * 鼠标移过时可浮起
  */
  hoverable?: boolean
  /**
    * 卡片右上角的操作区域
  */
  extra?: string | ReactNode
}
/**
* ### Card 卡片
*
* 通用卡片容器。 
* ### 引用方法
* 
* ~~~js
* import { Card } from 'vship';
* ~~~
*/
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
