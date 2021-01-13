import React, { ReactNode, FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon/icon'
import Transition from '../Transition/transition'
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
  onClose?: (e: React.MouseEvent) => void
}

export const Alert: FC<AlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true)
  useEffect(() => {
    return componentWillUnmount
  }, [showAlert])
  const componentWillUnmount = () => {
    const { afterClose } = props
    if (afterClose && afterClose instanceof Function) {
      afterClose()
    }
  }
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
  const closeAlert = (e: React.MouseEvent) => {
    const { onClose } = props
    if (onClose && onClose instanceof Function) {
      onClose(e)
    }
    setShowAlert(!showAlert)
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
    [`vship-alert-${type}`]: type,
    'vship-alert-with-description': description,
    'vship-alert-no-icon': !showIcon,
    'vship-alert-banner': banner,
    'vship-alert-closable': closable
  })
  const iconEle = icon as React.FunctionComponentElement<IconProps>;
  return (
    <Transition
      in={showAlert}
      timeout={300}
      animation="zoom-in-top"
    >
      {<div className={classes} {...restProps}>
        {showIcon && !icon && <Icon icon={getIconAndTheme(type).icon} size={description ? '2x' : '1x'} theme={getIconAndTheme(type).theme} className='vship-alert-icon' />}
        {showIcon && icon && React.cloneElement(iconEle, { className: 'vship-alert-icon' })}
        <span className='vship-alert-message'>{message && message}</span>
        <span className='vship-alert-description'>{description && description}</span>
        {closable && <button
          className='vship-alert-close-icon'
          style={{ color: '#aaa', fontSize: 16 }}
          onClick={(e) => { closeAlert(e) }}
        >
          {closeText ? closeText : 'X'}
        </button>}
      </div>}
    </Transition>
  )
}
Alert.defaultProps = {
  type: 'info'
}

export default Alert;