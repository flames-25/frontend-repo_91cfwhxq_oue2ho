import React from 'react';
import styles from './PackageCard.module.css';
import { motion } from 'framer-motion';

const PackageCard = ({ name, priceMale, priceFemale, items }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h3>{name}</h3>
      </div>
      <div className={styles.prices}>
        <div>
          <span className={styles.badge}>Laki-laki</span>
          <p className={styles.price}>{priceMale}</p>
        </div>
        <div>
          <span className={styles.badge}>Perempuan</span>
          <p className={styles.price}>{priceFemale}</p>
        </div>
      </div>
      <ul className={styles.list}>
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <a className={styles.btn} href="#contact">Pilih Paket</a>
    </motion.div>
  );
};

export default PackageCard;
