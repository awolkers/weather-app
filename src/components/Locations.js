import React, { Fragment } from 'react'
import Location from "./Location";

class Locations extends React.Component {

    render() {
        const { title, locations, toggleLocation } = this.props

        if (Object.keys(locations).length) {
            return (
                <Fragment>
                    <h2>{title}</h2>
                    <ul className="searchresult">{Object.keys(locations).map(key =>
                        <Location
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

export default Locations
