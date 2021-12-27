import { FC, useEffect, useRef } from 'react'
import './index.css'

const movingTime = 3000 // milliseconds
const animationType = 'linear'

const Obstacles: FC<{ age: number }> = ({ age }) => {
    const obstacleRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const obstacle = obstacleRef.current
        if (!obstacle) return

        obstacle.style.transition = `right ${movingTime}ms ${animationType}`
        obstacle.style.right = '100%'
    }, [obstacleRef])

    const years = Array(age).fill(null).map((_, index) => index + 1)

    return (
        <>
            {years.map((year) => 
                <div key={year} ref={obstacleRef} className='obstacle'>{year}</div>
            )}
        </>
    )
}

export default Obstacles