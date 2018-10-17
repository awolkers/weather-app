import React, { Fragment } from 'react'
import LocationListItem from '../locationlist/LocationListItem'

class LocationList extends React.Component {
    render() {
        const {
            title,
            locations,
            list,
            favorites,
            toggleFavorite,
            settings
        } = this.props

        if (list.length) {
            return (
                <Fragment>
                    <h2>{title}</h2>
                    <ul className="locationlist">
                        {list.map(key => (
                            <LocationListItem
                                key={key}
                                index={key}
                                settings={settings}
                                location={locations[key]}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </ul>
                </Fragment>
            )
        } else {
            return <Fragment />
        }
    }
}

export default LocationList
