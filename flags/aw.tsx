/**
 * Aruba
 *
 */
import SvgWrapper from '../tools/SvgWrapper'
import React from 'react'
import Square from '../tools/Square'
import Star from '../tools/Star'

export default () => <SvgWrapper>
<Square fill="#418FDE"/>
  <Star ends={4} diameter={143} innerDiameter={48} x={107} y={106} fill="#EF3340" stroke="#fff" strokeWidth={5}/>
  <path stroke="#FFD100" strokeWidth={26.5} d="M0 333h720M0 387h720"/>
</SvgWrapper>
