/**
 * United Arab Emirates
 *
 */
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import React from 'react'
import Square from '../tools/Square'


export default () => <SvgWrapper>
  <StripesHorizontal colors={['#00732f', '#fff', '#000']}/>
  <Square fill="red" x2={220}/>
</SvgWrapper>