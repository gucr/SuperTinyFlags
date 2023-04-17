/**
 * Bosnia and Herzegovina
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import RepeatOnPath from '../tools/RepeatOnPath'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <Square fill="#002395"/>
  <path fill="#fecb00" d="M239 0h480v480z"/>
  <RepeatOnPath path="m0 0 110-50 60 60 60 60 60 60 60 60 60 60 60 60 60 60 60 60L0 0">
    <Star fill="#fff" x={43} y={45} diameter={90} innerDiameter={34} ends={5}/>
  </RepeatOnPath>
</SvgWrapper>