import { FC, useCallback, useRef, useState } from 'react'
import { areBoundariesInCollision } from '../../services/collision'
import GameState from './components/GameState'
import Obstacles from './components/Obstacles'
import Hero from './components/Hero'
import './index.css'
import StartScreen from './components/StartScreen'

const age = 10

const RunAndJump: FC = () => {
    const [gameRunning, setGameRunning] = useState<boolean>(false)
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [gameWon, setGameWon] = useState<boolean>(false)

    const heroRef = useRef<HTMLDivElement>(null)

    const startGame = useCallback(() => {
        setGameRunning(true)
    }, [])

    const resetGame = useCallback((gameOverValue: boolean, gameWonValue: boolean) => {
        setGameOver(gameOverValue)
        setGameWon(gameWonValue)
    }, [])

    const returnToMenu = useCallback(() => {
        setGameRunning(false)
        resetGame(false, false)
    }, [resetGame])

    return (
        <section className='game-box'>
            {(!gameRunning && !gameOver) && <StartScreen startGame={() => startGame()}/>}
            {(gameOver || gameWon) && <GameState 
                onGameReset={() => resetGame(false, false)} 
                gameWon={gameWon}
                returnToMenu={() => returnToMenu()}
            />}
            <Hero heroRef={heroRef} isGameRunning={gameRunning} />
            <Obstacles
                numberOfObstacles={age}
                paused={gameOver}
                isGameRunning={gameRunning}
                onLastObstacle={() => resetGame(true, true)}
                isObstacleInCollision={(obstacleBoundaries) => {
                    const heroBoundaries = heroRef.current?.getBoundingClientRect()
                    return heroBoundaries ? areBoundariesInCollision(heroBoundaries, obstacleBoundaries, 5) : false
                }}
                onObstacleCollision={() => setGameOver(true)} />
            <div className={`grass ${(gameOver && !gameWon) && 'game-over'} ${!gameRunning && 'start-screen'}`} />
        </section>
    )
}

export default RunAndJump