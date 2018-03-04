import React, {Component} from 'react';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 100px;
  
    position: absolute;
    right: 5em;`;

//const homeSt = styled.Home

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
        <div>
            <h1>HI React;)</h1>
            <p>dfdewbfwneijlfhir uhefwiuefhiwuefh iuw fhuwi efhiwue f</p>
            <Image src={require('../assets/me.png')} alt="myself"/>
        </div>
        )
    }
}
