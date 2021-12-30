import { Dispatch, FC, RefObject, useCallback, useEffect, useRef } from 'react'
import './index.css'

const movingTime = 3000 // milliseconds
const animationType = 'linear'

const minIntevalBetweenObstacles = 750  // milliseconds
const maxIntevalBetweenObstacles = 1500 // milliseconds

const timeToNextObstacle = () =>
  Math.floor(Math.random() * (maxIntevalBetweenObstacles - minIntevalBetweenObstacles + 1)) + minIntevalBetweenObstacles

type Props = {
    age: number,
    setGameOver: Dispatch<boolean>
    heroRef: RefObject<HTMLDivElement>
}

const areBoundariesInCollision = (firstBoundaries: DOMRect, secondBoundaries: DOMRect, errorMargin = 0): boolean => !(
    ((firstBoundaries.top + firstBoundaries.height - errorMargin) < secondBoundaries.top) ||
    (firstBoundaries.top > (secondBoundaries.top + secondBoundaries.height - errorMargin)) ||
    ((firstBoundaries.left + firstBoundaries.width - errorMargin) < secondBoundaries.left) ||
    (firstBoundaries.left > (secondBoundaries.left + secondBoundaries.width - errorMargin))
)

const Obstacles: FC<Props> = ({ age, setGameOver, heroRef }) => {
    const obstacleRefs = useRef<Array<HTMLDivElement | null>>([])

    const moveNextObstacle = useCallback((obstaclesIterator: IterableIterator<HTMLDivElement | null>) => {
        const nextObstacle = obstaclesIterator.next()
        const obstacle = nextObstacle.value

        // last obstacle
        if (nextObstacle.done || obstacle === null) {
            setTimeout(() => setGameOver(true), movingTime)
            return
        }

        obstacle.style.transition = `right ${movingTime}ms ${animationType}`
        obstacle.style.right = '110%'

        setTimeout(() => moveNextObstacle(obstaclesIterator), timeToNextObstacle())
    }, [setGameOver])

    useEffect(() => moveNextObstacle(obstacleRefs.current.values()), [moveNextObstacle])

    const detectCollision = useCallback(() => {
        const heroBoundaries = heroRef.current?.getBoundingClientRect()
        if (!heroBoundaries) return

        const obstacles = obstacleRefs.current

        const isCollision = obstacles.some(obstacle => {
            if (obstacle === null) return false

            const obstacleBoundaries = obstacle.getBoundingClientRect()
            return areBoundariesInCollision(heroBoundaries, obstacleBoundaries, 5)
        })

        if (isCollision) return setGameOver(true)

        requestAnimationFrame(detectCollision)
    }, [heroRef, setGameOver])

    useEffect(() => detectCollision(), [detectCollision])

    const years = Array(age).fill(null).map((_, index) => index + 1)

    return (
        <>
            {years.map((year) => 
                <div 
                    className='obstacle'
                    key={year}
                    ref={(element) => obstacleRefs.current.push(element)}
                >
                    <div className='obstacle-flame' />
                    <div className='obstacle-number'>{year}</div>
                </div>
            )}
        </>
    )
}

export default Obstacles