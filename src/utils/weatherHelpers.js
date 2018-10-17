export const formatTemp = (temp, settings) => {
    return `${Math.round(temp)}°${settings.units === 'metric' ? 'C' : 'F'}`
}

export const formatWindSpeed = (mps, settings) => {
    const speed = round(mps * (settings.units === 'metric' ? 3.6 : 2.236936), 1)
    const unit = settings.units === 'metric' ? 'km/h' : 'mph'

    return `${speed} ${unit}`
}

export const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}
