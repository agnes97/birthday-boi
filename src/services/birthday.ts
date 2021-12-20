type Birthday = {
    day: number
    month: number
    year: number
}

export const hisBirthday: Birthday = {
    'day': 1,
    'month': 1,
    'year': 1993
}

const monthBeforeBirthday = ( month: Birthday["month"] ): number => month === 1 ? 12 : month - 1

export const getAge = ( birthday: Birthday ) => {
    const currentDay = new Date()
    const currentMonth = currentDay.getMonth() + 1
    const currentYear = currentDay.getFullYear()

    const age = currentYear - birthday.year

    // Return age + 1 if it's a month before birthday!
    return currentMonth === monthBeforeBirthday(birthday.month) ? age + 1 : age
}