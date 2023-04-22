/**
 * Libyan Arab Jamahiriya
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import StripesHorizontal from '../tools/StripesHorizontal'

export default () => <SvgWrapper>
  <Square/>
  <StripesHorizontal colors={["#E70013", null, null, "#239E46"]}/>
  <path fill="#fff" d="M402.4 197.6A60 60 0 10402.5 282.4 52.1 52.1 0 11402.4 197.6M389.2 240 469.9 213.8 420 282.4V197.5L469.9 266.1Z"/>
</SvgWrapper>