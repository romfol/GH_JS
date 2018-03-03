import  React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './containers/Home';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Contacts from './containers/Contacts';

const customHistory = createBrowserHistory();

export default class Navigation extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
            </Router>
        )
    }
}

