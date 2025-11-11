import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { name: 'Alya', text: 'Pelayanan ramah, rasa masakan enak, dan pengiriman tepat waktu. Rekomendasi banget!' },
  { name: 'Rizky', text: 'Prosesnya mudah, konsultasi jelas, dan yang terpenting sesuai syariat.' },
  { name: 'Dewi', text: 'Kambingnya sehat, bumbu meresap, keluarga semua suka. Terima kasih!' },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Apa Kata Pelanggan</h2>
        <div className={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.slide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <p className={styles.text}>“{quotes[index].text}”</p>
              <p className={styles.author}>— {quotes[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
