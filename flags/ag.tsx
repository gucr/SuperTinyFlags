/**
 * Antigua and Barbuda
 *
 */

import SvgWrapper from '../tools/SvgWrapper'
import React from 'react'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <Square fill="#000"/>
  <Square fill="#0072C6" y1={188} y2={291}/>
  <Square fill="#fff" y1={291}/>
  <path fill="#ce1126" d="M0 0v480h720V0L360 480Z"/>
  <path fill="#fcd116" d="m436 172 68-44-79 16 45-67-67 46 16-80-44 68-15-80-16 80-44-68 16 80-67-46 46 67-80-16 68 44-80 16 313 0z"/>
</SvgWrapper>
