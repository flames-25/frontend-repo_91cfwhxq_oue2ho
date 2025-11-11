import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.wrapper}>
      <div className={styles.splineWrap}>
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className={`${styles.gradOverlay} pointer-events-none`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <p className={styles.kicker}>Layanan Aqiqah Profesional</p>
        <h1 className={styles.title}>Let’s Klik <span>Aqiqah.id</span></h1>
        <p className={styles.subtitle}>
          Pesan, olah, dan antar — semua dengan standar syariah, hewan sehat, dan rasa istimewa.
        </p>
        <div className={styles.ctaRow}>
          <a href="#packages" className={styles.primaryBtn}>Pesan Sekarang</a>
          <a href="#about" className={styles.ghostBtn}>Lihat Paket</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
