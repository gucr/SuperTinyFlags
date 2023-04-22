/**
 * Honduras
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import RepeatOnPath from '../tools/RepeatOnPath'
import Star from '../tools/Star'

export default () => <SvgWrapper fill="#18C3DF">
  <Square/>
  <Square fill="#fff" y1={160} y2={320}/>
   <RepeatOnPath path="M199 175h1v80h266v-80l-133 43h1">
    <Star diameter={52} innerDiameter={18} ends={5} x={27} y={27}/>
  </RepeatOnPath>
</SvgWrapper>