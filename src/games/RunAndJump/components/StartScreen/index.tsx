import { FC } from 'react'
import './index.css'

type Props = {
    startGame: () => void
}

const StartScreen: FC<Props> = ({ startGame }) => (
    <div className='start-screen-container'>
        <h2>RUN &amp; JUMP</h2>
        <button onClick={startGame} title="PLAY GAME">&#x27A4;</button>
    </div>
)

export default StartScreen