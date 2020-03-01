import React, { useState } from 'react';
import logo from './logo.svg';
import {Cube} from './Cube';
import {Button} from './Button';
import cx from 'classnames';
import { 
  rubixCube,
  topCWiseTwist,
  topACWiseTwist,
  bottomCWiseTwist,
  bottomACWiseTwist,
  frontCWiseTwist,
  frontACWiseTwist,
  rightCWiseTwist,
  rightACWiseTwist,
  leftCWiseTwist,
  leftACWiseTwist
} from './rubix';
import styles from './App.module.scss';

const setOrder = (cube, orderedKeys) => Object.entries(cube).map( ([,{index}])=> orderedKeys[index])

function App() {
 const [currentRubixCube, setCurrentRubixCube] = useState(rubixCube)
 const orderedKeys = Object.keys(currentRubixCube)
 const [lastOrderedKeys, setLastOrderedKeys] = useState(orderedKeys) 
 const order = Object.entries(currentRubixCube).map( ([,{index}])=> orderedKeys[index] )
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>

      {order}
      <br></br>
      <div className={styles.orderedKeys}>
      {lastOrderedKeys.map((key, i) => <span className={cx({[styles.different]:key !== order[i]})} key={key}>{key}</span>  )}
      </div>
      </header>
      <button style={{'height':'3rem', 'width':'4rem'}} onClick={()=> setLastOrderedKeys(setOrder(currentRubixCube, orderedKeys))}>set Order state</button>
      <div className={styles.main}>
        <Button className={styles.topLeftButton} setCurrentRubixCube={setCurrentRubixCube} onClick={topCWiseTwist(currentRubixCube)} label='top left'/>
        <Button className={styles.frontClockWiseButton} setCurrentRubixCube={setCurrentRubixCube} onClick={frontCWiseTwist(currentRubixCube)} label='front clockwise'/>
        <Button className={styles.topRightButton} setCurrentRubixCube={setCurrentRubixCube} onClick={topACWiseTwist(currentRubixCube)} label='top right'/>
        <Button className={styles.leftUpButton} setCurrentRubixCube={setCurrentRubixCube} onClick={leftACWiseTwist(currentRubixCube)} label='up'/>
        <Button className={styles.rightUpButton} setCurrentRubixCube={setCurrentRubixCube} onClick={rightCWiseTwist(currentRubixCube)} label='up'/>
        <div className={styles.cubeContainer}>
          {Object.entries(currentRubixCube).map(([key,value]) => <Cube key={key} cube={key} {...value}/> )}
        </div>
        <Button className={styles.leftDownButton} setCurrentRubixCube={setCurrentRubixCube} onClick={leftCWiseTwist(currentRubixCube)} label='down'/>
        <Button className={styles.rightDownButton} setCurrentRubixCube={setCurrentRubixCube} onClick={rightACWiseTwist(currentRubixCube)} label='down'/>
        <Button className={styles.bottomLeftButton} setCurrentRubixCube={setCurrentRubixCube} onClick={bottomCWiseTwist(currentRubixCube)} label='bottom left'/>
        <Button className={styles.frontAntiClockWiseButton} setCurrentRubixCube={setCurrentRubixCube} onClick={frontACWiseTwist(currentRubixCube)} label='front anti clockwise'/>
        <Button className={styles.bottomRightButton} setCurrentRubixCube={setCurrentRubixCube} onClick={bottomACWiseTwist(currentRubixCube)} label='bottom right'/>
      </div>
    </div>
  );
}

export default App;
