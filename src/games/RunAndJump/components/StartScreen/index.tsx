import { Dispatch, FC, useCallback } from 'react'
import './index.css'
import Agnes from '../../../../assets/agnes.gif'
import Henry from '../../../../assets/henry.gif'
import { GameData } from '../..'
import { getAge, hisBirthday } from '../../../../services/birthday'

type Props = {
    startGame: () => void,
    gameData: GameData,
    setGameData: Dispatch<GameData>
}

const title = '{ RUN & JUMP }'

const currentHenrysAge = () => getAge(hisBirthday)

const StartScreen: FC<Props> = ({ startGame, gameData, setGameData }) => {      
    const submitForm = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(gameData)

        startGame()
    }, [gameData, startGame])

    return (
        <div className='start-screen-container'>
            <h2>{title}</h2>
            <form className='form-wrapper' onSubmit={submitForm}>
                {/* CHOOSE A HERO */}
                <fieldset className='form-section hero'>
                    <legend>CHOOSE YOUR HERO</legend>

                    <div className={`fieldset-option ${gameData.hero === 'henry' && 'imitate-hover'}`}>
                        <img src={Henry} alt='Henry' />
                        <input 
                            defaultChecked 
                            type='radio' 
                            id='henry' 
                            name='chosen-hero'
                            onChange={() => setGameData({ hero: 'henry' })} />
                        <label htmlFor='henry'>HENRY</label>
                    </div>

                    <div className={`fieldset-option ${gameData.hero === 'agnes' && 'imitate-hover'}`}>
                        <img src={Agnes} alt='Agnes' />
                        <input 
                            type='radio' 
                            id='agnes' 
                            name='chosen-hero'
                            onChange={() => setGameData({ hero: "agnes" })}
                        />
                        <label htmlFor='agnes'>AGNES</label>
                    </div>
                </fieldset>

                {/* START A GAME */}
                <div className='form-section submit'>
                    <input id='submit' type='submit' value='&#x27A4;' title='PLAY GAME!' />
                    <label htmlFor='submit'>PLAY</label>
                </div>

                {/* CHOOSE NUMBER OF OBSTACLES */}
                <fieldset className='form-section obstacles'>
                    <legend>CHOOSE NUMBER OF OBSTACLES</legend>

                    {/* TODO: Refactor this! Variables, Enum? */}
                    <div className={`fieldset-option ${gameData.numberOfObstacles === 1 && 'imitate-hover'}`}>
                        <input 
                            type='radio' 
                            id='testing' 
                            name='number-of-obstacles'
                            onChange={() => setGameData({ numberOfObstacles: 1 })}
                        />
                        <label htmlFor='testing'>{`1 {for testing}`}</label>
                    </div>

                    <div className={`fieldset-option ${gameData.numberOfObstacles === 10 && 'imitate-hover'}`}>
                        <input 
                            type='radio' 
                            id='ten' 
                            name='number-of-obstacles' 
                            onChange={() => setGameData({ numberOfObstacles: 10 })}
                        />
                        <label htmlFor='ten'>10</label>
                    </div>

                    <div className={`fieldset-option ${gameData.numberOfObstacles === 100 && 'imitate-hover'}`}>
                        <input 
                            type='radio' 
                            id='hundredth' 
                            name='number-of-obstacles'
                            onChange={() => setGameData({ numberOfObstacles: 100 })}
                        />
                        <label htmlFor='hundredth'>100</label>
                    </div>

                    <div className={`fieldset-option ${gameData.numberOfObstacles === currentHenrysAge() && 'imitate-hover'}`}>
                        <input defaultChecked 
                            type='radio' 
                            id='age'
                            name='number-of-obstacles'
                            onChange={() => setGameData({ numberOfObstacles: currentHenrysAge() })}
                        />
                        <label htmlFor='age'>
                            {`HENRY'S AGE {${currentHenrysAge()}}`}
                        </label>
                    </div>

                    {/* TODO: Display number of obstacles on game over screen :) */}
                    <div className='fieldset-option'>
                        <input type='radio' disabled title='Currently not available!' id='unlimited' name='number-of-obstacles' />
                        <label htmlFor='unlimited'><s>UNLIMITED</s></label>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default StartScreen