import React,{ useState, createContext } from 'react'
import classNameas from 'classnames'
import MenuItem from './menuItem'

type menuMode = 'horizontal' | 'vertical'
type onSelectCallback = (selectedIndex: number) => void
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: menuMode;
    style?: React.CSSProperties;
    onSelect?:onSelectCallback;
}
interface IMenuContext {
    index:number;
    onSelect?:onSelectCallback
}
export const MenuContext = createContext<IMenuContext>({index:0})

const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect } = props
    const [ curentActice, setActive ] = useState(defaultIndex)
    const classes = classNameas('menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const handleClick = (index:number) => {
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: curentActice ? curentActice : 0,
        onSelect: handleClick
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
            {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode:'horizontal'
}

export default Menu