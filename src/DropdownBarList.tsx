import React, {ReactNode} from 'react'
import {useStyle} from './hooks'

interface DropDownBarProps {
    w : number,
    h : number, 
    scale : number, 
    onClick : Function
    children : ReactNode 
}

const DropDownBarList = (props : DropDownBarProps) => {
    const {parentStyle, holderStyle, barStyle} = useStyle(props.w, props.h, props.scale, React.Children.toArray(props.children).length) 
    return (
        <div style = {holderStyle()} onClick = {() => {
            props.onClick()
        }}>
            <div style = {parentStyle()}>
                {props.children}
            </div>
        </div>
    )
}

export default DropDownBarList 