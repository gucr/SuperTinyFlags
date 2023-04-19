/**
 * Ghana
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper>
  <StripesHorizontal colors={['#ce1126', '#fcd116', '#006b3f']}/>
  <PentaStar r={177} cy={248}/>
</SvgWrapper>