import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { searchLocations } from '../../utils/apiHelpers'


import Header from '../header/Header'
import Aside from '../aside/Aside'
import Footer from '../footer/Footer'
import Dashboard from '../dashboard/Dashboard'
import Settings from '../settings/Settings'
import Location from '../location/Location'

class App extends React.Component {
    state = {
        locations: {},
        searchResult: {},
        settings: {
            lang: 'nl',
            units: 'metric'
        }
    }

    componentWillMount() {
        const locations = JSON.parse(localStorage.getItem('locations'));

        if (locations) {
            this.setState({ locations })
        }
    }

    componentDidMount() {
        console.log('TODO: update locations via api')
    }

    toggleLocation = key => {
        const locations = { ...this.state.locations }

        if (locations[key]) {
            delete locations[key];
        } else {
            locations[key] = this.state.searchResult[key]
        }

        localStorage.setItem('locations', JSON.stringify(locations));

        this.setState({ locations })
    }

    searchLocation = async query => {
        const params = {
            q: query,
            lang: this.state.settings.lang,
            units: this.state.settings.units
        }
        const result = await searchLocations(params)

        const searchResult = result.list.reduce((obj, item) => {
            obj[item.id] = item
            return obj
        }, {})

        this.setState({ searchResult })
    }

    clearSearchResult = () => {
        console.log('hh',this.state);
        this.setState({ searchResult: {} })
        console.log(this.state);
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main className="main">
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Dashboard/>
                        )} />
                        <Route exact path="/location/:locationId" render={({ match }) => (
                            <Location
                                locationId={match.params.locationId}
                                locations={this.state.locations}
                            />
                        )} />
                        <Route exact path="/settings" render={() => (
                            <Settings/>
                        )} />
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Aside
                    locations={this.state.locations}
                    searchResult={this.state.searchResult}
                    searchLocation={this.searchLocation}
                    clearSearchResult={this.clearSearchResult}
                    toggleLocation={this.toggleLocation}
                />
                <Footer />
            </div>
        )
    }
}

export default App
