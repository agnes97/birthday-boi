import { getAge, hisBirthday } from "../../services/birthday"
import Agnes from '../../assets/agnes.gif'
import Henry from '../../assets/henry.gif'

const currentHenrysAge = () => getAge(hisBirthday)

type Heroes = {
    name: string,
    imageSrc: any,
    imageTitle: string,
}[]

type PossibleObstacleNumbers = {
    value: number,
    title: string,
}[]

export const heroes: Heroes = [
    {
        name: 'agnes',
        imageSrc: Agnes,
        imageTitle: 'Agnes',
    },
    {
        name: 'henry',
        imageSrc: Henry,
        imageTitle: 'Henry',
    }
]

export const possibleObstacleNumbers: PossibleObstacleNumbers = [
    {
        value: 1,
        title: 'one',
    },
    {
        value: 10,
        title: 'ten',
    },
    {
        value: 100,
        title: 'hundredth',
    },
    {
        value: currentHenrysAge(),
        title: 'age',
    }
]