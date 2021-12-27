import { FC, useEffect, useRef } from 'react'
import './index.css'

const movingTime = 3000 // milliseconds
const animationType = 'linear'

const Obstacles: FC = () => {
    const obstacleRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const obstacle = obstacleRef.current
        if (!obstacle) return

        obstacle.style.transition = `right ${movingTime}ms ${animationType}`
        obstacle.style.right = '100%'
    }, [obstacleRef])

    return <div ref={obstacleRef} className='obstacle'>1</div>
}

export default Obstacles