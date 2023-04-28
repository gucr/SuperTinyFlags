/**
 * Philippines
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import RepeatOnPath from '../tools/RepeatOnPath'
import Circle from '../tools/Circle'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper fill="#FCD116">
  <StripesHorizontal colors={["#0038A8", "#CE1126"]} />
  <path fill="#FFF" d="M415.7 240 0 480V0" />

  <RepeatOnPath path="m150 138.7 71.7 29.6 29.7 71.7-29.7 71.7-71.7 29.6-71.6-29.6L48 240l29.7-71.7zz" orient="auto" refX="17">
    <path d="m0 15.7 5.1-5.1 6 45.4h-3zm10.8-9.5 6.2-6.2 6.3 6.2-3.2 48.6h-6.1zm18.2 4.4 5.1 5.1-7.9 39.5h-3.1z" />
  </RepeatOnPath>

  <RepeatOnPath path="M37 90 37 64 342 240 37 416 37 0" orient="auto" refX={28} refY={28}>
    <PentaStar r={54} cx={28} cy={28} />
  </RepeatOnPath>

  <Circle cx={150} r={48} />

</SvgWrapper>