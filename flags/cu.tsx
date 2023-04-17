/**
 * Cuba
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper fill="#fff">
  <StripesHorizontal colors={["#002a8f","#fff"]} count={5}/>
  <path fill="#cf142b" d="M416 240 0 0v480z"/>
  <PentaStar cx={139} r={144}/>
</SvgWrapper>