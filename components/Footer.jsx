// import styles from 'Footer.module.css';
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Gloria Jemutai</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;