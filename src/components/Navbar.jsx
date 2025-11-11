import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => scrollTo('home')}>
          <span className={styles.logoGlow}>Let’s Klik</span>
          <span className={styles.logoAccent}> Aqiqah.id</span>
        </div>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <button className={styles.navItem} onClick={() => scrollTo('home')}>Home</button>
          <button className={styles.navItem} onClick={() => scrollTo('packages')}>Paket Aqiqah</button>
          <button className={styles.navItem} onClick={() => scrollTo('about')}>Tentang Kami</button>
          <button className={styles.navItem} onClick={() => scrollTo('contact')}>Kontak</button>
        </nav>
        <button className={styles.burger} aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
