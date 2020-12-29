import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'
export interface ProgressProps {
  percent: number;
  stroKeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

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
