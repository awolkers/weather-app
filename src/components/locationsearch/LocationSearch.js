import React from 'react'

class LocationSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: 'Hoorn'
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.query.trim() !== '') {
            this.props.searchLocation(this.state.query)
        }
    }

    handleChange = event => {
        const query = event.currentTarget.value
        this.setState({ query })
    }

    handleReset = event => {
        event.preventDefault()
        this.setState({ query: '' })
        this.props.clearSearchResult()
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder="Enter a city, country or region"
                />
                <button type="submit">Search</button>
                <button onClick={this.handleReset}>Clear</button>
            </form>
        )
    }
}

export default LocationSearch
