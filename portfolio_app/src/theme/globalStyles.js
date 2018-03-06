import {injectGlobal} from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,600,700,800');
    body {
        font-family: 'Raleway', sans-serif;
        background-image: url('${require('../assets/bckg-photo.jpg')}');
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: #cccccc;
        color: white;
    }
    p::first-letter {
        color: #ff0000;
        font-size: xx-large;
    }
    `;
