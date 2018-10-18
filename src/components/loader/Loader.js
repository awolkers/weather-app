import React from 'react'

class Loader extends React.Component {
    render() {
        // if (this.props.isLoading) {
        return <div className="loader" aria-busy={this.props.isLoading} />
        // }
        // return <Fragment />
    }
}

export default Loader
