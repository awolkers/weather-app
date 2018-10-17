import React from 'react'

import LocationSearch from '../locationsearch/LocationSearch'
import LocationList from '../locationlist/LocationList'

class Aside extends React.Component {
    renderSearchResult() {
        const {
            locations,
            searchResult,
            favorites,
            toggleFavorite
        } = this.props

        if (searchResult) {
            return (
                <LocationList
                    locations={locations}
                    list={searchResult}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    title="Search result"
                />
            )
        }
    }
    render() {
        const {
            searchLocation,
            clearSearchResult,
            locations,
            toggleFavorite,
            favorites
        } = this.props

        return (
            <aside className="aside">
                <LocationSearch
                    searchLocation={searchLocation}
                    clearSearchResult={clearSearchResult}
                />
                {this.renderSearchResult()}

                <LocationList
                    locations={locations}
                    list={favorites}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    title="Favorites"
                />
            </aside>
        )
    }
}

export default Aside
