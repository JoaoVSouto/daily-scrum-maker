import { createGlobalStyle } from 'styled-components';

import getRandomNumber from '../utils/random';

import clouds from '../assets/clouds.svg';
import manyClouds from '../assets/many_clouds.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;

    background-color: ${props => props.theme.primary};
    background-image: url(${manyClouds});
    background-size: 290%;
    animation: cloudsSlide 2880s linear forwards infinite;
  }

  #root {
    background-image: url(${clouds});
    background-repeat: no-repeat;
    background-position: right 12vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Fira Sans', sans-serif;
  }

  @keyframes cloudsSlide {
    from {
      background-position-x: ${getRandomNumber({ min: -100, max: 100 })}%;
    }

    to {
      background-position-x: 3040%;
    }
  }
`;
