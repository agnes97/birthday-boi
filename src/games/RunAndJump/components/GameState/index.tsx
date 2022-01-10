import { FC } from 'react'
import './index.css'

const gameOverTitle = "{ GAME OVER }"
const gameWonTitle = "{ CONGRATULATIONS! }"

type Props = {
    onGameReset: () => void,
    returnToMenu: () => void,
    gameWon: boolean
}

const GameState: FC<Props> = ({ onGameReset, returnToMenu, gameWon }) => (
    <div className={`game-state-container ${gameWon ? 'game-won' : 'game-lost'}`}>
        <h2>{gameWon ? gameWonTitle : gameOverTitle}</h2>
        <div className='button-container'>
            <button onClick={() => onGameReset()} title="REPLAY GAME">&#x21BB;</button>
            <button onClick={() => returnToMenu()} title="BACK TO MENU">&#9776;</button>
        </div>
    </div>
)

export default GameState