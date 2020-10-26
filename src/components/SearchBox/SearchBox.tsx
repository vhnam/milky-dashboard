import React, {FC, HTMLProps} from 'react';
import styled from 'styled-components';

import {Search} from '../Icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 0 0.625rem rgba(48, 49, 51, 0.05),
    0 0.0625rem 0.1875rem rgba(48, 49, 51, 0.1);
`;

const Label = styled.div`
  padding: 0.75rem;
  color: ${({theme}) => theme.colorWhite};
  background-color: ${({theme}) => theme.primaryColor};
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`;

const Input = styled.input`
  padding: 0.625rem 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  color: ${({theme}) => theme.textColor};
  line-height: calc(28 / 18);
  border: none;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  outline: none;

  ::-webkit-input-placeholder {
    color: ${({theme}) => theme.colorGrey};
  }

  :-ms-input-placeholder {
    color: ${({theme}) => theme.colorGrey};
  }

  ::placeholder {
    color: ${({theme}) => theme.colorGrey};
  }

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    padding: 0.625rem 1rem;
  }
`;

const SearchBox: FC<HTMLProps<HTMLInputElement>> = ({
  name,
  placeholder,
  value,
  defaultValue,
  className,
}) => {
  return (
    <Container className={className}>
      <Label>
        <Search />
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

export default SearchBox;
