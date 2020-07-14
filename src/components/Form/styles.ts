import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';
import SimpleBar from 'simplebar-react';

import wave from '../../assets/wave.png';

export const Container = styled(SimpleBar)`
  max-height: calc(70vh - 48px);

  .simplebar-track.simplebar-horizontal {
    visibility: hidden !important;
    display: none !important;
  }

  .simplebar-track.simplebar-vertical {
    right: -18px;

    .simplebar-scrollbar::before {
      background-color: #fff;
      transition: opacity 0.3s linear;
    }

    .simplebar-scrollbar.simplebar-visible::before {
      opacity: 0.8;
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;

interface Button {
  activated?: boolean;
}

export const Button = styled.button<Button>`
  margin-top: 16px;
  align-self: flex-end;
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  position: relative;
  overflow: hidden;
  transition-duration: 0.5s;
  user-select: none;

  &::before {
    content: 'Copiado!';
    position: absolute;
    transform: translateX(-50%) translateY(-150%);
    z-index: 1;
    opacity: 0;
    transition-duration: 0.5s;
  }

  span {
    display: block;
    position: relative;
    z-index: 1;
    transition-duration: 0.5s;
  }

  .wave {
    position: absolute;
    top: calc(100% + 22px);
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition-duration: 1s;

    &::before {
      content: '';
      position: absolute;
      top: -22px;
      left: 0;
      width: 100%;
      height: 22px;
      filter: brightness(0) invert(1);
      background: url(${wave});
      animation: slideWaves 0.5s linear infinite;
    }
  }

  ${props =>
    props.activated &&
    css`
      padding: 8px 24px;

      &::before {
        transform: translateX(-50%) translateY(0%);
        opacity: 1;
      }

      span {
        transform: translateY(150%);
        opacity: 0;
      }
    `}

  &:hover,
  &:focus {
    span,
    &::before {
      color: ${props => props.theme.primary};
    }

    .wave {
      top: 0;
    }
  }

  @keyframes slideWaves {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 118px;
    }
  }
`;
