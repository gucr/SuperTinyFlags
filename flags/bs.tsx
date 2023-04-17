/**
 * Bahamas
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <Square fill="#00778b"/>
  <Square fill="#ffc72c" y1={160} y2={320}/>
  <path d="M416 240 0 480V0z"/>
</SvgWrapper>