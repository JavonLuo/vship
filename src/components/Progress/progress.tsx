import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'
export interface ProgressProps {
  /**
    * 百分比
  */
  percent: number;
  /**
    * 进度条线的宽度，单位 px
  */
  stroKeHeight?: number;
  /**
    * 显示标题
  */
  showText?: boolean;
  /**
    * 样式
  */
  styles?: React.CSSProperties;
  /**
    * 主题
  */
  theme?: ThemeProps;
}
/**
* ### Progress 进度条
*
* 展示操作的当前进度。
* ### 引用方法
* 
* ~~~js
* import { Progress } from 'vship';
* ~~~
*/
export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    stroKeHeight,
    showText,
    styles,
    theme
  } = props
  return (
    <div className='vship-progress-bar' style={styles}>
      <div className='vship-progress-bar-outer' style={{
        height: `${
          stroKeHeight}px`
      }}>
        <div
          className={`vship-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className='inner-text'>{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  stroKeHeight: 15,
  showText: true,
  theme: 'primary'
}
export default Progress;
