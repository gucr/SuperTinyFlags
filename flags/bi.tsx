/**
 * Burundi
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Circle from '../tools/Circle'
import Star from '../tools/Star'
import Reuse from '../tools/Reuse'

export default () => <SvgWrapper fill="#c8102e">
  <Square/>
  <path fill="#43b02a" stroke="#fff" strokeWidth="80" d="M-81-25v529L800-25v529z"/>
  <Circle r={136.3} fill="#fff"/>
  <Star id="bi-a" stroke="#43B02A" strokeWidth="3.6" ends={6} diameter={60} innerDiameter={34} y={169}/>
  <Reuse id="bi-a" instances={[{y: 106, x: -61.5}, {y: 106, x: 61.5}]}/>
</SvgWrapper>