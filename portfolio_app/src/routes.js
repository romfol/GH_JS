import  React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './containers/Home';

const history = createBrowserHistory();

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>

                    </ul>
                    <hr/>
                    <Route path="/" component={Home}/>

                    </div>
            </BrowserRouter>
        )
    }
}

export default Navigation;

