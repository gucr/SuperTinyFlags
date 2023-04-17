/**
 * Azerbaijan
 *
 */
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import React from 'react'
import Star from '../tools/Star'

export default () => <SvgWrapper fill="#fff">
  <StripesHorizontal colors={['#00B5E2', '#EF3340', '#509E2F']}/>
  <Star ends={8} diameter={81} innerDiameter={40} y={240} x={415}/>
  <path d="M393.5 196.5A72 72 0 10393.5 282.5 60 60 0 11393.5 196.5"/>
</SvgWrapper>