import { FC } from 'react'
import './index.css'

const title = "{ GAME OVER }"

type Props = {
    onGameReset: () => void
}

const GameOver: FC<Props> = ({ onGameReset }) => (
    <div className='game-over'>
        <h2>{title}</h2>
        <button onClick={() => onGameReset()} title="REPLAY GAME">&#x21BB;</button>
    </div>
)

export default GameOver