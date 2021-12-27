import { FC, useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
import Obstacles from './obstacles'
 
const animationTime = 300 // milliseconds
const animationType = 'ease'
const jumpHeight = 5 // rem

const age = 29 // number of obstacles

const RunAndJump: FC = () => {
    const [isJumping, setIsJumping] = useState<boolean>(false)

    const ballRef = useRef<HTMLDivElement>(null)

    // CONTROL JUMPING
    const jump = useCallback(() => {
        const ball = ballRef.current

        if (!ball || isJumping) return

        // set animation
        ball.style.transition = `bottom ${animationTime}ms ${animationType}`

        // move up
        setIsJumping(true)
        ball.style.bottom = `${jumpHeight}rem`

        // move down
        setTimeout(() => ball.style.bottom = '0rem', animationTime)

        // wait for animation
        setTimeout(() => setIsJumping(false), animationTime * 2)
    }, [ballRef, isJumping, setIsJumping])

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
            <Obstacles age={age} />
        </section>
    )
}

export default RunAndJump