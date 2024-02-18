// components/LoadingPage.js

import React from 'react';
import styles from './LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingText}>Loading...</div>
        <div className={styles.loadingSpinner}></div>
      </div>
    </div>
  );
};

export default LoadingPage;
