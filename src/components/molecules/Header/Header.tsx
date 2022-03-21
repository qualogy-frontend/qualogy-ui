import React from 'react';
import { Row } from '../../atoms';

export const Header: React.FC = ({ children }) => {
  return <Row height="initial">{children}</Row>;
};
