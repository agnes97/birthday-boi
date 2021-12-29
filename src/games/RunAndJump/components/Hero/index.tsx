import { FC, RefObject, useState } from 'react'
import './index.css'

type Props = {
    heroRef: RefObject<HTMLDivElement>  
}

const Hero: FC<Props> = ({ heroRef }) => {
    const [hero, setHero] = useState('henry')

    // TODO: Add "change hero" button to starting screen!
    const handleClick = () => setHero(hero === 'agnes' ? 'henry' : 'agnes')

    return <div ref={heroRef} className={`hero ${hero}`} onClick={handleClick} />
}

export default Hero