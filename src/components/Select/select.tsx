/* eslint-disable array-callback-return */
import React, { createContext, useState, useRef, ChangeEvent } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import Input from '../Input/input'
import Empty from '../Empty/empty'
import Transition from '../Transition/transition'
import { OptionProps } from './option'
import useClickOutside from '../../Hooks/useClickOutside'

type SelectSize = 'large' | 'middle' | 'small'
export interface SelectProps {
  size?: SelectSize
  search?: boolean
  disabled?: boolean
  onSelect?: (value: string) => void
  onChange?: (value: string | Number) => void
  defaultValue?: string | number
  placeholder?: string
  dropdownMatchSelectWidth?: boolean
  optionFilterProp?: string
  dropdownStyle?: Object
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
    onChange,
    defaultValue,
    placeholder,
    search,
    disabled,
    dropdownStyle,
    optionFilterProp,
    dropdownMatchSelectWidth,
    ...restProps
  } = props
  const { children } = props
  const componentRef = useRef<HTMLDivElement>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [focus, setFocus] = useState<boolean>(false)
  useClickOutside(componentRef, () => { setFocus(false); setShowDropdown(false) })
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
  const [dropdownList, setDropdownList] = useState(renderChildren() || [])
  const handleClick = (value: string, index: number) => {
    // setHighlightIndex(index)
    setShowDropdown(false)
    setSelectedValue(value)
    if (onSelect) {
      onSelect(value)
    }
  }
  const handleFocus = () => {
    if (disabled) return
    setFocus(true)
    setShowDropdown(true)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
    let _children: any[] = []
    const children = renderChildren()
    if (children) {
      if (optionFilterProp === 'value') {
        _children = children.filter(child => child.props.value.toString().toLocaleUpperCase().includes(e.target.value.toString().toLocaleUpperCase()))
      } else if (optionFilterProp === 'children') {
        const childrenIsText = children.filter(child => typeof child.props.children === 'number' || typeof child.props.children === 'string')
        _children = childrenIsText.filter((child) => {
          if (typeof child.props.children === 'number' || typeof child.props.children === 'string') {
            return child.props.children.toString().toLocaleUpperCase().includes(e.target.value.toString().toLocaleUpperCase())
          }
        })
      }
    }
    setDropdownList(_children)
  }
  const passedContext: ISelectContext = {
    index: -1,
    onSelect: handleClick
  }
  const cnames = classNames('vship-select-wrapper', {
    [`select-size-${size}`]: size,
    'vship-select-disabled': disabled
  })
  const klass = classNames('vship-select-inner', {
    'vship-select-inner-focus': focus,
    'vship-select-inner-after': !placeholder && !selectedValue,
    'vship-select-inner-placeholder': !selectedValue
  })
  return (
    <div className={cnames} {...restProps} ref={componentRef} onClick={handleFocus}>
      {!search ? <div className={klass}>
        <div>{selectedValue ? selectedValue : placeholder}</div>
      </div> :
        <div className='vship-select-search'>
          <Input
            style={{ marginBottom: 0 }}
            size={size}
            disabled={disabled}
            placeholder={placeholder}
            value={selectedValue}
            onChange={(e) => handleChange(e)}
          />
        </div>
      }
      <span className='vship-select-arrow'>
        <Icon icon='angle-down' className={showDropdown ? 'icon-down icon-down-focus' : 'icon-down'} />
      </span>
      <Transition
        in={showDropdown}
        animation='zoom-in-top'
        timeout={300}
        onExited={() => { }}
      >
        <ul
          className={dropdownMatchSelectWidth ? 'vship-option-list dropdownMatchSelectWidth' : 'vship-option-list'}
          style={dropdownStyle}
        >
          <SelectContext.Provider value={passedContext}>
            {dropdownList && dropdownList.length ?
              dropdownList :
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
  size: 'middle',
  optionFilterProp: 'value',
  dropdownMatchSelectWidth: true
}

export default Select;
