import { FC, useCallback, useState } from 'react'

import { GameData } from '../..'
import { getAge, hisBirthday } from '../../../../services/birthday'
import { heroes, possibleObstacleNumbers } from '../../data'
import Button, { buttonIcons } from '../../../../components/Button'
import { CustomNumberContainer, StyledFieldset, StyledForm, StyledStartScreenContainer, StyledSubmit } from './styled'

type Props = {
    startGame: () => void,
    gameData: GameData,
    onGameDataChange: (newGameData: Partial<GameData>) => void
}

const title = '{ RUN & JUMP }'

const currentHenrysAge = () => getAge(hisBirthday)

const StartScreen: FC<Props> = ({ startGame, gameData, onGameDataChange }) => {
    const [customNumber, setCustomNumber] = useState<number>(0)

    const submitForm = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        startGame()
    }, [startGame])

    const chooseDisplayedTitle = (number: number): string => {
        if (number === 1) return `${number} {for testing}`
        if (number === currentHenrysAge()) return `HENRY'S AGE {${number}}`
        return number.toString()
    }

    const handleHeroClick = useCallback((hero: string) => {
        onGameDataChange({ hero })
    }, [onGameDataChange])

    const handleObstaclesNumberClick = useCallback((numberOfObstacles: number) => {
        onGameDataChange({ numberOfObstacles })
    }, [onGameDataChange])

    return (
        <StyledStartScreenContainer>
            <h2>{title}</h2>
            <StyledForm onSubmit={submitForm}>
                {/* CHOOSE A HERO */}
                <StyledFieldset className='hero'>
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
                </StyledFieldset>

                {/* START A GAME */}
                <StyledSubmit>
                    <Button 
                        buttonId='submit' 
                        buttonIcon={buttonIcons.play} 
                        buttonTitle='PLAY GAME!'
                        buttonSize={'big'} 
                        buttonShape={'round'} 
                        colorscheme='default' />
                    <label htmlFor='submit'>PLAY</label>
                </StyledSubmit>

                {/* CHOOSE NUMBER OF OBSTACLES */}
                <StyledFieldset className='obstacles'>
                    <legend>CHOOSE NUMBER OF OBSTACLES</legend>

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

                    {/* CUSTOM NUMBER */}
                    <CustomNumberContainer
                        className={`fieldset-option ${gameData.numberOfObstacles === customNumber && 'imitate-hover'}`}
                        onClick={() => customNumber > 0 && handleObstaclesNumberClick(customNumber)}
                    >
                        <label htmlFor='custom-number'>CUSTOM<br/>NUMBER</label>
                        <input
                            type='number' 
                            min='0'
                            step='1'
                            id='custom-number'
                            name='number-of-obstacles'
                            placeholder={customNumber.toString()}
                            checked={gameData.numberOfObstacles === customNumber}
                            onChange={(e) => {
                                const newCustomNumber = Number(e.target.value)

                                setCustomNumber(newCustomNumber)
                                newCustomNumber > 0 && handleObstaclesNumberClick(newCustomNumber)
                            }}
                        />
                    </CustomNumberContainer>
                </StyledFieldset>
            </StyledForm>
        </StyledStartScreenContainer>
    )
}

export default StartScreen