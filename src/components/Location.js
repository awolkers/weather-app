import React from "react";
import {NavLink} from "react-router-dom";
import {formatTemp} from "../utils/weatherHelpers";

class Location extends React.Component {

    toggleLocation = event => {
        event.preventDefault()

        this.props.toggleLocation(this.props.index)
    }
    
    render() {
        const { index, location } = this.props
        return (
            <li>
                <NavLink to={`/location/${index}`}>
                    {location.name}, {location.sys.country}
                <img src={`http://openweathermap.org/img/w/${location.weather[0].icon}.png`} alt={`icon ${location.weather[0].description}`}/>
                    <span>{formatTemp(location.main.temp)}</span> <span>{location.wind.speed} m/sec</span>
                    <button onClick={this.toggleLocation}>Toggle favorite</button>
                </NavLink>
            </li>
        )
    }
}

export default Location;
