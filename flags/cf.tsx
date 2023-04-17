/**
 * Central African Republic
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <StripesHorizontal colors={["#003082","#fff", "#289728","#ffce00"]}>
    <path stroke="#d21034" d="M360 0v480"/>
  </StripesHorizontal>
  <Star fill="#fcd116" ends={5} diameter={108} innerDiameter={42} x={120} y={65}/>
</SvgWrapper>