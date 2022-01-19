import { FC } from 'react'
import Button, { buttonIcons } from '../../../../components/Button'
import { StyledButtonContainer, StyledGameStateContainer } from './styled'

const gameOverTitle = "{ GAME OVER }"
const gameWonTitle = "{ CONGRATULATIONS! }"

type Props = {
    onGameReset: () => void,
    returnToMenu: () => void,
    gameWon: boolean,
    gameScore?: number
}

const GameState: FC<Props> = ({ onGameReset, returnToMenu, gameWon, gameScore }) => {
    const gameScoreText = gameScore === 1 ? 'SUCCESSFUL JUMP' : 'SUCCESSFUL JUMPS'

    return (
        <StyledGameStateContainer className={gameWon ? 'game-won' : 'game-lost'}>
            <h2>{gameWon ? gameWonTitle : gameOverTitle}</h2>
            {!isNaN(Number(gameScore)) && <h3>{gameScore} {gameScoreText}</h3>}
            <StyledButtonContainer>
                <Button
                    onClick={() => onGameReset()}
                    buttonTitle='REPLAY GAME'
                    buttonSize={'medium'}
                    buttonShape={'round'}
                    buttonIcon={buttonIcons.replay}
                    colorscheme={gameWon ? 'won' : 'lost'} />
                <Button
                    onClick={() => returnToMenu()}
                    buttonTitle='BACK TO MENU'
                    buttonSize={'medium'}
                    buttonShape={'round'}
                    buttonIcon={buttonIcons.menu}
                    colorscheme={gameWon ? 'won' : 'lost'} />
            </StyledButtonContainer>
        </StyledGameStateContainer>
    )
}

export default GameState