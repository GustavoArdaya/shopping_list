import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      {/* <img source='./img/logo.png' alt='logo' /> */}
      <h1 className={styles.textNavbar}>Shopping List</h1>
    </div>
  );
}
