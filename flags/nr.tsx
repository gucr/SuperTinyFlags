/**
 * Nauru
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <Square fill="#002B7F"/>
  <Square fill="#FFC61E" y1={220.5} y2={260.6}/>
  <Star ends={12} diameter={160} innerDiameter={80} x={190} y={340} fill="#fff"/>
</SvgWrapper>