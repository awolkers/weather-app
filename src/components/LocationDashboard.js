import React from "react";

class LocationDashboard extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Location Dashboard</h2>
                <p>{this.props.locationId}</p>

            </div>
        )
    }
}

export default LocationDashboard;
