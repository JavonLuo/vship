import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    onClick: jest.fn()
}
const differentProps: ButtonProps = {
    size: 'lg',
    btnType: 'primary',
    className: 'button'
}
const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test button component', () => {
    // 测试默认状态下的button
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>default props</Button>)
        const element = wrapper.getByText('default props') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element.disabled).toBeFalsy()
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    // 测试不同的props下的button组件
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...differentProps}>different props</Button>)
        const element = wrapper.getByText('different props')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-primary btn-lg button')
    })
    // 测试link Button
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType='link' href='https://www.baidu.com'>link</Button>)
        const element = wrapper.getByText('link')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-link')
        expect(element.tagName).toEqual('A')
    })
    // 测试disabled的Buttom
    it('should render disabled button when disabled set true', () => {
        const wrapper = render(<Button {...disabledProps}>disabled</Button>)
        const element = wrapper.getByText('disabled') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})