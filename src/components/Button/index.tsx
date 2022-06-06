import React, { MouseEvent, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { Spinner } from '@styled-icons/evil/Spinner'

type Intent = 'primary' | 'success' | 'error';

type Variant = 'default' | 'text' ;

type ButtonProps = {
  disabled?: boolean;
  intent?: Intent;
  variant?: Variant;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;
  text: React.ReactNode;
  style?: CSSProperties;
}

const genDefaultButtonStyle = (intent: Intent) => css`
  border: none;
  color: white;
  background: ${({ theme }) => theme.colors[intent]};
  box-shadow:
		0 1px 2px rgba(0,0,0,0.07), 
		0 2px 4px rgba(0,0,0,0.07), 
		0 4px 8px rgba(0,0,0,0.07), 
		0 8px 16px rgba(0,0,0,0.07),
		0 16px 32px rgba(0,0,0,0.07), 
		0 32px 64px rgba(0,0,0,0.07);
  &:hover:enabled,
  &:focus:enabled {
    opacity: 0.7;
  }
  &:active:enabled {
    opacity: 0.5;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: not-allowed;
  }
`

const genTextButtonStyle = (intent: Intent) => css`
  color: ${({ theme }) => theme.colors[intent]};
  border: none;
  background: transparent;
  &:hover:enabled,
  &:focus:enabled {
    background: #eee;
  }
  &:active:enabled {
    opacity: 0.5;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: not-allowed;
  }
`

const StyledButton = styled('button')<{
  loading?: boolean;
  variant: Variant;
  intent: Intent;
}>`
  height: 32px;
  min-width: 20px;
  padding: 8px;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 100%;
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  ${({variant, intent}) => {
    switch (variant) {
      case 'default':
        return genDefaultButtonStyle(intent);
      case 'text':
        return genTextButtonStyle(intent);
    }
  }}
`;

const LoadingSpinner = styled(Spinner)`
  -webkit-animation: rotating 1.5s linear infinite;
  -moz-animation: rotating 1.5s linear infinite;
  -ms-animation: rotating 1.5s linear infinite;
  -o-animation: rotating 1.5s linear infinite;
  animation: rotating 1.5s linear infinite;
  height: 20px;
  width: 20px;
  margin-right: 4px;
`

const Button = ({
  text,
  onClick,
  disabled,
  loading = false,
  intent = 'primary',
  variant = 'default',
  style
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      intent={intent}
      variant={variant}
      style={style}
    >
      {loading && <LoadingSpinner/>}
      {text}
    </StyledButton>
  );
};

export default Button;