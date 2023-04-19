/**
 * Grenada
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Circle from '../tools/Circle'
import RepeatOnPath from '../tools/RepeatOnPath'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper fill="#fcd116">
  <Square fill="#ce1126"/>
  <Square fill="#007a5e" x1={60} y1={67} x2={660} y2={413}/>
  <path d="M60 67h600L60 413h600Z"/>
  <Circle r={57.6} fill="#ce1126"/>
  <path fill="#ce1126" d="M122 231q10 23 9 43-15-8-33-30z"/>
  <path d="M86 194c11 22-28 74 35 87q-13-21-10-43 21 10 31 31c22-60-42-55-56-75z"/>
  <RepeatOnPath path="M0 3.5h169 160 160V416H329 169Z">
    <PentaStar id="gd-b" r={62} cx={31} cy={31}/>
  </RepeatOnPath>
  <use x="181" y="111" href="#gd-b" transform="scale(1.7)"/>
</SvgWrapper>