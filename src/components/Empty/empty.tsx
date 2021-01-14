import React, { ReactNode, CSSProperties } from 'react'
import className from 'classnames'

type EmptySize = 'normal' | 'small'
export interface EmptyProps {
  description?: string | ReactNode,
  imageStyle?: CSSProperties,
  image?: string | ReactNode,
  size?: EmptySize
}

export const Empty: React.FC<EmptyProps> = (props) => {
  const {
    description,
    image,
    imageStyle,
    size
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
    <div className={classes}>
      <div>
        {!imageNode ? <img src={imageString ? imageString : '../../../empty.png'} alt="empty" className='vship-empty-image' style={imageStyle} /> : imageNode}
        <p className='vship-empty-description'>{description ? description : '暂无数据'}</p>
      </div>
    </div>
  )
}

export default Empty;
