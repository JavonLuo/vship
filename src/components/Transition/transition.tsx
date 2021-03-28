import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  /**
    * 动画的方向
  */
    animation?: AnimationName,
  /**
    * 是否需要外层容器
  */
    wrapper?: boolean,
  /**
    * 子元素是否展示
  */
    in: boolean
   /**
    * 动画持续的时间
  */
    timeout: number
}

export const Transition: React.FC<TransitionProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
}

export default Transition