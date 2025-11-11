import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <h2>Tentang Kami</h2>
          <p>
            Let’s Klik Aqiqah.id adalah layanan aqiqah profesional dengan standar syariah dan kualitas rasa terbaik.
            Kami menyediakan hewan sehat, proses penyembelihan sesuai ketentuan, dan pengolahan oleh tim dapur yang berpengalaman.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
