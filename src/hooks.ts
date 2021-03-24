import {
    useState, 
    useEffect,
    CSSProperties
} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

export const useAnimatedScale = () => {
    const [scale, setScale] : [number, Function] = useState(0)
    const [animated, setAnimated] : [boolean, Function] = useState(false)
    const [dir, setDir] : [number, Function] = useState(1)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval : NodeJS.Timeout = setInterval(() => {
                    setScale((prev : number) => {
                        const stop : Function = () => {
                            setAnimated(false)
                            clearInterval(interval)
                        }
                        const curr = prev + scGap * dir 
                        if (curr > 1) {
                            setDir(-1)
                            stop()
                            return 1 
                        }
                        if (curr < 0) {
                            setDir(1)
                            stop()
                            return 0
                        }
                        return curr
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] : [number, Function] = useState(window.innerWidth)
    const [h, setH] : [number, Function] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number, n : number) => {
    const size : number = 100
    console.log(scale, size / 5, size / 5 + (size / 5) * n * scale)
    return {
        holderStyle() : CSSProperties {
            return {
                width : `${size}px`,
                height : `${size / 5 + (size / 5) * (n - 1) * scale}px`,
                maxHeight: `${size / 5 + (size / 5) * n * scale}px`,
                overflow: 'clip',
                background : 'orange'
            }
        },
        parentStyle() : CSSProperties{
            return {
                display : 'flex',
                flexDirection: 'column'
            }
        },
        barStyle() : CSSProperties {
            return {
                width : `${size}px`,
                height: `${size / 5}px`,
                textAlign: 'center',
                background : 'teal',
                color : 'white'
            }
        }
    }
}