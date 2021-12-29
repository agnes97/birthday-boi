import { Dispatch, FC } from 'react'
import './index.css'

const title = "{ GAME OVER }"

type Props = {
    setGameOver: Dispatch<boolean>
}

const GameOver: FC<Props> = ({ setGameOver }) => {
    const handleClick = () => {
        setGameOver(false)
    }

    return (
        <div className='game-over'>
            <h2>{title}</h2>
            <button onClick={handleClick} title="REPLAY GAME">&#x21BB;</button>
        </div>
    )
}

export default GameOver