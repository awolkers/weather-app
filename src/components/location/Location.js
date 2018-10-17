import React, { Fragment } from 'react'

class Location extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Location Dashboard</h2>
                <p>{this.props.locationId}</p>
            </Fragment>
        )
    }
}

export default Location
