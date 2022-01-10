import { FC } from 'react'
import './index.css'
import Agnes from '../../../../assets/agnes.gif'
import Henry from '../../../../assets/henry.gif'

type Props = {
    startGame: () => void
}

const title = '{ RUN & JUMP }'

const StartScreen: FC<Props> = ({ startGame }) => (
    <div className='start-screen-container'>
        <h2>{title}</h2>
        <div className='options-container'>
            <div className='option'>
                <img src={Henry} alt="Henry" />
                <hr />
                <img src={Agnes} alt="Agnes" />
            </div>
            <button onClick={startGame} title="PLAY GAME">&#x27A4;</button>
            <div className='option'>OPTIONS 2</div>
        </div>
    </div>
)

export default StartScreen