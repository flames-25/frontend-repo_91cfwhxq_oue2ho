import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}><span>Let’s Klik</span> Aqiqah.id</div>
          <p>Jl. Berkah No. 123, Jakarta • 0812-3456-7890 • info@letsklikaqiqah.id</p>
        </div>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Tiktok">Tiktok</a>
        </div>
      </div>
      <div className={styles.copy}>© {new Date().getFullYear()} Let’s Klik Aqiqah.id. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
