import React, {FC, HTMLProps, ReactNode} from 'react';
import styled from 'styled-components';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
}

const StyledButton = styled.button`
  color: ${({theme}) => theme.colorWhite};
  background-color: ${({theme}) => theme.primaryColor};
  border-radius: 0.25rem;
  border: none;
  outline: none;
`;

const Button: FC<ButtonProps> = ({children, icon, className}) => {
  return (
    <StyledButton className={className}>
      {icon} {children}
    </StyledButton>
  );
};

export default Button;
