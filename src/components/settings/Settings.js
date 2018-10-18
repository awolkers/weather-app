import React, { Fragment } from 'react'

class Settings extends React.Component {
    handleChange = e => {
        const updatedSetting = {
            [e.currentTarget.name]: e.currentTarget.value
        }

        this.props.updateSettings(updatedSetting)
    }

    render() {
        const { settings } = this.props
        return (
            <Fragment>
                <h2>Settings</h2>
                <div>
                    <label>
                        Temperature
                        <select
                            name="temp"
                            onChange={this.handleChange}
                            value={settings.temp}
                        >
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Wind speed
                        <select
                            name="wind"
                            onChange={this.handleChange}
                            value={settings.wind}
                        >
                            <option value="kmh">Kilometers</option>
                            <option value="mph">Miles</option>
                            <option value="beaufort">Beaufort</option>
                            <option value="knots">Knots</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Language
                        <select
                            name="lang"
                            onChange={this.handleChange}
                            value={settings.lang}
                        >
                            <option value="nl">Nederlands</option>
                            <option value="en">English</option>
                        </select>
                    </label>
                </div>
            </Fragment>
        )
    }
}

export default Settings
