import React,{ useState, createContext } from 'react'
import classNameas from 'classnames'
import { MenuItemProps } from './menuItem'

type menuMode = 'horizontal' | 'vertical'
type onSelectCallback = (selectedIndex: string) => void
export interface MenuProps {
    /**
     * 默认选中的项下标
    */
    defaultIndex?: string;
    /**
     * class类名
    */
    className?: string;
    /**
     * menu的模式
    */
    mode?: menuMode;
    /**
     * 
    */
    style?: React.CSSProperties;
    /**
     * 选中的回调
    */
    onSelect?: onSelectCallback;
    /**
     * 默认打开的menu
    */
    defaultOpenSubMenus?: string[]
}
interface IMenuContext {
    index?: string;
    onSelect?: onSelectCallback;
    mode?: menuMode;
    defaultOpenSubMenus?: string[]
}
export const MenuContext = createContext<IMenuContext>({index:'0'})
/**
 * 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
 * ### 引入方式
 * ~~~js
 * import Menu from 'vship';
 * ~~~
*/
export const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect,defaultOpenSubMenus } = props
    const [ curentActice, setActive ] = useState(defaultIndex)
    const classes = classNameas('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: curentActice ? curentActice : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus
    }
    const renderChildren = () => {
        return React.Children.map(children, (child,index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error('warning: Menu has a child which is not a MenuItem component')
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode:'horizontal',
    defaultOpenSubMenus: []
}

export default Menu;