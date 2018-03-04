import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/container';

const Image = styled.img`
    border-radius: 100px;
  
    position: absolute;
    right: 5em;`;

//const homeSt = styled.Home

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
        <Container>
            <h1>HI React;)</h1>
            <p>Dfdewbfwneijlfhir uhefwiuefhiwuefh iuw fhuwi efhiwue f</p>
            <Image src={require('../assets/me.png')} alt="myself"/>
        </Container>
        )
    }
}
