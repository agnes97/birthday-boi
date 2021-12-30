import { FC, useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
import GameOver from './components/GameOver'
import Obstacles from './components/Obstacles'
import Hero from './components/Hero'
 
const animationTime = 300 // milliseconds
const animationType = 'ease'

const jumpHeight = 10 // rem

const age = 10 // number of obstacles

const RunAndJump: FC = () => {
    const [isJumping, setIsJumping] = useState<boolean>(false)
    const [gameOver, setGameOver] = useState<boolean>(false)

    const heroRef = useRef<HTMLDivElement>(null)

    // CONTROL JUMPING
    const jump = useCallback(() => {
        const hero = heroRef.current

        if (!hero || isJumping) return

        // set animation
        hero.style.transition = `bottom ${animationTime}ms ${animationType}`

        // move up
        setIsJumping(true)
        hero.style.bottom = `${jumpHeight}rem`

        // move down
        setTimeout(() => hero.style.bottom = '2rem', animationTime)

        // wait for animation
        setTimeout(() => setIsJumping(false), animationTime * 2)
    }, [isJumping, setIsJumping])

    // CONTROL GAME WITH SPACE KEY
    const controlGame = useCallback((event) => {
        if (event.keyCode === 32) jump()
    }, [jump])

    useEffect(() => {
        document.addEventListener('keydown', controlGame)
        return () => document.removeEventListener('keydown', controlGame)
    }, [controlGame])

    return (
        <section className='game-box'>
            {gameOver
                ? <GameOver setGameOver={setGameOver}/>
                : <>
                    <Hero heroRef={heroRef} />
                    <Obstacles age={age} setGameOver={setGameOver} heroRef={heroRef} />
                    <div className='grass' />
                </>
            }
        </section>
    )
}

export default RunAndJump