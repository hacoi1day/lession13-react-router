import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import './App.css';

const MenuLink = ({lable, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active abc' : '';
            return (
                <li className={'nav-item ' + active}>
                    <Link className="nav-link" to={to}>
                        {lable}
                    </Link>
                </li>
            );
        }}/>
    );
}

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* Menu */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {/* <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/" activeClassName="active">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" activeClassName="active">Giới thiệu</NavLink>
                                </li> */}
                                <MenuLink lable="Trang chủ" to="/" activeOnlyWhenExact={true} />
                                <MenuLink lable="Liên hệ" to="/contact" activeOnlyWhenExact={false} />
                                <MenuLink lable="Giới thiệu" to="/about" activeOnlyWhenExact={false} />
                            </ul>
                        </div>
                    </nav>

                    {/* Content */}
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
