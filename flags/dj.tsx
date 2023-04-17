/**
 * Djibouti
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper>
    <StripesHorizontal colors={["#6ab2e7","#12ad2b"]}/>
  <path fill="#fff" d="M415 240 0 0v480z"/>
  <PentaStar fill="#d7141a" cx={159} cy={246} r={132}/>
</SvgWrapper>