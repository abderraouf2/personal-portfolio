import React from 'react';
import Navlinks from './NavLinks';
import styles from  './header.module.scss';

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
      <Navlinks />
    </div>
  )
}