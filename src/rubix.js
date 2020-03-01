const rubixCube = {
  A: {index:0, back:'white', top:'red', left:'blue'},
  B: {index:1,back:'white', top:'red', right:'green'},
  C: {index:2,back:'white', bottom:'purple', left:'blue'},
  D: {index:3,back:'white', bottom:'purple', right:'green'},
  E: {index:4,back:'yellow', top:'red', left:'blue'},
  F: {index:5,back:'yellow', top:'red', right:'green'},
  G: {index:6,back:'yellow', bottom:'purple', left:'blue'},
  H: {index:7,back:'yellow', bototm:'purple', right:'green'}
}

// get all key values of 'from' index value. Then apply
//e.g keyValues  = [A , B, C]
const twistCube = directions => cube => {
  const keyValues = directions.map(({from}) => Object.entries(cube).filter(([,{index}]) => index === from )[0][0]  );
  return keyValues.reduce( (cubeState, key, index)=>{
   cubeState[key].index = directions[index].to
  return {...cubeState}
}, cube) }

const reverse = array => array.map(({from, to}) => ({from:to, to:from}))


const topClockwise = [ {from:0,to:5}, {from:1,to:0}, {from:5,to:4},{from:4,to:1} ]
const topAntiClockwise = reverse(topClockwise)

const topCWiseTwist = (cube) =>() => twistCube(topClockwise)(cube)
const topACWiseTwist = (cube) => ()=>  twistCube(topAntiClockwise)(cube)

const bottomClockwise = [ {from:2,to:7}, {from:3,to:2}, {from:7,to:6},{from:6,to:3} ]
const bottomAntiClockwise = reverse(bottomClockwise)

const bottomCWiseTwist = (cube) => () =>  twistCube(bottomClockwise)(cube)
const bottomACWiseTwist = (cube) => () =>  twistCube(bottomAntiClockwise)(cube)


const frontClockWise = [ {from:0,to:1}, {from:1,to:3}, {from:3,to:2},{from:2,to:0} ]
const frontAntiClockWise = reverse(frontClockWise)

const frontCWiseTwist = (cube) => () =>  twistCube(frontClockWise)(cube)
const frontACWiseTwist = (cube) => () =>  twistCube(frontAntiClockWise)(cube)


const rightClockWise = [ {from:1,to:5}, {from:5,to:7}, {from:7,to:3},{from:3,to:1} ]
const rightAntiClockWise = reverse(rightClockWise)

const rightCWiseTwist = (cube) => () =>  twistCube(rightClockWise)(cube)
const rightACWiseTwist = (cube) => () =>  twistCube(rightAntiClockWise)(cube)


const leftClockWise = [ {from:0,to:2}, {from:4,to:0}, {from:6,to:4},{from:2,to:6} ]
const leftAntiClockWise = reverse(leftClockWise)

const leftCWiseTwist = (cube) => () =>  twistCube(leftClockWise)(cube)
const leftACWiseTwist = (cube) => () =>  twistCube(leftAntiClockWise)(cube)



// A B    E F     0 1  4 5   4   6
// C D    G H     2 3  6 7   2   0

// T C      *AB* CD *EF* GH -> *BE* CD *FA* GH
// T AC     *AB* CD *EF* GH -> *FA* CD *BE* GH
// B C      AB *CD* EF *GH* -> AB *DG EF *HC*
// B AC     AB *CD* EF *GH* -> AB *HC EF *DG*
// F C      *AB* *CD* EF GH  -> *CA* *BD* EF GH
// F AC     *AB* *CD* EF GH -> *BD* *AC* EF GH

// R C   A*B* C*D* E*F* G*H* ->  A*D* C*H* E*B* G*F*
// R AC   A*B* C*D* E*F* G*H* ->  A*F* C*B* E*H* G*D*

// L C   *A*B *C*D *E*F *G*H -> *E*B *A*D *G*F *C*H
// L AC  *A*B *C*D *E*F *G*H -> *C*B *G*D *A*F *E*H


// A B    E F    C B    A F
// C D    G H    G D    E H

// Current:
// A E  H C
// D B   G F
// AEDB HCGF
// ABCDEFGH

export {
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
}



// const cube = {
//   A: ['white', 'red', 'blue'],
//   B: ['white', 'red', 'green'],
//   C: ['white', 'purple', 'blue'],
//   D: ['white', 'purple', 'green'],
//   E: ['yellow', 'red', 'blue'],
//   F: ['yellow', 'red', 'green'],
//   G: ['yellow', 'purple', 'blue'],
//   H: ['yellow', 'purple', 'green']
// }

// const cubeArray = ['A','B','C','D','E','F','G','H']

