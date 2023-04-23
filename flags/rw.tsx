/**
 * Rwanda
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Star from '../tools/Star'
import Circle from '../tools/Circle'

export default () => <SvgWrapper>
  <StripesHorizontal colors={["#00A1DE","#00A1DE","#FAD201","#20603D"]}/>
  <g fill="#E5BE01">
    <Star ends={24} diameter={150} innerDiameter={48} x={591} y={125} />
    <Circle stroke="#00A1DE" r={23} cx={591} cy={125} strokeWidth={2} />
  </g>
</SvgWrapper>