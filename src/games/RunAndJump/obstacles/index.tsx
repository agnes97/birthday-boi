import {createElement, FC} from 'react'
import './index.css'

const Obstacles: FC = () => {
    const obstacle = createElement('div', {className: 'obstacle'}, '',)

    return obstacle
}

export default Obstacles