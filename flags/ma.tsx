/**
 * Morocco
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Star from '../tools/Star'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper>
  <Square fill="#c1272d"/>
  <PentaStar fill="none" stroke="#006233" stroke-width="11" r={202}/>
</SvgWrapper>