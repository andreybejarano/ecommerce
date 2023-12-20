import React from 'react';
import Link from 'next/link';

import styles from './Herder.module.css';

// JSX html/javascript

function Header() {
  const menu = [
    {
      path: '/',
      label: 'Inicio'
    },
    {
      path: '/login',
      label: 'Login'
    },
    {
      path: '/register',
      label: 'Registro'
    },
    {
      path: '/andrey',
      label: 'Andrey'
    }
  ];
  return (
    <header className={styles.root}>
      {menu.map((item, key) =>
        <React.Fragment key={key}>
          <Link className={styles.link} href={item.path}>{item.label}</Link>
        </React.Fragment>
      )}
    </header>
  );
}

export default Header;
