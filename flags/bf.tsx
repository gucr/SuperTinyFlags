/**
 * Burkina Faso
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <StripesHorizontal colors={['#ef2b2d', '#009e49']}/>
  <Star fill="#fcd116" ends={5} diameter={160} innerDiameter={60}/>
</SvgWrapper>