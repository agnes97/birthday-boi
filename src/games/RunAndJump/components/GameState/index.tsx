import { FC } from 'react'
import './index.css'

const gameOverTitle = "{ GAME OVER }"
const gameWonTitle = "{ CONGRATULATIONS! }"

type Props = {
    onGameReset: () => void,
    gameWon: boolean
}

const GameState: FC<Props> = ({ onGameReset, gameWon }) => (
    <div className={`game-state-container ${gameWon ? 'game-won' : 'game-lost'}`}>
        <h2>{gameWon ? gameWonTitle : gameOverTitle}</h2>
        <button onClick={() => onGameReset()} title="REPLAY GAME">&#x21BB;</button>
    </div>
)

export default GameState