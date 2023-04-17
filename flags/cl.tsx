/**
 * Chile
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Star from '../tools/Star'

export default () => <SvgWrapper fill="white">
  <Square/>
  <Square fill="#0039a6" x2={240} y2={240}/>
  <Square fill="#d72b1f" y1={240}/>
  <Star ends={5} diameter={120} innerDiameter={46} x={120} y={120}/>
</SvgWrapper>