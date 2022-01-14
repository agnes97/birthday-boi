import { Dispatch, FC, useCallback } from 'react'
import './index.css'

import { GameData } from '../..'
import { getAge, hisBirthday } from '../../../../services/birthday'
import { heroes, possibleObstacleNumbers } from '../../data'

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

        // TODO: Delete console.log when done!
        console.log(gameData)

        startGame()
    }, [gameData, startGame])

    const chooseDisplayedTitle = (number: number) => {
        if (number === 1) return `${number} {for testing}`
        if (number === currentHenrysAge()) return `HENRY'S AGE {${number}}`
        return number
    }

    const handleHeroClick = useCallback((hero: string) => {
        setGameData({ hero: hero })
    }, [setGameData])

    const handleObstaclesNumberClick = useCallback((number: number) => {
        setGameData({ numberOfObstacles: number })
    }, [setGameData])

    return (
        <div className='start-screen-container'>
            <h2>{title}</h2>
            <form className='form-wrapper' onSubmit={submitForm}>
                {/* CHOOSE A HERO */}
                <fieldset className='form-section hero'>
                    <legend>CHOOSE YOUR HERO</legend>

                    {heroes.map((hero) => (
                        <div 
                            key={hero.name} 
                            className={`fieldset-option ${gameData.hero === hero.name && 'imitate-hover'}`}
                            onClick={() => handleHeroClick(hero.name)}
                        >
                            <img src={hero.imageSrc} alt={hero.imageTitle} />
                            <input
                                type='radio' 
                                id={hero.name} 
                                name='chosen-hero'
                                checked={gameData.hero === hero.name}
                                onChange={() => handleHeroClick(hero.name)} />
                            <label htmlFor={hero.name}>{hero.name}</label>
                        </div>
                    ))}
                </fieldset>

                {/* START A GAME */}
                <div className='form-section submit'>
                    <input id='submit' type='submit' value='&#x27A4;' title='PLAY GAME!' />
                    <label htmlFor='submit'>PLAY</label>
                </div>

                {/* CHOOSE NUMBER OF OBSTACLES */}
                <fieldset className='form-section obstacles'>
                    <legend>CHOOSE NUMBER OF OBSTACLES</legend>

                    {/* TODO: BUG! When 1 is chosen, it rewrites any other value chosen after it. */}
                    {possibleObstacleNumbers.map((number) => (
                        <div 
                            key={number.value} 
                            className={`fieldset-option ${gameData.numberOfObstacles === number.value && 'imitate-hover'}`}
                            onClick={() => handleObstaclesNumberClick(number.value)}
                        >
                            <input
                                type='radio' 
                                id={number.title} 
                                name='number-of-obstacles'
                                checked={gameData.numberOfObstacles === number.value}
                                onChange={() => handleObstaclesNumberClick(number.value)}
                            />
                            <label htmlFor={number.title}>
                                {chooseDisplayedTitle(number.value)}
                            </label>
                        </div>
                    ))}

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