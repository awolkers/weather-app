import React from "react";

class Settings extends React.Component {
    
    render() {
        return (
            <main className="main">
                <h2>Settings</h2>
                <ul>
                    <li>Language</li>
                    <li>Fahrenheid vs celsius</li>
                    <li>km/h vs mph</li>
                    <li>(Clear cache)</li>
                </ul>
            </main>
        )
    }
}

export default Settings;
