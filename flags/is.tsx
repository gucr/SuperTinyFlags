/**
 * Iceland
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Cross from '../tools/Cross'
import Square from '../tools/Square'

export default () => <SvgWrapper fill="#fff">
  <Square fill="#075098"/>
  <Cross stroke="#fff" strokeWidth={107} x={250}/>
  <Cross stroke="#d32237" strokeWidth={54} x={250}/>
</SvgWrapper>