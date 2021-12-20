import { FC} from 'react'
import { getAge, hisBirthday } from '../../services/birthday'
import './index.css'

const Header: FC = () => (
    <header className="main-header">
        <h1>Birthday Boi</h1>
        <h2>{getAge(hisBirthday)}<sup>th</sup> edition</h2>
    </header>
)

export default Header