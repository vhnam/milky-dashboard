import React, {FC} from 'react';
import styled from 'styled-components';

import {TagType} from './types';

interface TagProps {
  variant?: TagType;
}

const Container = styled.span<{variant: TagType}>`
  display: ${(props) =>
    TagType.Default === props.variant ? 'none' : undefined};
  padding: 0.5rem 1rem;
  min-width: 5rem;
  font-size: 0.875rem;
  color: ${(props) =>
    TagType.Silver === props.variant
      ? props.theme.textColor
      : props.theme.colorGrey};
  line-height: calc(16 / 14);
  text-align: center;
  background-color: ${(props) =>
    TagType.Silver === props.variant
      ? '#D7D7D7'
      : TagType.Gold === props.variant
      ? '#AF9500'
      : TagType.Bronze === props.variant
      ? '#AD8A56'
      : 'transparent'};
  border-radius: 0.25rem;
`;

const Tag: FC<TagProps> = ({variant = TagType.Default}) => (
  <Container variant={variant}>
    {TagType.Default !== variant && variant}
  </Container>
);

export default Tag;
