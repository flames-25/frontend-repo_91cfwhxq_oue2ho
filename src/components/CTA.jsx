import React from 'react';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';

const CTA = () => {
  const waUrl = 'https://wa.me/6281234567890?text=Assalamualaikum%20Saya%20ingin%20konsultasi%20Aqiqah';
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <h3>Konsultasi Gratis</h3>
          <p>Tim kami siap membantu memilih paket terbaik sesuai kebutuhan Anda.</p>
          <a href={waUrl} target="_blank" className={styles.btn} rel="noreferrer">Chat WhatsApp</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
