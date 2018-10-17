import React from 'react'
import { NavLink } from 'react-router-dom'
import { formatTemp } from '../../utils/weatherHelpers'

class LocationListItem extends React.Component {
    toggleFavorite = event => {
        event.preventDefault()

        this.props.toggleFavorite(this.props.index)
    }

    render() {
        const { index, location, favorites } = this.props
        return (
            <li>
                <NavLink
                    to={`/location/${index}`}
                    className="locationlist__link"
                    title={`${location.name}, ${location.sys.country}`}
                >
                    <h3 className="locationlist__link-heading">
                        {location.name}, {location.sys.country}
                    </h3>
                    <img
                        src={`http://openweathermap.org/img/w/${
                            location.weather[0].icon
                        }.png`}
                        className="locationlist__link-icon"
                        alt={`icon ${location.weather[0].description}`}
                        width="50"
                        height="50"
                    />
                    <div>
                        <span>{formatTemp(location.main.temp)}</span>{' '}
                        <span>{location.wind.speed} m/sec</span>
                    </div>
                    <button
                        className="locationlist__link-favorite"
                        aria-pressed={favorites.includes(index)}
                        onClick={this.toggleFavorite}
                    >
                        Toggle favorite
                    </button>
                </NavLink>
            </li>
        )
    }
}

export default LocationListItem
