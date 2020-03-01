import React from 'react';
import styles from './Cube.module.scss';
import cx from 'classnames'

const pieceColor = (color) => color || 'transparent';

export const Cube= ({front,back,right,left,top,bottom, index, cube}) => (
    <div className={cx(styles.scene, styles[`index${index}`])}>
    <div className={styles.cube}>
      <div style={{'--cubeFaceFrontColor': `${pieceColor(front)}`}} className={cx(styles.cubeFace, styles.cubeFaceFront)}>{cube}</div>
      <div style={{'--cubeFaceBackColor': `${pieceColor(back)}`}} className={cx(styles.cubeFace, styles.cubeFaceBack)}></div>
      <div style={{'--cubeFaceRightColor': `${pieceColor(right)}`}} className={cx(styles.cubeFace, styles.cubeFaceRight)}></div>
      <div style={{'--cubeFaceLeftColor': `${pieceColor(left)}`}} className={cx(styles.cubeFace, styles.cubeFaceLeft)}></div>
      <div style={{'--cubeFaceTopColor': `${pieceColor(top)}`}} className={cx(styles.cubeFace, styles.cubeFaceTop)}></div>
      <div style={{'--cubeFaceBottomColor': `${pieceColor(bottom)}`}} className={cx(styles.cubeFace, styles.cubeFaceBottom)}></div>
    </div>
  </div>
  );

