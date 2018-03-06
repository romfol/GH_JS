import  React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './containers/Home/Home';
import Resume from './containers/Resume/Resume';
import Skills from './containers/Skills/Skills';
import Contacts from './containers/Contacts/Contacts';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
            </Router>
        )
    }
}

