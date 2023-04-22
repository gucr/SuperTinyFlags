/**
 * Dominica
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Cross from '../tools/Cross'
import Circle from '../tools/Circle'
import RepeatOnPath from '../tools/RepeatOnPath'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <Square fill="#046a38"/>
  <g strokeWidth={40}>
    <Cross y={200} x={320} stroke="#ffcd00"/>
    <Cross stroke="#000"/>
    <Cross y={280} x={400} stroke="#fff"/>
  </g>
  <Circle r={120} fill="#d50032"/>
  <RepeatOnPath  orient="auto" refX="16" path="m360 133 62 20 39 54v66l-39 53-62 20-63-20-39-53v-66l39-54zz">
    <Star fill="#046a38" stroke="#000" stroke-width=".8" ends={5} diameter={34} innerDiameter={12} x={16} y={17}/>
  </RepeatOnPath>
    <g stroke="#000" strokeWidth=".5">
    <path fill="#9063CD" d="m367 180a14 11 5 10-19 15 50 53 0 0016 82l29-66z"/>
    <path fill="#046A38" d="m343 204t23 50l-3 21-10-7q-3 20 14 19a17 60-15 10-5-92l-16 0z"/>
    <path fill="#9c4a00" d="m329 298q-5-24 12-8h48q6 3 0 8z"/>
    <path fill="#FFCD00" d="m337 199q-6-16 7-14 9 11-5 10z"/>
  </g>
</SvgWrapper>