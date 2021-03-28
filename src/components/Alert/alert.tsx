import React, { ReactNode, useState, useEffect } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon/icon'
import Transition from '../Transition/transition'
type alertType = 'success' | 'info' | 'warning' | 'error'
export interface AlertProps {
  /**
    * close after callback
  */
  afterClose?: () => void,
  /**
    * 是否顶部显示
  */
  banner?: boolean,
  /**
    * 是否显示关闭按钮
  */
  closable?: boolean,
  /**
    * 关闭的显示文本
  */
  closeText?: string | ReactNode,
  /**
    * 详情文本
  */
  description?: string | ReactNode,
  /**
    * 自定义图标 react node
  */
  icon?: ReactNode,
  /**
    * alert text
  */
  message?: string | ReactNode,
  /**
    * 是否显示图标
  */
  showIcon?: boolean,
  /**
    * alert 类型 success、warning、error、info四种类型
  */
  type?: alertType,
  /**
    * close callback
  */
  onClose?: (e: React.MouseEvent) => void
}
/**
* ### Alert 警告提示
*
* 警告提示，展现需要关注的信息。 
* ### 引用方法
* 
* ~~~js
* import { Alert } from 'vship';
* ~~~
*/
export const Alert: React.FC<AlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true)
  useEffect(() => {
    return componentWillUnmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const _type = type as string
  return (
    <Transition
      in={showAlert}
      timeout={300}
      animation="zoom-in-top"
    >
      {<div className={classes} {...restProps}>
        <span className='vship-alert-icon'>
          {showIcon && !icon && <Icon icon={getIconAndTheme(_type).icon} theme={getIconAndTheme(_type).theme} />}
          {showIcon && icon && iconEle}
        </span>
        <div className='.vship-alert-content'>
          <span className='vship-alert-message'>{message && message}</span>
          <span className='vship-alert-description'>{description && description}</span>
        </div>
        {closable && <button
          className='vship-alert-close-icon'
          style={{ color: '#aaa', fontSize: 12 }}
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