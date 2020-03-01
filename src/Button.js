import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';

export const Button= ({label, onClick, setCurrentRubixCube, className}) => (
    <button onClick={()=> setCurrentRubixCube(onClick)} className={cx(className,styles.button)}>{label}</button>
  );

