import { FC, useCallback, useRef, useState } from 'react'
import { areBoundariesInCollision } from '../../services/collision'
import GameState from './components/GameState'
import Obstacles from './components/Obstacles'
import Hero from './components/Hero'
import './index.css'

const age = 1

const RunAndJump: FC = () => {
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [gameWon, setGameWon] = useState<boolean>(false)

    const heroRef = useRef<HTMLDivElement>(null)

    const resetGame = useCallback((gameOverValue: boolean, gameWonValue: boolean) => {
        setGameOver(gameOverValue)
        setGameWon(gameWonValue)
    }, [])

    return (
        <section className='game-box'>
            {(gameOver || gameWon) && <GameState 
                onGameReset={() => resetGame(false, false)} 
                gameWon={gameWon}
            />}
            <Hero heroRef={heroRef} />
            <Obstacles
                numberOfObstacles={age}
                paused={gameOver}
                onLastObstacle={() => resetGame(true, true)}
                isObstacleInCollision={(obstacleBoundaries) => {
                    const heroBoundaries = heroRef.current?.getBoundingClientRect()
                    return heroBoundaries ? areBoundariesInCollision(heroBoundaries, obstacleBoundaries, 5) : false
                }}
                onObstacleCollision={() => setGameOver(true)} />
            <div className='grass' />
        </section>
    )
}

export default RunAndJump