import React from "react";

import LocationSearch from '../locationsearch/LocationSearch'
import LocationList from '../locationlist/LocationList'

class Aside extends React.Component {
    
    render() {
        return (
            <aside className="aside">
                <LocationSearch
                    searchLocation={this.props.searchLocation}
                    clearSearchResult={this.props.clearSearchResult}
                />
                <LocationList
                    locations={this.props.searchResult}
                    toggleLocation={this.props.toggleLocation}
                    title="Search result"
                />
                <LocationList
                    locations={this.props.locations}
                    title="Favorites"
                />

            </aside>
        )
    }
}

export default Aside;
