import React from "react";
import styles from "./Navbar.module.css";
import {NavLink, Link} from 'react-router-dom';

function Navbar() {

  const activeStyle = {
    textDecoration: 'none',
    paddingBottom: '13px',
    color: '#FDFDB2',
  };

  return (
  <div>
    <nav className={styles.navbar}>
      <div><Link to="/" className={styles.logo} >Front-end study</Link></div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/video" activeStyle={activeStyle} className={styles.link}>참고 강의</NavLink></li>
        <li><NavLink to="/problems" activeStyle={activeStyle} className={styles.link}>푼 문제들</NavLink></li>
      </ul>
    </nav>
  </div>

  );
}

export default Navbar;