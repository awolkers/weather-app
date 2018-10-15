import React, { Fragment } from 'react'

class Settings extends React.Component {
    
    render() {
        return (
            <Fragment>
                <h2>Settings</h2>
                <ul>
                    <li>Language</li>
                    <li>Fahrenheid vs celsius</li>
                    <li>km/h vs mph</li>
                    <li>(Clear cache)</li>
                </ul>
            </Fragment>
        )
    }
}

export default Settings;
