import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const positionsVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
};

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const property = positionsVariant[position];
  const sizeIndex = sizesVariant[size];
  return `${property}:${theme.space[sizeIndex]}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
