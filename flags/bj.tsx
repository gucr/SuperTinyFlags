/**
 * Benin
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <StripesHorizontal colors={['#fcd116', '#e8112d']}/>
  <Square fill="#008751" x2={288}/>
</SvgWrapper>