import {injectGlobal} from 'styled-components';
import Background from "../assets/bckg-photo.jpg"

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,600,700,800');
    body {
        font-family: 'Raleway', sans-serif;
        background-image: url(${Background});
        background-size: 100%;
        background-repeat: no-repeat;
     }
    `;

