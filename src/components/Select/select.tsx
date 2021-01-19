import React, { createContext, KeyboardEvent, useState, useRef } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import Empty from '../Empty/empty'
import Transition from '../Transition/transition'
import { OptionProps } from './option'
import useClickOutside from '../../Hooks/useClickOutside'

type SelectSize = 'large' | 'middle' | 'small'
export interface SelectProps {
  size?: SelectSize
  onSelect?: (value: string) => void
  defaultValue?: string | number
  placeholder?: string
}

interface ISelectContext {
  index: number;
  onSelect?: (value: string, index: number) => void;
}
export const SelectContext = createContext<ISelectContext>({ index: -1 })
export const Select: React.FC<SelectProps> = (props) => {
  const {
    size,
    onSelect,
    defaultValue,
    placeholder,
    ...restProps
  } = props
  const { children } = props
  const componentRef = useRef<HTMLDivElement>(null)
  const [highlightIndex, setHighlightIndex] = useState<number>(-1)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [focus, setFocus] = useState<boolean>(false)
  useClickOutside(componentRef, () => { setFocus(false); setShowDropdown(false) })
  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.keyCode) {
      case 13:
        // if (suggestions[highlightIndex]) {
        //   handleSelect(suggestions[highlightIndex])
        // }
        break;
      case 38:
        highlight('minus')
        break;
      case 40:
        highlight('plus')
        break
      case 27:
        // setShowDropdown(false)
        break;
      default:
        break;
    }
  }
  const highlight = (action: string) => {
    const children = renderChildren()
    let activeIndex = highlightIndex
    if (action === 'minus') {
      activeIndex = highlightIndex -1
    } else if(action === 'plus') {
      activeIndex = highlightIndex + 1
    }
    if (children) {
      if (activeIndex < 0) {
        activeIndex = children.length - 1
      } else if (activeIndex > children.length -1) {
        activeIndex = 0
      }
      while (children[activeIndex].props.disabled) {
        if (highlightIndex > activeIndex) {
          activeIndex = activeIndex - 1
        } else {
          activeIndex = activeIndex + 1
        }
      }
    } 
    setHighlightIndex(activeIndex)
  }
  const renderChildren = () => {
    const _children = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<OptionProps>
      const { displayName } = childElement.type
      if (displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: index
        })
      } else {
        console.error('warning: Select has a child which is not a Option component')
      }
    })
    return _children
  }
  const handleClick = (value: string, index: number) => {
    // setHighlightIndex(index)
    setShowDropdown(false)
    setSelectedValue(value)
    if (onSelect) {
      onSelect(value)
    }
  }
  const handleFocus = () => {
    setFocus(true)
    setShowDropdown(true)
  }
  const passedContext: ISelectContext = {
    index: highlightIndex,
    onSelect: handleClick
  }
  const cnames = classNames('vship-select-wrapper', {
    [`select-size-${size}`]: size
  })
  const klass = classNames('vship-select-inner', {
    'vship-select-inner-focus': focus,
    'vship-select-inner-after': !placeholder && !selectedValue,
    'vship-select-inner-placeholder': !selectedValue
  })
  return (
    <div className={cnames} {...restProps} ref={componentRef} onClick={handleFocus}>
      <div className={klass}>
        <div>{selectedValue ? selectedValue : placeholder}</div>
        <span className='vship-select-arrow'>
          <Icon icon='angle-down' className={showDropdown ? 'icon-down icon-down-focus' : 'icon-down'} />
        </span>
      </div>
      <Transition
        in={showDropdown}
        animation='zoom-in-top'
        timeout={300}
        onExited={() => {}}
      >
        <ul className='vship-option-list'>
          <SelectContext.Provider value={passedContext}>
            {renderChildren() ?
              renderChildren() :
              <div className='vship-option-empty'>
                <Empty />
              </div>
            }
          </SelectContext.Provider>
        </ul>
      </Transition>
    </div>
  )
}
Select.defaultProps = {
  size: 'middle'
}

export default Select;
