import { FC } from 'react'
import { StyledButton } from './styled'

type Props = {
    buttonSize: 'small' | 'medium' | 'big',
    buttonShape: 'square' | 'round',
    buttonId?: string,
    buttonIcon?: string,
    buttonTitle?: string,
    colorscheme?: 'default' | 'won' | 'lost',
    onClick?: () => void,
}

type ButtonIcons = {
    [index: string]: string,
}

export const buttonIcons: ButtonIcons = {
    approve: '\u2713',
    menu: '\u2261',
    play: '\u27A4',
    replay: '\u21BB',
}

const Button: FC<Props> = ({ buttonId, buttonSize, buttonShape, buttonIcon, buttonTitle, colorscheme, onClick }) => (
    <StyledButton 
        id={buttonId}
        className={`button ${buttonSize} ${buttonShape} ${colorscheme}`} 
        onClick={onClick} 
        title={buttonTitle}
    >
        {buttonIcon ?? buttonIcon}
    </StyledButton>
)

export default Button