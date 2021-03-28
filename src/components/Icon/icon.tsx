import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIconProps, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  /**
    * 自定义图标主题
  */
    theme?: ThemeProps
}
/**
 * 
 */ 
export const Icon: React.FC<IconProps> = (props) => {
    // icon-primaty
    const { className, theme, ...restProps} = props
    const classes = classNames('icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}
export default Icon