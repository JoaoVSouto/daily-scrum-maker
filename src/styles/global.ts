import { createGlobalStyle } from 'styled-components';

import getRandomNumber from '../utils/random';

import stars from '../assets/stars.svg';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
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

  html {
    background: url(${stars}) repeat-x;
    background-color: ${props => props.theme.primary};
    transition: background-color 0.3s, ${props =>
      props.theme.type === 'light'
        ? 'background-position-y 0s'
        : 'background-position-y 0.3s ease-out 0.1s'};
    background-position-y: ${props =>
      props.theme.type === 'dark' ? '0' : '-100vh'};

    &.no-transition {
      transition: all 0s;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;

    background-image: url(${props => props.theme.clouds});
    background-size: 290%;
    animation: cloudsSlide 2880s linear forwards infinite;
  }

  #root {
    background-image: url(${props => props.theme.cloud});
    background-repeat: no-repeat;
    background-position: left calc(100vh - 350px);
    background-size: 900px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      background-image: none;
    }

    @media (max-width: 576px) {
      margin: 48px 0;
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
