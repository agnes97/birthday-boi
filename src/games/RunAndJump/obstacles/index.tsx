import { FC, useCallback, useEffect, useRef } from 'react'
import './index.css'

const movingTime = 3000 // milliseconds
const animationType = 'linear'

const minIntevalBetweenObstacles = 750  // milliseconds
const maxIntevalBetweenObstacles = 1500 // milliseconds

const timeToNextObstacle = () =>
  Math.floor(Math.random() * (maxIntevalBetweenObstacles - minIntevalBetweenObstacles + 1)) + minIntevalBetweenObstacles

const Obstacles: FC<{ age: number }> = ({ age }) => {
    const obstacleRefs = useRef<Array<HTMLDivElement | null>>([])

    const moveNextObstacle = useCallback((obstaclesIterator: IterableIterator<HTMLDivElement | null>) => {
        const nextObstacle = obstaclesIterator.next()
        if (nextObstacle.done) return // last obstacle

        const obstacle = nextObstacle.value

        if (obstacle) {
            obstacle.style.transition = `right ${movingTime}ms ${animationType}`
            obstacle.style.right = '100%'
        }

        setTimeout(() => moveNextObstacle(obstaclesIterator), timeToNextObstacle())
    }, [])

    useEffect(() => moveNextObstacle(obstacleRefs.current.values()), [moveNextObstacle])

    const years = Array(age).fill(null).map((_, index) => index + 1)

    return (
        <>
            {years.map((year) => 
                <div 
                    key={year}
                    ref={(element) => obstacleRefs.current.push(element)}
                    className='obstacle'>
                        {year}
                </div>
            )}
        </>
    )
}

export default Obstacles