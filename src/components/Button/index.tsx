import { FC } from 'react'
import './index.css'

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
    menu: '\u2261',
    play: '\u27A4',
    replay: '\u21BB',
}

const Button: FC<Props> = ({ buttonId, buttonSize, buttonShape, buttonIcon, buttonTitle, colorscheme, onClick }) => (
    <button 
        id={buttonId}
        className={`button ${buttonSize} ${buttonShape} ${colorscheme}`} 
        onClick={onClick} 
        title={buttonTitle}
    >
        {buttonIcon ?? buttonIcon}
    </button>
)

export default Button