/**
 * Mauritania
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <Square fill="#d01c1f"/>
  <Square fill="#00a95c" y1={96} y2={384}/>
  <path fill="gold" d="M360 144l30.2 91.6-78.3-57 96.3 0-78.4 57.1ZM180 161c39 167 321 169 360 0a138 134.2 0 11-360 0"/>
</SvgWrapper>