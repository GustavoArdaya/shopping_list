import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <img className={styles.navImage} src={require('./img/logo.png')} />
      <div className={styles.textNavbar}>
      <h1>Shopping </h1>
      <h1>List</h1>
      </div>
    </div>
  );
}
