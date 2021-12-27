import { FC, useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
 
const RunAndJump: FC = () => {
    const [position, setPosition] = useState<number>(0)

    const ballRef = useRef<HTMLDivElement>(null)

    // CONTROL JUMPING
    const jump = useCallback(() => {
        const ball = ballRef.current

        if (!ball) return

        if (position === 0) { // move up
            console.log("up")
            setPosition(3)
            ball.style.bottom = '3rem'
        }

        if (position === 3) { // move down
            console.log("down")
            setPosition(0)
            ball.style.bottom = '0rem'
        }
    }, [ballRef, position, setPosition])

    // CONTROL GAME WITH SPACE KEY
    const controlGame = useCallback((event) => {
        if (event.keyCode === 32) jump()
    }, [jump])

    useEffect(() => {
        document.addEventListener('keyup', controlGame)
        return () => document.removeEventListener('keyup', controlGame)
    }, [controlGame])

    return (
        <section className='game-box'>
            <div ref={ballRef} className='ball' />
        </section>
    )
}

export default RunAndJump