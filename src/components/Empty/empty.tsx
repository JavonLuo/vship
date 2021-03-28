import React, { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import className from 'classnames'

type EmptySize = 'normal' | 'small'
export interface EmptyProps {
  /**
    * 自定义描述内容
  */
  description?: string | ReactNode,
  /**
    * 图片样式
  */
  imageStyle?: CSSProperties,
  /**
    * 设置显示图片，为 string 时表示自定义图片地址。
  */
  image?: string | ReactNode,
  /**
    * 自定义组件大小
  */
  size?: EmptySize
}
/**
* ### Empty 空状态
*
* 空状态时的展示占位图。 
* ### 引用方法
* 
* ~~~js
* import { Empty } from 'vship';
* ~~~
*/
export const Empty: React.FC<EmptyProps & HTMLAttributes<HTMLElement>> = (props) => {
  const {
    description,
    image,
    imageStyle,
    size,
    ...rest
  } = props
  let imageString: string = ''
  let imageNode: ReactNode
  if (image && typeof image === 'string') {
    imageString = image
  } else if (image && typeof image === 'object') {
    imageNode = image
  }
  const classes = className('vship-empty', {
    [`vship-empty-${size}`]: size
  })
  return (
    <div className={classes} {...rest}>
      <div>
        {!imageNode ? <img src={imageString ? imageString : '../../../empty.png'} alt="empty" className='vship-empty-image' style={imageStyle} /> : imageNode}
        <p className='vship-empty-description'>{description ? description : '暂无数据'}</p>
      </div>
    </div>
  )
}

export default Empty;
