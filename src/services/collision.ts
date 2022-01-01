export const areBoundariesInCollision = (firstBoundaries: DOMRect, secondBoundaries: DOMRect, errorMargin = 0): boolean => !(
    ((firstBoundaries.top + firstBoundaries.height - errorMargin) < secondBoundaries.top) ||
    (firstBoundaries.top > (secondBoundaries.top + secondBoundaries.height - errorMargin)) ||
    ((firstBoundaries.left + firstBoundaries.width - errorMargin) < secondBoundaries.left) ||
    (firstBoundaries.left > (secondBoundaries.left + secondBoundaries.width - errorMargin))
)