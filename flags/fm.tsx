/**
 * Micronesia, Federated States of Micronesia
 * @todo prevent SVO from double closing path (ZZ)
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import PentaStar from '../templates/PentaStar'
import Square from '../tools/Square'
import RepeatOnPath from '../tools/RepeatOnPath'

export default () => <SvgWrapper>
  <Square fill="#6797d6"/>
  <RepeatOnPath path="M360 48 552 240 360 432 168 240ZZ" orient="auto" refX={50}>
    <PentaStar fill="#fff" cy={48} cx={50} r={96}/>
  </RepeatOnPath>
</SvgWrapper>