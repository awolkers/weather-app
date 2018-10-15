import React, { Fragment } from 'react'
import LocationListItem from "../locationlistitem/LocationListItem";

class LocationList extends React.Component {

    render() {
        const { title, locations, toggleLocation } = this.props

        if (Object.keys(locations).length) {
            return (
                <Fragment>
                    <h2>{title}</h2>
                    <ul className="locations-list">{Object.keys(locations).map(key =>
                        <LocationListItem
                            key={key}
                            index={key}
                            location={locations[key]}
                            toggleLocation={toggleLocation}
                        />
                    )}</ul>
                </Fragment>
            )
        } else {
            return <Fragment />
        }
    }
}

export default LocationList
