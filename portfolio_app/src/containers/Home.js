import React, {Component} from 'react'

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
        <div>
            <h1>HI React;)</h1>
            <img src={require('../assets/me.png')} alt="myself"/>
        </div>
        )
    }
}
