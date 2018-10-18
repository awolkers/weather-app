import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { searchLocations, getLocations } from '../../utils/apiHelpers'

import Header from '../header/Header'
import Aside from '../aside/Aside'
import Footer from '../footer/Footer'
import Dashboard from '../dashboard/Dashboard'
import Settings from '../settings/Settings'
import Location from '../location/Location'
import Loader from '../loader/Loader'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            locations: {},
            searchResult: null,
            settings: {
                lang: 'nl',
                temp: 'celsius',
                wind: 'kmh',
                ...JSON.parse(localStorage.getItem('settings'))
            },
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount = async () => {
        const { favorites, locations } = this.state

        if (favorites.length) {
            const params = {
                id: favorites.join(','),
                lang: this.state.settings.lang
            }

            this.setState({ isLoading: true })
            const result = await getLocations(params)

            result.list.forEach(location => {
                locations[location.id] = location
            })

            this.setState({ locations, isLoading: false })
        }
    }

    updateSettings = updatedSettings => {
        const settings = {
            ...this.state.settings,
            ...updatedSettings
        }

        localStorage.setItem('settings', JSON.stringify(settings))
        this.setState({ settings })
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
        this.setState({ isLoading: true })

        const params = {
            q: query,
            lang: this.state.settings.lang
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
            searchResult,
            isLoading: false
        })
    }

    clearSearchResult = () => {
        this.setState({ searchResult: [] })
    }

    render() {
        return (
            <div className="app">
                <Loader isLoading={this.state.isLoading} />
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
                                    settings={this.state.settings}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/settings"
                            render={() => (
                                <Settings
                                    settings={this.state.settings}
                                    updateSettings={this.updateSettings}
                                />
                            )}
                        />
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Aside
                    settings={this.state.settings}
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
