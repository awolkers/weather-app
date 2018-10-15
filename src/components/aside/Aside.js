import React from "react";

import LocationSearch from '../LocationSearch'
import Locations from '../Locations'

class Aside extends React.Component {
    
    render() {
        return (
            <aside className="aside">
                <LocationSearch
                    searchLocation={this.props.searchLocation}
                    clearSearchResult={this.props.clearSearchResult}
                />
                <Locations
                    locations={this.props.searchResult}
                    toggleLocation={this.props.toggleLocation}
                    title="Search result"
                />
                <Locations
                    locations={this.props.locations}
                    title="Favorites"
                />

            </aside>
        )
    }
}

export default Aside;
