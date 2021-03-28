import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
export type ButtonSize = 'lg' | 'sm' | 'md'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    /**
     * class类名
    */
    className?: string;
    /**
     * 设置Button是否禁用
    */
    disabled?: boolean;
    /**
     * Button的尺寸
    */
    size?: ButtonSize;
    /**
     * Button的类型
    */
    btnType?: ButtonType;
    children: React.ReactNode;
    /**
     * Button为link类型时的href
    */
    href?: string;
}

// 扩展组件的其他props属性 类如事件绑定
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
* ### Button 按钮
* 按钮用于开始一个即时操作。
* ### 引用方法
* ~~~js
* import { Button } from 'vship';
* ~~~
*/
export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
    // btn  btn-lg btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })

    if (btnType === 'link' && href) {
        return (
            <a
                href={href}
                className={classes}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default',
    size: 'md'
}

export default Button;