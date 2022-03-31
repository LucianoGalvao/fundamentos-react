import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import Title from '../Title';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title || 'JStack Blog'}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
      <hr />
    </>
  );
}

Header.prototypes = {
  onToggleTheme: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
