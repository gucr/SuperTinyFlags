/**
 * Taiwan
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import RepeatOnPath from '../tools/RepeatOnPath'
import Circle from '../tools/Circle'

export default () => <SvgWrapper fill="#fff">
  <Square fill="#FE0000" />
  <Square fill="#000095" x2={360} y2={240} />

  <RepeatOnPath path="m135 42 45-12 45 12 33 33 12 45-12 45-33 33-45 12-45-12-33-33-12-45 12-45zz" orient="auto" refX={11}>
    <path d="m 11 0 L 0 41 h 22 z" />
  </RepeatOnPath>
  <Circle cx="180" cy="120" r="48" strokeWidth={6} stroke="#000095" />
</SvgWrapper>