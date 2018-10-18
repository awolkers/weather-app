import { round } from './mathHelpers'

export const formatTemp = (kelvin, settings) => {
    let temp, unit

    switch (settings.temp) {
        case 'celsius':
            temp = kelvin - 273.15
            unit = `C`
            break
        case 'fahrenheit':
            temp = ((kelvin - 273.15) * 9) / 5 + 32
            unit = `F`
            break
        case 'kelvin':
        default:
            temp = kelvin
            unit = `K`
            break
    }

    return `${round(temp, 0)}°${unit}`
}

export const formatWindSpeed = (mps, settings) => {
    const hour = settings.lang === 'nl' ? 'u' : 'h'
    let speed,
        unit = ''

    switch (settings.wind) {
        case 'mph':
            speed = mps * 2.236936
            unit = `mp${hour}`
            break
        case 'knots':
            speed = mps * 1.943844
            unit = 'kn'
            break
        case 'beaufort':
            let kmh = mps * 3.6
            speed = [
                1,
                6,
                11,
                19,
                30,
                39,
                50,
                61,
                74,
                87,
                102,
                117,
                177,
                249,
                332,
                418,
                512
            ].findIndex(val => val > kmh)
            break
        case 'kmh':
        default:
            speed = mps * 3.6
            unit = `km/${hour}`
            break
    }

    return `${round(speed, 1)} ${unit}`
}

export const windDegreesToCompass = degrees => {
    const val = Math.floor(degrees / 22.5 + 0.5)
    var directions = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW'
    ]
    return directions[val % 16]
}
