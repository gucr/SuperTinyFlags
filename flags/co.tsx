/**
 * Colombia
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <Square fill="#ffe800"/>
<StripesHorizontal y1={240} colors={["#00148e","#da0010"]}/>
</SvgWrapper>