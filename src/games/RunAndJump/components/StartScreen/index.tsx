import { FC } from 'react'
import './index.css'
import Agnes from '../../../../assets/agnes.gif'
import Henry from '../../../../assets/henry.gif'

type Props = {
    startGame: () => void,
    age: number,
}

const title = '{ RUN & JUMP }'

const StartScreen: FC<Props> = ({ startGame, age }) => (
    <div className='start-screen-container'>
        <h2>{title}</h2>
        <form className='form-wrapper'>
            {/* CHOOSE A HERO */}
            <fieldset className='form-section hero'>
                <legend>CHOOSE YOUR HERO</legend>

                <div className='fieldset-option'>
                    <img src={Henry} alt='Henry' />
                    <input type='radio' id='henry' name='chosen-hero'/>
                    <label htmlFor='henry'>HENRY</label>
                </div>

                <div className='fieldset-option'>
                    <img src={Agnes} alt='Agnes' />
                    <input type='radio' id='agnes' name='chosen-hero'/>
                    <label htmlFor='agnes'>AGNES</label>
                </div>
            </fieldset>

            {/* START A GAME */}
            <div className='form-section submit'>
                <input id='submit' type='submit' value='&#x27A4;' onClick={startGame} title='PLAY GAME!' />
                <label htmlFor='submit'>PLAY</label>
            </div>

            {/* CHOOSE NUMBER OF OBSTACLES */}
            <fieldset className='form-section obstacles'>
                <legend>CHOOSE NUMBER OF OBSTACLES</legend>

                <div className='fieldset-option'>
                    <input type='radio' id='testing' name='number-of-obstacles'/>
                    <label htmlFor='testing'>{`1 {for testing}`}</label>
                </div>

                <div className='fieldset-option'>
                    <input type='radio' id='ten' name='number-of-obstacles'/>
                    <label htmlFor='ten'>10</label>
                </div>

                <div className='fieldset-option'>
                    <input type='radio' id='hundredth' name='number-of-obstacles'/>
                    <label htmlFor='hundredth'>100</label>
                </div>

                <div className='fieldset-option'>
                    <input type='radio' id='age' name='number-of-obstacles'/>
                    <label htmlFor='age'>
                        {`HENRY'S AGE {${age}}`}
                    </label>
                </div>

                {/* TODO: Display number of obstacles on game over screen :) */}
                <div className='fieldset-option'>
                    <input type='radio' title='Currently not available!' id='unlimited' name='number-of-obstacles'/>
                    <label htmlFor='unlimited'><s>UNLIMITED</s></label>
                </div>
            </fieldset>
        </form>
    </div>
)

export default StartScreen