import React, { Fragment } from 'react'
import { formatTemp, formatWindSpeed } from '../../utils/weatherHelpers'
import Compass from '../compass/Compass'

class Location extends React.Component {
    render() {
        // console.log('render')
        const { location, settings, getLocationForecast } = this.props
        console.log(location)

        if (location) {
            return (
                <Fragment>
                    <h2>
                        <a
                            href={`https://www.google.com/maps/@${
                                location.coord.lat
                            },${location.coord.lon},13z`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {location.name}, {location.sys.country}
                        </a>
                    </h2>

                    <img
                        src={`http://openweathermap.org/img/w/${
                            location.weather[0].icon
                        }.png`}
                        className="locationlist__link-icon"
                        alt={`icon ${location.weather[0].description}`}
                        width="50"
                        height="50"
                    />
                    {location.weather[0].description}
                    <ul>
                        <li>{formatTemp(location.main.temp, settings)}</li>
                        <li>
                            {formatWindSpeed(location.wind.speed, settings)}{' '}
                            <Compass degrees={location.wind.deg} />
                        </li>
                    </ul>
                </Fragment>
            )
        } else {
            return <Fragment />
        }
    }
}

export default Location
