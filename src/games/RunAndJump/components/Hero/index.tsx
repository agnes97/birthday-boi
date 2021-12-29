import { FC, RefObject } from 'react'
import './index.css'

import heroHenry from '../../../../assets/henry.gif'
import heroAgnes from '../../../../assets/agnes.gif'

type Props = {
    heroRef: RefObject<HTMLDivElement>  
}

const Hero: FC<Props> = ({ heroRef }) => {
    // TODO: Add "change hero" button to starting screen!
    const handleClick = () => {
        const hero = heroRef.current

        if (!hero) return

        if (hero.className === `hero agnes`) {
            hero.style.backgroundImage = `url(${heroHenry})`
            hero.className = 'hero henry'
        } else {
            hero.style.backgroundImage = `url(${heroAgnes})`
            hero.className = 'hero agnes'
        }
    }

    return (
        <div ref={heroRef} className='hero henry' onClick={handleClick} />
    )
}

export default Hero