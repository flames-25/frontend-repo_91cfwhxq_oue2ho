import React from 'react';
import styles from './Benefits.module.css';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, ChefHat, BookCheck } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, title: 'Hewan Sehat', desc: 'Dipilih dan dirawat dengan standar kesehatan terbaik.' },
  { icon: Truck, title: 'Gratis Ongkir', desc: 'Antar tepat waktu ke lokasi Anda tanpa biaya.' },
  { icon: ChefHat, title: 'Chef Profesional', desc: 'Diolah oleh tim dapur berpengalaman dan higienis.' },
  { icon: BookCheck, title: 'Sertifikat Syariah', desc: 'Pelaksanaan sesuai syariat dengan sertifikat resmi.' },
];

const Benefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Kenapa Let’s Klik Aqiqah.id?
        </motion.h2>
        <div className={styles.grid}>
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className={styles.iconWrap}>
                <b.icon className={styles.icon} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
