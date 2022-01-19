import { FC } from 'react'
import { getAge, hisBirthday } from '../../services/birthday'
import { StyledHeader } from './styled'

const Header: FC = () => (
    <StyledHeader>
        <h1>Birthday Boi</h1>
        <h2>{getAge(hisBirthday)}<sup>th</sup> edition</h2>
    </StyledHeader>
)

export default Header