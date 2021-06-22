import { useEffect } from 'react';
import styles from './index.module.scss';
import CryptoList from './crypto-list';

const MainPage: React.FC = () => {
  useEffect(() => {
  })

  return <div className={styles.wrapper}>
    <CryptoList />
  </div>;
}

export default MainPage;