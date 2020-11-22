import styled from 'styled-components';

export const Container = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  padding-right: 16px;
  margin-right: 16px;

  > h1 {
    color: #fff;
    font-size: 2.8rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    border-right: 0;
    padding-right: 0;
    margin-right: 0;

    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const ToggleThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const ToggleThemeCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  height: 0;
  transition: all 250ms ease-in;

  &:focus + label {
    box-shadow: 0 0 0 4px #fff;
  }

  &:checked + label {
    background-color: #9ee3fb;
    border: 5px solid #86c3d7;

    &::before {
      left: 55px;
      background-color: #ffdf6d;
      border: 5px solid #e1c348;
    }

    &::after {
      opacity: 100;
      animation-name: bounce_in;
      animation-duration: 0.6s;
      animation-delay: 0.1s;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }

    > span {
      opacity: 0;
      box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
        rgba(255, 255, 255, 0.1) 12px 10px 0 -5px, #fff 38px 18px 0 -3px,
        rgba(255, 255, 255, 0.1) 32px 34px 0 -4px, #fff 20px 24px 0 -5.5px,
        rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
      animation: none;

      &::before {
        left: 25px;
        transform: rotate(70deg);
      }
    }
  }

  @keyframes bounce_in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }

    50% {
      opacity: 100;
      transform: scale(1.1);
    }

    55% {
      transform: scale(1.1);
    }

    75% {
      transform: scale(0.9);
    }

    100% {
      opacity: 100;
      transform: scale(1);
    }
  }
`;

// https://codepen.io/ashleynolan/pen/wBppKz
export const ToggleThemeLabel = styled.label`
  display: block;
  transition: all 250ms ease-in;
  position: relative;
  border-radius: 70px;
  width: 125px;
  height: 70px;
  background-color: #3c4145;
  border: 5px solid #1c1c1c;
  cursor: pointer;

  &::before {
    box-sizing: border-box;
    content: '';
    display: block;
    transition: all 250ms ease-in;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    position: absolute;
    top: 2px;
    left: 4px;
    border: 5px solid #e3e3c7;
    background-color: #fff;
  }

  &::after {
    box-sizing: border-box;
    content: '';
    display: block;
    transition: opacity 100ms ease-in;
    position: absolute;
    top: 62%;
    left: 39px;
    z-index: 10;
    width: 11.2px;
    height: 11.2px;
    opacity: 0;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: #fff 0 0, #fff 3px 0, #fff 6px 0, #fff 9px 0, #fff 11px 0,
      #fff 14px 0, #fff 16px 0, #fff 21px -1px 0 1px, #fff 16px -7px 0 -2px,
      #fff 7px -7px 0 1px, #d3d3d3 0 0 0 4px, #d3d3d3 6px 0 0 4px,
      #d3d3d3 11px 0 0 4px, #d3d3d3 16px 0 0 4px, #d3d3d3 21px -1px 0 5px,
      #d3d3d3 16px -7px 0 1px, #d3d3d3 7px -7px 0 5px;
  }

  > span {
    display: block;
    position: absolute;
    top: 9px;
    left: 52.5%;
    transition: all 250ms ease-in;
    background-color: #fff;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    z-index: 20;
    box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0,
      rgba(255, 255, 255, 0.1) 12px 10px 0 -1px, #fff 38px 18px 0 1px,
      rgba(255, 255, 255, 0.1) 32px 34px 0 0, #fff 20px 24px 0 -1.5px,
      rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
    animation: starry_star 5s ease-in-out infinite;

    &::before {
      box-sizing: border-box;
      content: '';
      display: block;
      transition: all 250ms ease-in;
      position: absolute;
      top: -2px;
      left: -25px;
      width: 18px;
      height: 18px;
      background-color: #fff;
      border-radius: 50%;
      border: 5px solid #e3e3c7;
      box-shadow: #e3e3c7 -28px 0 0 -3px, #e3e3c7 -8px 24px 0 -2px;
      transform-origin: -6px 130%;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      display: block;
      transition: all 250ms ease-in;
    }
  }

  @keyframes starry_star {
    50% {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: #fff 30px -3px 0 0, #fff 12px 10px 0 -1px,
        rgba(255, 255, 255, 0.1) 38px 18px 0 1px, #fff 32px 34px 0 0,
        rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px, #fff 5px 38px 0 1px;
    }
  }
`;

export const ToggleTopicModeContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: #fff;
  }

  input {
    opacity: 0;
    height: 0;

    &:focus + label {
      box-shadow: 0 0 0 4px #fff;
    }

    &:checked + label {
      transform: skew(10deg);

      &::before {
        left: -100%;
      }

      &::after {
        left: 0;
        transform: skew(-10deg);
      }
    }
  }
`;

// Based on https://codepen.io/mallendeo/pen/eLIiG
export const ToggleTopicModeLabel = styled.label`
  margin-top: 16px;
  cursor: pointer;
  height: 32px;
  width: 64px;
  position: relative;
  display: block;
  transition: all 200ms ease;
  backface-visibility: hidden;
  overflow: hidden;
  transform: skew(-10deg);
  background-color: transparent;
  box-shadow: 0 0 0 2px #fff;

  &::before,
  &::after {
    transform: skew(10deg);
    display: inline-block;
    transition: all 200ms ease;
    width: 100%;
    text-align: center;
    position: absolute;
    line-height: 32px;
    font-weight: bold;
    color: #fff;
  }

  &::before {
    content: 'OFF';
    left: 0;
  }

  &::after {
    content: 'ON';
    left: 100%;
  }
`;
