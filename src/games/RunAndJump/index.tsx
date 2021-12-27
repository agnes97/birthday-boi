import { FC, useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
 
const RunAndJump: FC = () => {
    const [isJumping, setIsJumping] = useState<boolean>(false)
    const [position, setPosition] = useState<number>(0)
    const positionRef = useRef(position)

    // CONTROL JUMPING
    const jump = useCallback(() => {
        const ball = document.querySelector<HTMLElement>('.ball')

        let timerId = setInterval(() => {
            if (positionRef.current === 3) { // move down
                console.log("down")
                clearInterval(timerId) 
                setPosition(positionRef.current = 0)
                ball ? ball.style.bottom = positionRef.current + 'rem' : console.log('nothing here')
                setIsJumping(false)

            } else if (position === 0) { // move up
                clearInterval(timerId) 

                let upTimerId = setInterval(() => {
                    console.log("up")
                    setPosition(positionRef.current = 3)
                    ball ? ball.style.bottom = positionRef.current + 'rem' : console.log('nothing here')
                    clearInterval(upTimerId)
                    setIsJumping(true)
                }, 20)
            }
        }, 20)
    }, [position])

    // CONTROL GAME WITH SPACE KEY
    const controlGame = useCallback((event) => {
        if (event.keyCode === 32) {
            if (!isJumping) {
                jump()
            }
        }
    }, [isJumping, jump])

    useEffect(() => {
        document.addEventListener('keyup', controlGame)
    }, [controlGame, position])

    return (
        <section className='game-box'>
            <div className='ball' />
        </section>
    )
}

export default RunAndJump