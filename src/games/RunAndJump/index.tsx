import { FC, useRef, useState } from 'react'
import { areBoundariesInCollision } from '../../services/collision'
import GameOver from './components/GameOver'
import Obstacles from './components/Obstacles'
import Hero from './components/Hero'
import './index.css'

const age = 10

const RunAndJump: FC = () => {
    const [gameOver, setGameOver] = useState<boolean>(false)

    const heroRef = useRef<HTMLDivElement>(null)

    return (
        <section className='game-box'>
            {gameOver && <GameOver onGameReset={() => setGameOver(false)} />}
            <Hero heroRef={heroRef} />
            <Obstacles
                numberOfObstacles={age}
                paused={gameOver}
                onLastObstacle={/* TODO: This is game won */ () => setGameOver(true)}
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