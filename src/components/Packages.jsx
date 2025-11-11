import React from 'react';
import styles from './Packages.module.css';
import PackageCard from './PackageCard';
import { motion } from 'framer-motion';

const data = [
  {
    name: 'Sederhana',
    priceMale: 'Rp1.950.000',
    priceFemale: 'Rp975.000',
    items: ['Nasi box 25 porsi', 'Gulai kambing', 'Sate kambing', 'Acar & sambal']
  },
  {
    name: 'Hemat',
    priceMale: 'Rp2.350.000',
    priceFemale: 'Rp1.175.000',
    items: ['Nasi box 35 porsi', 'Tongseng kambing', 'Sate kambing', 'Kerupuk & acar']
  },
  {
    name: 'Standar',
    priceMale: 'Rp2.850.000',
    priceFemale: 'Rp1.425.000',
    items: ['Nasi box 50 porsi', 'Gulai kambing', 'Sate kambing', 'Buah & minum']
  },
  {
    name: 'Puas',
    priceMale: 'Rp3.500.000',
    priceFemale: 'Rp1.750.000',
    items: ['Nasi box 70 porsi', 'Tongseng kambing', 'Sate kambing', 'Dessert']
  }
];

const Packages = () => {
  return (
    <section id="packages" className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pilihan Paket Aqiqah
        </motion.h2>
        <div className={styles.grid}>
          {data.map((p, i) => (
            <PackageCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
