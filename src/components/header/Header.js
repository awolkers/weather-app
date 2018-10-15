import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>My first weather app with React</h1>
                <ul className="header__nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
