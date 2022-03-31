import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import styles from './Header.scss';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{props.title || 'JStack Blog'}</h1>
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
