/**
 * Norway
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Cross from '../tools/Cross'

export default () => <SvgWrapper>
  <Square fill="#EF2B2D"/>
  <Cross x={240} stroke="#FFF" strokeWidth={120}/>
  <Cross x={240} stroke="#002868" strokeWidth={60}/>
</SvgWrapper>