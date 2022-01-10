import { FC, RefObject, useCallback, useEffect, useState } from 'react'
import './index.css'

const jumpAnimationTime = 300 // milliseconds
const jumpAnimationType = 'ease'

const heroStartingPosition = 5 //rem
const baseLevel = 2 // rem
const jumpHeight = baseLevel + 8 // rem

type Props = {
    heroRef: RefObject<HTMLDivElement>,
    isPresent: boolean,
    arrivalDelay: number, // milliseconds
}

const Hero: FC<Props> = ({ heroRef, isPresent, arrivalDelay }) => {
    const [hero, setHero] = useState('henry')
    const [isJumping, setIsJumping] = useState<boolean>(false)

    const jump = useCallback(() => {
        const hero = heroRef.current

        if (!hero || isJumping) return

        // set animation
        hero.style.transition = `bottom ${jumpAnimationTime}ms ${jumpAnimationType}`

        // move up
        setIsJumping(true)
        hero.style.bottom = `${jumpHeight}rem`

        // move down
        setTimeout(() => hero.style.bottom = `${baseLevel}rem`, jumpAnimationTime)

        // wait for the move down animation
        setTimeout(() => setIsJumping(false), jumpAnimationTime * 2)
    }, [heroRef, isJumping, setIsJumping])

    const moveToStarterPosition = useCallback(() => {
        const hero = heroRef.current

        if (!hero || isJumping) return

        hero.style.transform = 'scaleX(1)'
        hero.style.transition = `left ${arrivalDelay}ms ease`
        hero.style.left = `${heroStartingPosition}rem`
    }, [heroRef, isJumping, arrivalDelay])
    
    const leave = useCallback(() => {
        const hero = heroRef.current

        if (!hero || isJumping) return
 
        hero.style.transform = 'scaleX(-1)'
        hero.style.left = `-${heroStartingPosition}rem`
    }, [heroRef, isJumping])

    const controlHero = useCallback((event) => {
        if (event.code === 'Space') jump()
    }, [jump])

    useEffect(() => {
        if (isPresent) moveToStarterPosition()
        if (!isPresent) leave()
        
        document.addEventListener('keydown', controlHero)
        return () => document.removeEventListener('keydown', controlHero)
    }, [controlHero, leave, isPresent, moveToStarterPosition])

    // TODO: Add "change hero" button to starting screen!
    const handleClick = () => setHero(hero === 'agnes' ? 'henry' : 'agnes')

    return <div ref={heroRef} className={`hero ${hero}`} onClick={handleClick} />
}

export default Hero