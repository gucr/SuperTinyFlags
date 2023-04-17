/**
 * Czech Republic
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import StripesHorizontal from '../tools/StripesHorizontal'

export default () => <SvgWrapper>
  <StripesHorizontal colors={["#fff","#d7141a"]}/>
  <path fill="#11457e" d="M360 240 0 0v480z"/>
</SvgWrapper>