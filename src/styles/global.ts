import { createGlobalStyle } from 'styled-components';

import getRandomNumber from '../utils/random';

import cloud from '../assets/cloud.svg';
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
    background-image: url(${cloud});
    background-repeat: no-repeat;
    background-position: left calc(100vh - 350px);
    background-size: 900px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      background-image: none;
    }
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
