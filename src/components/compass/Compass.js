import React from 'react'
import { windDegreesToCompass } from '../../utils/weatherHelpers'

const Compass = ({ degrees }) => {
    if (degrees) {
        const direction = windDegreesToCompass(degrees)
        const style = {
            transform: `rotate(${degrees - 90}deg)`
        }

        return (
            <div className="compass" style={style} aria-label={direction}>
                {direction} {degrees}
            </div>
        )
    }

    return <div className="compass compass--rotating" />
}

export default Compass
