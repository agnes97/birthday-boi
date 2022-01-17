import { FC, useCallback, useReducer, useRef, useState } from 'react'
import { areBoundariesInCollision } from '../../services/collision'
import GameState from './components/GameState'
import Obstacles from './components/Obstacles'
import Hero from './components/Hero'
import './index.css'
import StartScreen from './components/StartScreen'
import { getAge, hisBirthday } from '../../services/birthday'

export type GameData = {
    hero: string,
    numberOfObstacles: number
}

const initialNumberOfObstacles = () => getAge(hisBirthday)

const RunAndJump: FC = () => {
    const [gameRunning, setGameRunning] = useState<boolean>(false)
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [gameWon, setGameWon] = useState<boolean>(false)
    const [lastSuccessfulObstacle, setlastSuccessfulObstacle] = useState<number>(0)
    
    const heroRef = useRef<HTMLDivElement>(null)
    
    const initialGameState = { hero: 'henry', numberOfObstacles: initialNumberOfObstacles() }
    const [gameData, setGameData] = useReducer(
        (state: GameData, updates: Partial<GameData>) => ({
          ...state,
          ...updates,
        }),
        initialGameState
    )
    
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
            {(!gameRunning && !gameOver) && <StartScreen 
                startGame={() => startGame()}
                gameData={gameData}
                onGameDataChange={(newGameData) => setGameData(newGameData)}          
            />}
            {(gameOver || gameWon) && <GameState 
                onGameReset={() => resetGame(false, false)} 
                gameWon={gameWon}
                returnToMenu={() => returnToMenu()}
                gameScore={gameWon ? gameData.numberOfObstacles : lastSuccessfulObstacle}
            />}
            <Hero 
                heroRef={heroRef} 
                hero={gameData.hero ?? 'henry'}
                isPresent={gameRunning && !gameOver} 
                arrivalDelay={3000} 
            />
            <Obstacles
                numberOfObstacles={gameData.numberOfObstacles ?? 0}
                paused={gameOver || !gameRunning}
                startDelay={1800}
                onLastObstacle={() => resetGame(true, true)}
                isObstacleInCollision={(obstacleBoundaries) => {
                    const heroBoundaries = heroRef.current?.getBoundingClientRect()
                    return heroBoundaries ? areBoundariesInCollision(heroBoundaries, obstacleBoundaries, 5) : false
                }}
                onObstacleCollision={(collisionObstacle) => setGameOver(() => {
                    setlastSuccessfulObstacle(collisionObstacle)
                    return true
                }) 
                } />
            <div className={`grass ${(gameOver && !gameWon) && 'game-over'} ${!gameRunning && 'start-screen'}`} />
        </section>
    )
}

export default RunAndJump