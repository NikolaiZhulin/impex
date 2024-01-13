import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const BackgroundEllipsis = () => {
  console.log(1);
  return (
    <>
      <div className={cn(styles.ellipse, styles.ellipse1)} />
      <div className={cn(styles.ellipse, styles.ellipse2)} />
      <div className={cn(styles.ellipse, styles.ellipse3)} />
      <div className={cn(styles.ellipse, styles.ellipse4)} />
      <div className={cn(styles.ellipse, styles.ellipse5)} />
      <div className={cn(styles.ellipse, styles.ellipse6)} />
      <div className={cn(styles.ellipse, styles.ellipse7)} />
      <div className={cn(styles.ellipse, styles.ellipse8)} />
      <div className={cn(styles.ellipse, styles.ellipse9)} />
      <div className={cn(styles.ellipse, styles.ellipse10)} />
    </>
  );
};

export default BackgroundEllipsis;
