import React, { ReactNode, FC } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon/icon'
type alertType = 'success' | 'info' | 'warning' | 'error'
export interface AlertProps {
  afterClose?: () => void,
  banner?: boolean,
  closable?: boolean,
  closeText?: string | ReactNode,
  description?: string | ReactNode,
  icon?: ReactNode,
  message?: string | ReactNode,
  showIcon?: boolean,
  type: alertType,
  onClose?: (e: MouseEvent) => void
}

export const Alert: FC<AlertProps> = (props) => {
  const getIconAndTheme: (type: string) => IconProps = function (type: string): IconProps {
    switch (type) {
      case 'success':
        return { icon: 'check-circle', theme: 'success' }
      case 'info':
        return { icon: 'info-circle', theme: 'info' }
      case 'warning':
        return { icon: 'exclamation-circle', theme: 'warning' }
      case 'error':
        return { icon: 'times-circle', theme: 'danger' }
      default:
        return { icon: 'info-circle', theme: 'info' }
    }
  }
  const {
    afterClose,
    banner,
    closable,
    closeText,
    description,
    icon,
    message,
    showIcon,
    type,
    onClose,
    ...restProps
  } = props
  const classes = classNames('vship-alert', {
    [`vship-alert-${type}`]: type
  })
  //close-circle exclamation-circle
  return (
    <div className={classes} {...restProps}>
      <Icon icon={getIconAndTheme(type).icon} theme={getIconAndTheme(type).theme} className='vship-alert-icon' />
      <span className='vship-alert-message'>{message && message}</span>
      <span>{description && description}</span>

    </div>
  )
}
Alert.defaultProps = {
  type: 'info'
}

export default Alert;