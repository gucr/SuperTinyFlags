/**
 * Congo, The Democratic Republic of the Congo
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <Square fill="#007fff"/>
  <path fill="#ce1021" stroke="#F7D618" strokeWidth="21" d="M741-24-20 383v120L741 97"/>
  <Star fill="#F7D618" ends={5} x={117} y={126} diameter={190} innerDiameter={72}/>
</SvgWrapper>