import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { searchLocations, getLocations } from '../../utils/apiHelpers'

import Header from '../header/Header'
import Aside from '../aside/Aside'
import Footer from '../footer/Footer'
import Dashboard from '../dashboard/Dashboard'
import Settings from '../settings/Settings'
import Location from '../location/Location'

class App extends React.Component {
    state = {
        locations: {},
        searchResult: null,
        settings: {
            lang: 'nl',
            units: 'metric'
        },
        favorites: []
    }

    componentWillMount = async () => {
        const favorites = JSON.parse(localStorage.getItem('favorites'))

        if (favorites) {
            const locations = { ...this.state.locations }
            const params = {
                id: favorites.join(','),
                lang: this.state.settings.lang,
                units: this.state.settings.units
            }

            const result = await getLocations(params)

            result.list.forEach(location => {
                locations[location.id] = location
            })

            this.setState({ favorites, locations })
        }
    }

    toggleFavorite = key => {
        const favorites = [...this.state.favorites]
        const index = favorites.indexOf(key)

        if (index === -1) {
            favorites.push(key)
        } else {
            favorites.splice(index, 1)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))

        this.setState({ favorites })
    }

    searchLocation = async query => {
        const params = {
            q: query,
            lang: this.state.settings.lang,
            units: this.state.settings.units
        }
        const result = await searchLocations(params)
        const locations = { ...this.state.locations }
        let searchResult = null

        if (result.cod === 200) {
            searchResult = [result.id]
            locations[result.id] = result
        }

        this.setState({
            locations,
            searchResult
        })
    }

    clearSearchResult = () => {
        this.setState({ searchResult: [] })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main className="main">
                    <Switch>
                        <Route exact path="/" render={() => <Dashboard />} />
                        <Route
                            exact
                            path="/location/:locationId"
                            render={({ match }) => (
                                <Location
                                    location={
                                        this.state.locations[
                                            match.params.locationId
                                        ]
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => <Settings />}
                        />
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Aside
                    locations={this.state.locations}
                    favorites={this.state.favorites}
                    searchResult={this.state.searchResult}
                    searchLocation={this.searchLocation}
                    clearSearchResult={this.clearSearchResult}
                    toggleFavorite={this.toggleFavorite}
                />
                <Footer />
            </div>
        )
    }
}

export default App
