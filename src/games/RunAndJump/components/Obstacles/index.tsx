import { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { StyledObstacle } from './styled'

const obstaclesMovingTime = 3000 // milliseconds
const obstaclesAnimationType = 'linear'

const minIntevalBetweenObstacles = 750  // milliseconds
const maxIntevalBetweenObstacles = 1500 // milliseconds

const timeToNextObstacle = () =>
  Math.floor(Math.random() * (maxIntevalBetweenObstacles - minIntevalBetweenObstacles + 1)) + minIntevalBetweenObstacles

type Props = {
    numberOfObstacles: number,
    paused: boolean,
    onLastObstacle: () => void,
    isObstacleInCollision?: (obstacleBoundaries: DOMRect) => boolean,
    onObstacleCollision?: (collisionObstacle: number) => void,
    startDelay?: number, // milliseconds
}

const Obstacles: FC<Props> = ({ numberOfObstacles, paused, onLastObstacle, isObstacleInCollision, onObstacleCollision, startDelay }) => {
    const obstacleRefs = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => { obstacleRefs.current = [] }, [numberOfObstacles])

    const nextObstacleTimeoutRef = useRef<number>()
    const animationRequestRef = useRef<number>()

    const resetObstacles = useCallback(() => {        
        clearTimeout(nextObstacleTimeoutRef.current)

        const animationRequest = animationRequestRef.current
        if (animationRequest) cancelAnimationFrame(animationRequest)

        obstacleRefs.current.forEach((obstacle) => {
            if (obstacle === null) return

            obstacle.style.transition = ''
            obstacle.style.right = '-3rem'
        })
    }, [])

    useEffect(() => {
        if (paused) resetObstacles()
    }, [paused, resetObstacles, numberOfObstacles])

    const moveNextObstacle = useCallback((obstaclesIterator: IterableIterator<HTMLDivElement | null>) => {
        const nextObstacle = obstaclesIterator.next()
        const obstacle = nextObstacle.value

        // last obstacle
        if (nextObstacle.done || obstacle === null) {
            return nextObstacleTimeoutRef.current = window.setTimeout(
                () => onLastObstacle(), obstaclesMovingTime
            )
        }

        obstacle.style.transition = `right ${obstaclesMovingTime}ms ${obstaclesAnimationType}`
        obstacle.style.right = '110%'

        nextObstacleTimeoutRef.current = window.setTimeout(() => moveNextObstacle(obstaclesIterator), timeToNextObstacle())
    }, [onLastObstacle])

    useEffect(() => {
        if (!paused) {
            const startObstacleMovement = () => moveNextObstacle(obstacleRefs.current.values())
            startDelay ? setTimeout(startObstacleMovement, startDelay) : startObstacleMovement()
        }
    }, [paused, moveNextObstacle, startDelay])

    const detectCollision = useCallback(() => {
        if (!isObstacleInCollision) return

        const obstacles = obstacleRefs.current

        const collisionObstacleIndex = obstacles.findIndex(obstacle => {
            if (obstacle === null) return false

            const obstacleBoundaries = obstacle.getBoundingClientRect()
            return isObstacleInCollision(obstacleBoundaries)
        })

        const isCollision = collisionObstacleIndex !== -1

        if (onObstacleCollision && isCollision) return onObstacleCollision(collisionObstacleIndex)

        animationRequestRef.current = requestAnimationFrame(detectCollision)
    }, [isObstacleInCollision, onObstacleCollision])

    useEffect(() => {
        if (!paused) detectCollision()
    }, [paused, detectCollision])

    const obstacles = useMemo(
        () => Array(numberOfObstacles).fill(null).map((_, index) => index + 1),
        [numberOfObstacles]
    )

    return (
        <>
            {obstacles.map((obstacle, obstacleIndex) => 
                <StyledObstacle
                    key={obstacle}
                    ref={(obstacleRef) => obstacleRefs.current[obstacleIndex] = obstacleRef}
                >
                    <div className='obstacle-flame' />
                    <div className='obstacle-number'>{obstacle}</div>
                </StyledObstacle>
            )}
        </>
    )
}

export default Obstacles