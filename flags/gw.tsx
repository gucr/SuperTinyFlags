/**
 * Guinea-Bissau
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Square from '../tools/Square'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper>
  <StripesHorizontal colors={["#fcd116","#009e49"]}/>
  <Square fill="#ce1126" x2={282}/>
  <PentaStar cx={141} r={159}/>
</SvgWrapper>